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
The first page is an instruction page that user can agree us to collect data form them or disagree. Classical experiment is consisted with two parts.   
In part-one, users were shown the five types of graphs which are named TYPE1, TYPE2, TYPE3, TYPE4, TYPE5 shown in the below table. Ten group of data are generated for each type of graph, so part-one has 50 graphs. Each graph is either a bar chart or stacked bar chart. In each graph, two bars or areas are marked with a black dot and users need to judge which what percent the smaller to big one.   
As illustrated in Cleveland paper, for the grouped bar chart, the dots appeared either in the second and third bars in second group or in the second bars of the two groups. For the stacked bar chart, dots appeared either in the top divisions of two bars or top two divisions of left bar or bottom divisions of two bars.   
The values involved in the user's judgments were show below:   
<img src="img/equation.png" width="100">   
the values not involved in the users' judgments are randomly generated from 0 to 100. All values are shown in a same scale on the page.     
<br>
|Name|Type|Name|Type|
|-|-|-|-|-|-|
|TYPE1|<img src="img/TYPE1.png" width="200">|TYPE2|<img src="img/TYPE2.png" width="200">|TYPE3|<img src="img/TYPE3.png" width="200">|
|TYPE4|<img src="img/TYPE4.png" width="200">|TYPE5|<img src="img/TYPE5.png" width="200">|TYPE6|<img src="img/TYPE6.png" width="200">|
|TYPE7|<img src="img/TYPE7.png" width="200">|||



### Radial experiment
|Name|Type|Name|Type|Name|Type|
|-|-|-|-|-|-|
|TYPE8|<img src="img/TYPE8.png" width="200">|TYPE9|<img src="img/TYPE9.png" width="200">|TYPE10|<img src="img/TYPE10.png" width="200">|


## Technical achievenment

## Design Achievement







