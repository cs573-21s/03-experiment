import warnings
warnings.filterwarnings("ignore")
import pandas as pd
import math
import random
import numpy as np
import tqdm
import matplotlib.pyplot as plt

total_viz_error = {}
total_viz_error[0] = []
total_viz_error[1] = []
total_viz_error[2] = []


df = pd.read_csv('data/total_data.csv')
df['True_Percent'] = [0]*600 
df['Reported_Percent'] = [0]*600
df['Error'] = [0]*600

mapper = {
	0:'Circular Plot',
	1:'Heatmap Plot',
	2:'Wordcloud Plot'
}


mapper_2 = {
	0:'x_1',
	1:'x_2',
	2:'x_3',
}

for i in tqdm.tqdm(range(10)):
	df_p = df[df['Participant_ID']  == 'sid%i'%(i+1)]
	for k in range(3):
		df_viz = df_p[df_p['Viz_ID'] == mapper[k]]
		for j in range(1,21):
			df_trial = pd.read_csv('data/data_trial_%i.csv'%(j))
			df['Reported_Percent'].iloc[i*60 + k*20 +  j-1] = df_viz[df_viz['Nth_Dataset'] == j].Response/100
			col_data = df_trial[df_trial['compare'] == True]
			col_data = col_data[mapper_2[k]]
			df['True_Percent'].iloc[i*60 + k*20 + j-1] = min(col_data)/max(col_data)
			df['Error'].iloc[i*60 + k*20 + j-1] = math.log(abs(df['Reported_Percent'].iloc[i*60 + k*20 + j-1] - df['True_Percent'].iloc[i*60 + k*20 + j-1])+1/8,2)



viz_rows = []

for x in range(3):
	viz_row = {
		'x':x,
		'y':np.mean(df[df['Viz_ID'] == mapper[x]]['Error']),
		'min':np.percentile(list(df[df['Viz_ID'] == mapper[x]]['Error']), 2.5),
		'max':np.percentile(list(df[df['Viz_ID'] == mapper[x]]['Error']), 97.5)
	}

	viz_rows.append(viz_row)

df_output = pd.DataFrame.from_dict(viz_rows)
df_output.to_csv('data/intervals.csv')