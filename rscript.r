#https://statisticsglobe.com/draw-plot-with-confidence-intervals-in-r


library(ggplot2)
p <- ggplot(read.csv("C:/Users/admin/Documents/wpi/20_21/C21/BCB502/Repositories/3/data/intervals.csv"), aes(y, x)) + geom_point() +geom_errorbar(aes(xmin = min, xmax = max))
print(p)