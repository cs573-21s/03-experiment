var chart8 = (function chart8() {
    let data = createDate();
    width = 800;
    height = 600;

    visType = 'Type8';

    var dataset_bar = data[0];

    var y = d3.scaleLinear()
        .domain([0, d3.max(dataset_bar)])
        .range([0, 800 / 4])

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var bars = svg.append('g')
        .attr("transform", "translate(" + 300 + ", " + 300 + ")")


    bars.selectAll(".group1")
        .data(dataset_bar)
        .enter()
        .append('g')
        .append("rect")
        .attr("class", "group1")
        .attr("x", 100)
        .attr("y", 0)
        .attr('width', 25)
        .attr('height', d => y(d))
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('transform', function (d, i) {
            console.log(i)
            return 'rotate(' + (i * (360 / data[0].length)) + ',110,0)' + 'translate(0,30)';
        })

    var circle = svg.append('g')
        .attr("transform", "translate(" + 300 + ", " + 300 + ")");
    circle.selectAll('circle')
        .data(data[1])
        .enter()
        .append('circle')
        .attr("cx", 110)
        .attr("cy", 0)
        .attr("r", "5px")
        .attr("fill", "black")
        .attr('transform', function (d, i) {
            // console.log(d)
            return 'rotate(' + (d * (360 / data[0].length)) + ',110,0)' + 'translate(0,37)';
        });

    function createDate() {
        let index1 = d3.randomInt(0, 5)();
        let index2;
        let random1 = d3.randomInt(1, 11)();
        let random2;
        let data = [];
        let index = [];
        do {
            random2 = d3.randomInt(1, 11)();
        } while (random1 == random2);
        do {
            index2 = d3.randomInt(0, 5)()
        } while (index1 == index2)
        console.log(index1, index2)
        var dataset = [];
        for (let i = 0; i < 5; i++) {
            if (i == index1) {
                dataset.push(10 * (10 ** ((random1 - 1) / 12)))
            } else if (i == index2) {
                dataset.push(10 * (10 ** ((random2 - 1) / 12)))
            } else {
                dataset.push(d3.randomUniform(30, 100)())
            }
        }
        if (random1 > random2) {
            rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
        } else {
            rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
        }
        index.push(index1);
        index.push(index2);
        data.push(dataset);
        data.push(index);
        console.log(data)
        return data;
    }

    // var circle = svg.append('g')
    //     .attr("transform", "translate(" + 300 + ", " + 300 + ")");
})

var chart9 = (function chart9() {
    let data = createDate();
    width = 800;
    height = 600;

    visType = 'Type9'

    var dataset_bar = data[0];

    var y = d3.scaleLinear()
        .domain([0, d3.max(dataset_bar)])
        .range([0, 800 / 4])

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var bars = svg.append('g')
        .attr("transform", "translate(" + 300 + ", " + 300 + ")")


    bars.selectAll(".group1")
        .data(dataset_bar)
        .enter()
        .append('g')
        .append("rect")
        .attr("class", "group1")
        .attr("x", 100)
        .attr("y", 0)
        .attr('width', 25)
        .attr('height', d => y(d))
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('transform', function (d, i) {
            console.log(i)
            return 'rotate(' + (i * (360 / data[0].length)) + ',110,0)' + 'translate(0,30)';
        })

    var circle = svg.append('g')
        .attr("transform", "translate(" + 300 + ", " + 300 + ")");
    circle.selectAll('circle')
        .data(data[1])
        .enter()
        .append('circle')
        .attr("cx", 110)
        .attr("cy", 0)
        .attr("r", "5px")
        .attr("fill", "black")
        .attr('transform', function (d, i) {
            // console.log(d)
            return 'rotate(' + (d * (360 / data[0].length)) + ',110,0)' + 'translate(0,37)';
        });

    function createDate() {
        let index1 = d3.randomInt(0, 7)();
        let index2;
        let random2;
        let random1 = d3.randomInt(1, 11)();
        let data = [];
        let index = [];
        do {
            random2 = d3.randomInt(1, 11)();
        } while (random1 == random2);
        do {
            index2 = d3.randomInt(0, 7)()
        } while (index1 == index2)
        console.log(index1, index2)
        var dataset = [];
        for (let i = 0; i < 7; i++) {
            if (i == index1) {
                dataset.push(10 * (10 ** ((random1 - 1) / 12)))
            } else if (i == index2) {
                dataset.push(10 * (10 ** ((random2 - 1) / 12)))
            } else {
                dataset.push(d3.randomUniform(30, 100)())
            }
        }
        if (random1 > random2) {
            rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
        } else {
            rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
        }
        index.push(index1);
        index.push(index2);
        data.push(dataset);
        data.push(index);
        console.log(data)
        return data;
    }

    // var circle = svg.append('g')
    //     .attr("transform", "translate(" + 300 + ", " + 300 + ")");
})

var chart10 = (function chart10() {
    let data = createDate();
    width = 800;
    height = 600;

    visType = 'Type10'

    var dataset_bar = data[0];

    var y = d3.scaleLinear()
        .domain([0, d3.max(dataset_bar)])
        .range([0, 800 / 4])

    var svg = d3.select('div.svg')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

    var bars = svg.append('g')
        .attr("transform", "translate(" + 300 + ", " + 300 + ")")


    bars.selectAll(".group1")
        .data(dataset_bar)
        .enter()
        .append('g')
        .append("rect")
        .attr("class", "group1")
        .attr("x", 100)
        .attr("y", 0)
        .attr('width', 25)
        .attr('height', d => y(d))
        .attr('fill', 'white')
        .attr('stroke', 'black')
        .attr('transform', function (d, i) {
            console.log(i)
            return 'rotate(' + (i * (360 / data[0].length)) + ',110,0)' + 'translate(0,30)';
        })

    var circle = svg.append('g')
        .attr("transform", "translate(" + 300 + ", " + 300 + ")");
    circle.selectAll('circle')
        .data(data[1])
        .enter()
        .append('circle')
        .attr("cx", 110)
        .attr("cy", 0)
        .attr("r", "5px")
        .attr("fill", "black")
        .attr('transform', function (d, i) {
            // console.log(d)
            return 'rotate(' + (d * (360 / data[0].length)) + ',110,0)' + 'translate(0,37)';
        });

    function createDate() {
        let index1 = d3.randomInt(0, 3)();
        let index2;
        let random2;
        let random1 = d3.randomInt(1, 11)();
        let data = [];
        let index = [];
        do {
            random2 = d3.randomInt(1, 11)();
        } while (random1 == random2);
        do {
            index2 = d3.randomInt(0, 3)()
        } while (index1 == index2)
        console.log(index1, index2)
        var dataset = [];
        for (let i = 0; i < 3; i++) {
            if (i == index1) {
                dataset.push(10 * (10 ** ((random1 - 1) / 12)))
            } else if (i == index2) {
                dataset.push(10 * (10 ** ((random2 - 1) / 12)))
            } else {
                dataset.push(d3.randomUniform(30, 100)())
            }
        }
        if (random1 > random2) {
            rightanswer = (10 * (10 ** ((random2 - 1) / 12))) / (10 * (10 ** ((random1 - 1) / 12)));
        } else {
            rightanswer = (10 * (10 ** ((random1 - 1) / 12))) / (10 * (10 ** ((random2 - 1) / 12)));
        }
        index.push(index1);
        index.push(index2);
        data.push(dataset);
        data.push(index);
        console.log(data)
        return data;
    }

})