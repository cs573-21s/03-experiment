library(ggplot2)
library(dplyr)
library(tidyr)
library(boot)


df <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/data2.csv")
bar <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/bar.csv")
barAnim <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/barAnim.csv")
line <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/line.csv")
lineAnim <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/lineAnim.csv")
pie <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/pie.csv")
pieAnim <- read.csv("WPI/Classes/DataViz_CS573/03-experiment/data/pieAnim.csv")

head(df, 1)

mean.fun <- function (data, idx) {
  df1 <- data[idx, ]
  mean(df1[, 9])
}

set.seed(42)

bootstrap1 <- boot(bar, mean.fun, R=1000)
ci1 <- boot.ci(boot.out = bootstrap1, type = c("norm", "basic", "perc", "bca")) 
bootstrap2 <- boot(barAnim, mean.fun, R=1000)
ci2 <- boot.ci(boot.out = bootstrap2, type = c("norm", "basic", "perc", "bca")) 
bootstrap3 <- boot(line, mean.fun, R=1000)
ci3 <- boot.ci(boot.out = bootstrap3, type = c("norm", "basic", "perc", "bca")) 
bootstrap4 <- boot(lineAnim, mean.fun, R=1000)
ci4 <- boot.ci(boot.out = bootstrap4, type = c("norm", "basic", "perc", "bca")) 
bootstrap5 <- boot(pie, mean.fun, R=1000)
ci5 <- boot.ci(boot.out = bootstrap5, type = c("norm", "basic", "perc", "bca")) 
bootstrap6 <- boot(pieAnim, mean.fun, R=1000)
ci6 <- boot.ci(boot.out = bootstrap6, type = c("norm", "basic", "perc", "bca")) 
print("==========================================")
bootstrap1
ci1
bootstrap2
ci2
print("==========================================")
bootstrap3
ci3
bootstrap4
ci4
print("==========================================")
bootstrap5
ci5
bootstrap6
ci6
print("==========================================")
plot(bootstrap1, main="")
title(main="Bar Chart bootstrapped")
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/bootstrap1.png")
plot(bootstrap2, main="")
title(main="BarAnim Chart bootstrapped")
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/bootstrap2.png")
plot(bootstrap3, main="")
title(main="Line Chart bootstrapped")
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/bootstrap3.png")
plot(bootstrap4, main="")
title(main="LineAnim Chart bootstrapped")
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/bootstrap4.png")
plot(bootstrap5, main="")
title(main="Pie Chart bootstrapped")
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/bootstrap5.png")
plot(bootstrap6, main="")
title(main="PieAnim Chart bootstrapped")
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/bootstrap6.png")


ggplot(data = df,
       mapping = aes(x = chart, y = logerror)) +
  # individual data points (jittered horizontally)
  #geom_point(alpha = 0.2,
  #           color = "blue",
  #           position = position_jitter(width = 0.1, height = 0),
  #           size = 2) +
  # means with confidence intervals 
  stat_summary(fun.data = "mean_cl_boot",
               geom = "pointrange",
               color = "black",
               fill = "yellow",
               shape = 21,
               size = 1)
ggsave("WPI/Classes/DataViz_CS573/03-experiment/img/comparing_charts.png")
