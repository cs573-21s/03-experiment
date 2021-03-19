data = extraparts
library(ggplot2) 
data$truePercent <- data$truePercent*100

data$error <- log2(abs(data$reportedPercent - data$truePercent) + 1/8)

library(dplyr) 

data %>% ggplot(aes(x=truePercent))+geom_histogram(binwidth=5)+facet_wrap(~visType)
