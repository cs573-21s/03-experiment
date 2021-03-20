var width = 400;
var height = 450;
var padding = 30;
var lables = [0, 1, 2, 3, 4]
var stack_lable = [0, 1]

function type1(random1, random2) {
    var dataset1 = [];
    var dataset2 = [];

    if (random1 > random2) {
        rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
    } else {
        rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
    }

    visType = 'Type1';

    //create dateset for group 1
    for (let i = 0; i < 5; i++) {
        if (i == 1) {
            // console.log('Rondom1 is' + random1);
            // console.log(10 * (10 ** ((random1 - 1) / 12)))
            dataset1.push(10 * (10 ** ((random1 - 1) / 12)))
        } else if (i == 2) {
            dataset1.push(10 * (10 ** ((random2 - 1) / 12)))
            // console.log('Rondom2 is' + random2);
            // console.log(10 * (10 ** ((random2 - 1) / 12)))
        } else {
            dataset1.push(d3.randomUniform(0, 100)())
        }
    }
    //create dataset for group 2
    for (let i = 0; i < 5; i++) {
        dataset2.push(d3.randomUniform(0, 100)())
    }
    // console.log(dataset1)
    // console.log(dataset2)

    var xScale = d3.scaleBand()
        .domain(lables)
        .rangeRound([0, width / 3]);
    var yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([(height - padding * 2) * 2 / 3, 0]);


    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var rects_1 = svg.append('g');
    rects_1.selectAll(".group1")
        .data(dataset1)
        .enter()
        .append("rect")
        .attr("class", "group2")
        .attr("x", function (d, i) {
            return xScale(lables[i]);
        })
        .attr("y", function (d) {
            return yScale(d) + padding;
        })
        .attr('width', (width / 3) / dataset1.length)
        .attr('height', function (d) {
            return (height - padding * 2) * 2 / 3 - yScale(d);
        })
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(60px,' + ((height - padding * 2) / 3) + 'px)');

    var rects_2 = svg.append('g');
    rects_2.selectAll(".group2")
        .data(dataset2)
        .enter()
        .append("rect")
        .attr("class", "group2")
        .attr("x", function (d, i) {
            return xScale(lables[i]);
        })
        .attr("y", function (d) {
            return yScale(d) + padding;
        })
        .attr('width', (width / 3) / dataset2.length)
        .attr('height', function (d) {
            return (height - padding * 2) * 2 / 3 - yScale(d);
        })
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(230px,' + ((height - padding * 2) / 3) + 'px)');

    var dots = svg.append('g');
    dots.append("circle")
        .attr("cx", xScale(lables[1]))
        .attr("cy", "360px")
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(73px,45px)');

    dots.append("circle")
        .attr("cx", xScale(lables[1]))
        .attr("cy", "360px")
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(100px,45px)');
    var lines = svg.append('g')
    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", width - padding)
        .attr("y2", height - padding)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');

    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", padding)
        .attr("y2", padding + (height - padding * 2) / 3)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');
    var text = svg.append('g')
    text.append('text')
        .text('100')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 160)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('0')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 420)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('A')
        .attr('fill', 'black')
        .attr('x', 130)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('B')
        .attr('fill', 'black')
        .attr('x', 300)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)
}

function type3(random1, random2) {
    var dataset1 = [];
    var dataset2 = [];

    if (random1 > random2) {
        rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
    } else {
        rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
    }

    visType = 'Type3';

    //create dateset for group 1
    for (let i = 0; i < 5; i++) {
        if (i == 1) {
            // console.log('Rondom1 is' + random1);
            // console.log(10 * (10 ** ((random1 - 1) / 12)))
            dataset1.push(10 * (10 ** ((random1 - 1) / 12)))
        } else {
            dataset1.push(d3.randomUniform(0, 100)())
        }
    }
    //create dataset for group 2
    for (let i = 0; i < 5; i++) {
        if (i == 1) {
            dataset2.push(10 * (10 ** ((random2 - 1) / 12)))
        } else {
            dataset2.push(d3.randomUniform(0, 100)())
        }

    }
    // console.log(dataset1)
    // console.log(dataset2)

    var xScale = d3.scaleBand()
        .domain(lables)
        .rangeRound([0, width / 3]);
    var yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([(height - padding * 2) * 2 / 3, 0]);


    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var rects_1 = svg.append('g');
    rects_1.selectAll(".group1")
        .data(dataset1)
        .enter()
        .append("rect")
        .attr("class", "group2")
        .attr("x", function (d, i) {
            return xScale(lables[i]);
        })
        .attr("y", function (d) {
            return yScale(d) + padding;
        })
        .attr('width', (width / 3) / dataset1.length)
        .attr('height', function (d) {
            return (height - padding * 2) * 2 / 3 - yScale(d);
        })
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(60px,' + ((height - padding * 2) / 3) + 'px)');

    var rects_2 = svg.append('g');
    rects_2.selectAll(".group2")
        .data(dataset2)
        .enter()
        .append("rect")
        .attr("class", "group2")
        .attr("x", function (d, i) {
            return xScale(lables[i]);
        })
        .attr("y", function (d) {
            return yScale(d) + padding;
        })
        .attr('width', (width / 3) / dataset2.length)
        .attr('height', function (d) {
            return (height - padding * 2) * 2 / 3 - yScale(d);
        })
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(230px,' + ((height - padding * 2) / 3) + 'px)');

    var dots = svg.append('g');
    dots.append("circle")
        .attr("cx", xScale(lables[1]))
        .attr("cy", "360px")
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(73px,45px)');

    dots.append("circle")
        .attr("cx", xScale(lables[1]))
        .attr("cy", "360px")
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(245px,45px)');

    var lines = svg.append('g')
    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", width - padding)
        .attr("y2", height - padding)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');

    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", padding)
        .attr("y2", padding + (height - padding * 2) / 3)
        .attr('stroke', 'black')

    var text = svg.append('g')
    text.append('text')
        .text('100')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 160)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('0')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 420)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('A')
        .attr('fill', 'black')
        .attr('x', 130)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('B')
        .attr('fill', 'black')
        .attr('x', 300)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)
}

function type2(random1, random2) {
    var stackdata1 = [
        { num1: 10, num2: 1920, num3: 960, num4: 400 }
    ];
    var stackdata2 = [
        { num1: 10, num2: 1920, num3: 960, num4: 400 }
    ];

    if (random1 > random2) {
        rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
    } else {
        rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
    }

    visType = 'Type2';

    for (key in stackdata1[0]) {
        if (key == 'num1') {
            stackdata1[0][key] = 10 * (10 ** ((random1 - 1) / 12));
        } else {
            stackdata1[0][key] = d3.randomUniform(0, 30)()
        }
    }
    for (key in stackdata2[0]) {
        if (key == 'num1') {
            stackdata2[0][key] = 10 * (10 ** ((random2 - 1) / 12));
        } else {
            stackdata2[0][key] = d3.randomUniform(0, 20)()
        }
    }

    var xScale = d3.scaleBand()
        .domain(stack_lable)
        .rangeRound([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([(height - padding * 2) * 2 / 3, 0]);

    var stack = d3.stack()
        .keys(["num1", "num2", "num3", "num4"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

    var series1 = stack(stackdata1);
    var series2 = stack(stackdata2);
    // console.log(series1)
    // console.log(series2)

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var stackGroup1 = svg.append('g')
    stackGroup1.selectAll('.stackgroup1')
        .data(series1)
        .enter()
        .selectAll('rect')
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return xScale(lables[i]); })
        .attr("y", function (d) {
            // console.log(d)
            // console.log(d[1])
            return yScale(d[1]);
        })
        .attr("height", function (d) {
            // console.log(yScale(d[0]) - yScale(d[1]))
            return yScale(d[0]) - yScale(d[1]);
        })
        .attr("width", 100)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(80px,' + (padding + (height - padding * 2) / 3) + 'px)');

    var stackGroup2 = svg.append('g')
    stackGroup2.selectAll('.stackgroup2')
        .data(series2)
        .enter()
        .selectAll('rect')
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return xScale(lables[i]); })
        .attr("y", function (d) {
            // console.log(d)
            // console.log(d[1])
            return yScale(d[1]);
        })
        .attr("height", function (d) {
            return yScale(d[0]) - yScale(d[1]);
        })
        .attr("width", 100)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(250px,' + (padding + (height - padding * 2) / 3) + 'px)');

    var lines = svg.append('g')
    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", width - padding)
        .attr("y2", height - padding)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');

    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", padding)
        .attr("y2", padding + (height - padding * 2) / 3)
        .attr('stroke', 'black')

    var dots = svg.append('g');
    dots.append("circle")
        .attr("cx", xScale(lables[0]))
        .attr("cy", "360px")
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(130px,45px)');

    dots.append("circle")
        .attr("cx", xScale(lables[0]))
        .attr("cy", "360px")
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(300px,45px)');

    var text = svg.append('g')
    text.append('text')
        .text('100')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 160)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('0')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 420)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('A')
        .attr('fill', 'black')
        .attr('x', 130)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('B')
        .attr('fill', 'black')
        .attr('x', 300)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)
}

function type4(random1, random2) {
    var stackdata1 = [
        { num1: 0, num2: 0, num3: 0, num4: 0 }
    ];
    var stackdata2 = [
        { num1: 0, num2: 0, num3: 0, num4: 0 }
    ];

    if (random1 > random2) {
        rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
    } else {
        rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
    }

    visType = 'Type4';

    for (key in stackdata1[0]) {
        if (key == 'num4') {
            stackdata1[0][key] = 10 * (10 ** ((random1 - 1) / 12));
        } else {
            stackdata1[0][key] = d3.randomUniform(0, 30)()
        }
    }
    for (key in stackdata2[0]) {
        if (key == 'num4') {
            stackdata2[0][key] = 10 * (10 ** ((random2 - 1) / 12));
        } else {
            stackdata2[0][key] = d3.randomUniform(0, 20)()
        }
    }

    var xScale = d3.scaleBand()
        .domain(stack_lable)
        .rangeRound([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([(height - padding * 2) * 2 / 3, 0]);

    var stack = d3.stack()
        .keys(["num1", "num2", "num3", "num4"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

    var series1 = stack(stackdata1);
    var series2 = stack(stackdata2);
    // console.log(series1)
    // console.log(series1[3][0][0])
    // console.log(series2)

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var stackGroup1 = svg.append('g')
    stackGroup1.selectAll('.stackgroup1')
        .data(series1, function (d) {
        })
        .enter()
        .selectAll('rect')
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return xScale(lables[i]); })
        .attr("y", function (d) {
            // console.log(d)
            // console.log(d[1])
            return yScale(d[1]);
        })
        .attr("height", function (d) {
            // console.log(yScale(d[0]) - yScale(d[1]))
            return yScale(d[0]) - yScale(d[1]);
        })
        .attr("width", 100)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(80px,' + (padding + (height - padding * 2) / 3) + 'px)');

    var stackGroup2 = svg.append('g')
    stackGroup2.selectAll('.stackgroup2')
        .data(series2, function (d) {
            // console.log(d)
        })
        .enter()
        .selectAll('rect')
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return xScale(lables[i]); })
        .attr("y", function (d) {
            // console.log(d)
            // console.log(d[1])
            return yScale(d[1]);
        })
        .attr("height", function (d) {
            // console.log(yScale(d[0]) - yScale(d[1]))
            return yScale(d[0]) - yScale(d[1]);
        })
        .attr("width", 100)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(250px,' + (padding + (height - padding * 2) / 3) + 'px)');

    var lines = svg.append('g')
    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", width - padding)
        .attr("y2", height - padding)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');

    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", padding)
        .attr("y2", padding + (height - padding * 2) / 3)
        .attr('stroke', 'black')

    var dots = svg.append('g');
    dots.append("circle")
        .attr("cx", xScale(lables[0]))
        .attr("cy", yScale(series1[3][0][0]))
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(130px,' + (padding + (height - padding * 2) / 3 - 10) + 'px)');

    dots.append("circle")
        .attr("cx", xScale(lables[0]))
        .attr("cy", yScale(series2[3][0][0]))
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(300px,' + (padding + (height - padding * 2) / 3 - 10) + 'px)');

    var text = svg.append('g')
    text.append('text')
        .text('100')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 160)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('0')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 420)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('A')
        .attr('fill', 'black')
        .attr('x', 130)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('B')
        .attr('fill', 'black')
        .attr('x', 300)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)
}

function type5(random1, random2) {
    var stackdata1 = [
        { num1: 0, num2: 0, num3: 0, num4: 0 }
    ];
    var stackdata2 = [
        { num1: 0, num2: 0, num3: 0, num4: 0 }
    ];

    if (random1 > random2) {
        rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
    } else {
        rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
    }

    visType = 'Type5';

    for (key in stackdata1[0]) {
        if (key == 'num4') {
            stackdata1[0][key] = 10 * (10 ** ((random1 - 1) / 12));
        } else if (key == 'num3') {
            stackdata1[0][key] = 10 * (10 ** ((random2 - 1) / 12));
        } else {
            stackdata1[0][key] = d3.randomUniform(0, 18)()
        }
    }
    for (key in stackdata2[0]) {
        stackdata2[0][key] = d3.randomUniform(0, 37)()
    }

    var xScale = d3.scaleBand()
        .domain(stack_lable)
        .rangeRound([0, width]);

    var yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([(height - padding * 2) * 2 / 3, 0]);

    var stack = d3.stack()
        .keys(["num1", "num2", "num3", "num4"])
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

    var series1 = stack(stackdata1);
    var series2 = stack(stackdata2);
    // console.log(series1)
    // console.log(series1[3][0][0])
    // console.log(series2)

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var stackGroup1 = svg.append('g')
    stackGroup1.selectAll('.stackgroup1')
        .data(series1, function (d) {
        })
        .enter()
        .selectAll('rect')
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return xScale(lables[i]); })
        .attr("y", function (d) {
            // console.log(d)
            // console.log(d[1])
            return yScale(d[1]);
        })
        .attr("height", function (d) {
            // console.log(yScale(d[0]) - yScale(d[1]))
            return yScale(d[0]) - yScale(d[1]);
        })
        .attr("width", 100)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(80px,' + (padding + (height - padding * 2) / 3) + 'px)');

    var stackGroup2 = svg.append('g')
    stackGroup2.selectAll('.stackgroup2')
        .data(series2, function (d) {
            // console.log(d)
        })
        .enter()
        .selectAll('rect')
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return xScale(lables[i]); })
        .attr("y", function (d) {
            // console.log(d)
            // console.log(d[1])
            return yScale(d[1]);
        })
        .attr("height", function (d) {
            // console.log(yScale(d[0]) - yScale(d[1]))
            return yScale(d[0]) - yScale(d[1]);
        })
        .attr("width", 100)
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(250px,' + (padding + (height - padding * 2) / 3) + 'px)');

    var lines = svg.append('g')
    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", width - padding)
        .attr("y2", height - padding)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');

    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", padding)
        .attr("y2", padding + (height - padding * 2) / 3)
        .attr('stroke', 'black')

    var dots = svg.append('g');
    dots.append("circle")
        .attr("cx", xScale(lables[0]))
        .attr("cy", yScale(series1[3][0][0]))
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(130px,' + (padding + (height - padding * 2) / 3 - 10) + 'px)');

    dots.append("circle")
        .attr("cx", xScale(lables[0]))
        .attr("cy", yScale(series1[2][0][0]))
        .attr("r", "5px")
        .attr("fill", "black")
        .style('transform', 'translate(130px,' + (padding + (height - padding * 2) / 3 - 10) + 'px)');

    var text = svg.append('g')
    text.append('text')
        .text('100')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 160)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('0')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 420)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('A')
        .attr('fill', 'black')
        .attr('x', 130)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('B')
        .attr('fill', 'black')
        .attr('x', 300)
        .attr('y', 440)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)
}
function type6(data, index) {
    if (data[index[0]] > data[index[1]]) {
        rightanswer = data[index[1]] / data[index[0]];
    } else {
        rightanswer = data[index[0]] / data[index[1]];
    }

    visType = 'Type6';

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var pie = d3.pie()
        .sort(null);
    var piedata = pie(data);
    var arc = d3.arc()
        .innerRadius(0)
        .outerRadius(100);

    var arcs = svg.selectAll('g')
        .data(piedata)
        .enter()
        .append('g')
        .style('transform', 'translate(200px,250px)');

    arcs.append('path')
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('d', function (d) {
            return arc(d)
        });
    arcs.append('circle')
        .attr("cx", function (d) {
            return arc.centroid(d)[0]
        })
        .attr("cy", function (d) {
            return arc.centroid(d)[1]
        })
        .attr("r", "3px")
        .attr("fill", function (d, i) {
            if (i == index[0] || i == index[1]) {
                return 'black';
            } else {
                return 'white';
            }
        })
}
function type7(data, index) {
    if (data[index[0]] > data[index[1]]) {
        rightanswer = data[index[1]] / data[index[0]];
    } else {
        rightanswer = data[index[0]] / data[index[1]];
    }

    visType = 'Type7';

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var xScale = d3.scaleBand()
        .domain(lables)
        .rangeRound([0, width / 3]);
    var yScale = d3.scaleLinear()
        .domain([0, 40])
        .range([(height - padding * 2) * 2 / 3, 0]);

    var rects = svg.append('g');
    rects.selectAll(".group1")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "group1")
        .attr("x", function (d, i) {
            return xScale(lables[i]);
        })
        .attr("y", function (d) {
            return yScale(d) + padding;
        })
        .attr('width', (width / 3) / data.length)
        .attr('height', function (d) {
            return (height - padding * 2) * 2 / 3 - yScale(d);
        })
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .style('transform', 'translate(120px,' + ((height - padding * 2) / 3) + 'px)')

    var circle = svg.append('g');
    circle.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr("cx", function (d, i) {
            return xScale(lables[i]);
        })
        .attr("cy", function (d) {
            return 410;
        })
        .attr("r", "3px")
        .attr("fill", function (d, i) {
            if (i == index[0] || i == index[1]) {
                return 'black';
            } else {
                return 'white';
            }
        })
        .style('transform', 'translate(135px, 0px)')


    var lines = svg.append('g')
    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", width - padding)
        .attr("y2", height - padding)
        .attr('stroke', 'black')
    // .attr('stroke-width', '2px');

    lines.append("line")
        .attr("x1", padding)
        .attr("y1", height - padding)
        .attr("x2", padding)
        .attr("y2", padding + (height - padding * 2) / 3)
        .attr('stroke', 'black')

    var text = svg.append('g')
    text.append('text')
        .text('40')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 160)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)

    text.append('text')
        .text('0')
        .attr('fill', 'black')
        .attr('x', 10)
        .attr('y', 420)
        .attr('text-anchor', 'middle')
        .style('font-size', '15px')
        .attr('dy', 3)



}
function createPieData() {
    var piedataAll = [];

    for (let i = 0; i < 10; i++) {
        let piedata = [];
        let data = [];
        let index = [];
        let val1, val2, val3;
        val1 = d3.randomUniform(2, 17)();
        do {
            val2 = d3.randomUniform(0, val1)();
        } while (val2 == (val1 / 2) && Math.abs(val2 - val1) < 0.1);
        do {
            val3 = d3.randomUniform(2, 17)();
        } while (val3 == val1 && val3 == val2 && val3 == (val1 - val2));
        var piedata1 = 20 - val1;
        var piedata2 = 20 + val2;
        var piedata3 = 20 + val1 - val2;
        var piedata4 = 20 + val3;
        var piedata5 = 20 - val3;
        data.push(piedata1);
        data.push(piedata2);
        data.push(piedata3);
        data.push(piedata4);
        data.push(piedata5);
        piedata.push(data);
        index.push(d3.maxIndex(data));
        index.push(d3.minIndex(data));
        piedata.push(index);
        piedata.push([1, 2]);
        piedataAll.push(piedata)
    }
    return piedataAll;
}

