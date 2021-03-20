import pandas as pd
import numpy as np

df = pd.read_csv('../data/data2.csv')

df_ranking = pd.DataFrame(columns=["chart", "error", "observations", "avg_error", "avg_log_error", "sd", "se"])

charts = df.chart.unique()

for chart in charts:
    temp = df.loc[df.chart == chart]
    total_error = temp.actualerror.sum()
    count = temp.actualerror.size
    average = temp.actualerror.mean()
    average_log = temp.logerror.mean()
    sd = temp.logerror.std()
    se = sd/np.sqrt(count)

    df_ranking.loc[-1] = [chart, total_error, count, average, average_log,sd, se]
    df_ranking.index = df_ranking.index + 1
    df_ranking = df_ranking.sort_index()

df_ranking.sort_values("avg_log_error", inplace=True)

df_ranking.to_csv("../data/ranking.csv", index=False)

temp = df.loc[df.chart == "line"]
temp.to_csv("../data/line.csv")
temp = df.loc[df.chart == "lineAnim"]
temp.to_csv("../data/lineAnim.csv")
temp = df.loc[df.chart == "bar"]
temp.to_csv("../data/bar.csv")
temp = df.loc[df.chart == "barAnim"]
temp.to_csv("../data/barAnim.csv")
temp = df.loc[df.chart == "pie"]
temp.to_csv("../data/pie.csv")
temp = df.loc[df.chart == "pieAnim"]
temp.to_csv("../data/pieAnim.csv")


df_stats = pd.DataFrame(columns=["chart", "Mean log error", "standard deviation error"])

for chart in charts:
    temp = df.loc[df.chart == chart]
    average = temp.logerror.mean()
    stddeviation = temp.logerror.std()

    df_stats.loc[-1] = [chart, average, stddeviation]
    df_stats.index = df_stats.index + 1
    df_stats = df_stats.sort_index()

df_stats.to_csv("../data/stats.csv")


