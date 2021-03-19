data = extraparts
library(ggplot2) 
data$truePercent <- data$truePercent*100


data$error <- log2(abs(data$reportedPercent - data$truePercent) + 1/8)

data$new_name <- ifelse(data$visType  == "Type8","5-bars",
                        ifelse(data$visType  == "Type9","7-bars",
                               ifelse(data$visType  == "Type10","3-bars","notype")))


library(dplyr)                                                                                                    
data$new_name<-factor(data$new_name, levels=c("5-bars","3-bars", "7-bars"))
data %>%  
  ggplot(aes(new_name, error ) ) + # data$new_name if specifying names
  stat_summary(fun.data = "mean_cl_boot", colour = "black", size = 0.5) +
  coord_flip()

