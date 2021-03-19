Assignment 3 - Replicating a Classic Experiment  
===
Introduction
---
There are two parts in our assignment.
- Classical experiment   
As the experiments in Cleveland paper are so classical and fundamental in the history of data visualization, our group replicated experiments in Cleveland paper first. Bar charts, pie charts, stacked bar cahrts are included in our survey.  
   *Github page: https://zihao777.github.io/03-experiment/*  
   *Website: http://47.242.141.68:8000*  
- Radial experiment   
   As an extra part, we want to figure out whether people have a good quantitative cognition for radial bar chart. In general speaking, we designed 3 types of radial bar chart. Each one has 3 bars, 5 bars, 7 bars.  
  *Github page: https://zihao777.github.io/03-experiment/extra/*   
  *Website:  http://47.242.141.68:8000/extra*    
  
To collect the data, we rent a server to deploy our page. Node.js is used to response, required on server, and connect database. The database is managed by MongoDB. All charts are drawn by D3.js.

Experiment
---
### Classical experiment
Classical experiment is consisted with two parts: position-length experiment and position-angle experiment. There are 70 trails and the trails are in random order. In each graph, two bars or areas are marked with a black dot and users need to judge which what percent the smaller to big one. The first page is an instruction page that user can agree us to collect data form them or disagree.
     
- In part-one, users were shown the five types of graphs which are named TYPE1, TYPE2, TYPE3, TYPE4, TYPE5 shown in the below table. Ten groups of data are generated for each type of graph, so part-one has 50 graphs. Each graph is either a bar chart or stacked bar chart.<br><br>
As illustrated in Cleveland paper, for the grouped bar chart, the dots appeared either in the second and third bars in second group or in the second bars of the two groups. For the stacked bar chart, dots appeared either in the top divisions of two bars or top two divisions of left bar or bottom divisions of two bars.<br> <br>
The values involved in the user's judgments were show below:<br>
<img src="img/equation1.png" width="400"><br>
the values not involved in the users' judgments are randomly generated from 0 to 100. All values are shown in a same scale on the page.  
    
- In part-two, users were shown the two types of graphs which are named TYPE6, TYPE7 shown in the below table. Same with part-one, ten groups of data are generated for each type of graph, so part-two has 20 graphs. <br><br>
In this part, each group of  values is generated randomly and can be sumed up to 100. They also ,eet the three requirments in Cleveland paper: The minimum value had to be greater than 3; the maximum value had to be less than 39 and all differences between values in a group had to be greater than 0.1. The values which have the biggest value and smallest value will be marked with black dot.

|Name|Type|Name|Type|Name|Type|
|----|----|----|----|----|----|
|TYPE1|<img src="img/TYPE1.png" width="200">|TYPE2|<img src="img/TYPE2.png" width="200">|TYPE3|<img src="img/TYPE3.png" width="200">|
|TYPE4|<img src="img/TYPE4.png" width="200">|TYPE5|<img src="img/TYPE5.png" width="200">|TYPE6|<img src="img/TYPE6.png" width="200">|
|TYPE7|<img src="img/TYPE7.png" width="200">|||

### Radial experiment
- There are 60 trails and the trails are in random order. In each graph, two bars are marked with a black dot and users need to judge which what percent the smaller to big one. The first page is an instruction page that user can agree us to collect data form them or disagree.<br><br>
In this experiment, users were shown the three types of graphs which are named TYPE8, TYPE9 and TYPE10 shown in the below table. Twenty groups of data are generated for each type of graph, so part-two has 20 graphs.<br><br>
Which bar is marked with black dot is randomly and values involved in the user's judgments were show below:<br>
<img src="img/equation1.png" width="400"><br>
the values not involved in the users' judgments are randomly generated from 20 to 100. All values are shown in a same scale on the page.  

|Name|Type|Name|Type|Name|Type|
|-|-|-|-|-|-|
|TYPE8|<img src="img/TYPE8.png" width="200">|TYPE9|<img src="img/TYPE9.png" width="200">|TYPE10|<img src="img/TYPE10.png" width="200">|

##Analysis

## Technical Achievenment

## Design Achievement
- On the web page, if the user accidentally clicks the Next button without entering a value, their page will send out an alert box to remind the user to enter the answer and null data can be avoided to send to server.<br>
<img src="img/alert.png" width="300"><img src="img/progressbar.png" width="300"><br>
In addition, at the top of the page, users can see which page they are currently on and a progress bar, allowing users to know their progress.<br>








