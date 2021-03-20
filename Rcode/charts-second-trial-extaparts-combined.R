data = charts.extrapart.combined
library(ggplot2) 
data$truePercent <- data$truePercent*100

data$error <- log2(abs(data$reportedPercent - data$truePercent) + 1/8)

data$new_name <- ifelse(data$visType  == "Type1","Bar",
                        ifelse(data$visType  == "Type2","Devided",
                               ifelse(data$visType  == "Type3","Bar",
                                      ifelse(data$visType  == "Type4","Devided",
                                             ifelse(data$visType  == "Type5","Devided",
                                                    ifelse(data$visType  == "Type6","Pie",
                                                           ifelse(data$visType  == "Type7","Bar",
                                                                  ifelse(data$visType  == "Type8","5-bars",
                                                                         ifelse(data$visType  == "Type9","7-bars",
                                                                                ifelse(data$visType  == "Type10","3-bars", "notype"))))))))))

library(dplyr)                                                                                                    
library(forcats)
data$new_name<-factor(data$new_name, levels=c("Devided", "5-bars","3-bars", "7-bars", "Pie", "Bar"))
data %>%  
  ggplot(aes(new_name, error ) ) + # data$new_name if specifying names
  stat_summary(fun.data = "mean_cl_boot", colour = "black", size = 0.5) +
  coord_flip()

