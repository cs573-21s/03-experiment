data = charts
library(ggplot2) 
data$truePercent <- data$truePercent*100


data$error <- log2(abs(data$reportedPercent - data$truePercent) + 1/8)


#library(dplyr)                                                                                                    
#data %>%  
#  ggplot(aes(visType, error ) ) +    
#  stat_summary(fun.data = "mean_cl_boot", colour = "black", size = 0.5) +
#  coord_flip()


# write.csv(data$error, "/Users/macbookpro/Desktop/data_error.xlsx")  # To export the accuracy


data$new_name <- ifelse(data$visType  == "Type1","Bar",
                        ifelse(data$visType  == "Type2","Devided",
                               ifelse(data$visType  == "Type3","Bar",
                                      ifelse(data$visType  == "Type4","Devided",
                                             ifelse(data$visType  == "Type5","Devided",
                                                    ifelse(data$visType  == "Type6","Pie",
                                                           ifelse(data$visType  == "Type7","Bar","notype")))))))


library(dplyr)           
### edited code####
data$Type_name<-factor(data$new_name, levels=c("Devided", "Bar", "Pie"))
data %>%  
  ggplot(aes(Type_name, error ) ) +     # visType if no specifying names
  stat_summary(fun.data = "mean_cl_boot", colour = "black", size = 0.5) +
  coord_flip()