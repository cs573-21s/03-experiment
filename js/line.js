//code used:
//https://bl.ocks.org/gordlea/27370d1eea8464b04538e6d8ced39e89
//https://jsfiddle.net/elangobharathi/Lqbcye5u/5/
//https://www.d3-graph-gallery.com/graph/line_basic.html
//https://www.d3-graph-gallery.com/graph/line_change_data.html

function LineChart() {

  let margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };
  let width = 450 - margin.left - margin.right;
  let height = 400 - margin.top - margin.bottom;

  var svg;
  var xScale;
  var yScale;


  this.init = function(data, isAnimate = false) {
    d3.select("#draw *").remove();
    svg = d3.select("#draw")
      // .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    xScale = d3.scaleLinear()
      .range([0, width]); // output

    yScale = d3.scaleLinear()
      .domain([0, 100]) // input
      .range([height, 0]); // output

    buildVis(data, isAnimate);
    if (isAnimate) {
      update(data);
    }
  }

  buildVis = function(data, isAnimate) {

    var n = Object.keys(data).length;
    xScale.domain([0, n + 0.1]);

    // d3's line generator
    var line = d3.line()
      .x(function(d, i) {
        return xScale(i + .5);
      })
      .y(function(d) {
        return (isAnimate) ? yScale(50) : yScale(d.value);
      })

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(0)
        .tickFormat(d3.format(''))); // Create an axis component with d3.axisBottom

    svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale).ticks(1)); // Create an axis component with d3.axisLeft

    // Append the path, bind the data, and call the line generator
    svg.append("path")
      .datum(data) // Binds data to the line
      .attr("class", "line") // Assign a class for styling
      .attr("d", line); // Calls the line generator

    //  Appends a circle for each datapoint
    svg.selectAll(".dot")
      .data(data)
      .enter().append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("fill", function(d) {
        return (d.compare == true)? "#555" : "#FFF";
      })
      .attr("cx", function(d, i) {
        return xScale(i + 0.5)
      })
      .attr("cy", function(d) {
        return (isAnimate) ? yScale(50) : yScale(d.value)
      })
      .attr("r", 4);

    svg.selectAll(".text")
      .data(data)
      .enter().append("text") // Uses the enter().append() method
      .attr("fill", "black") // Assign a class for styling
      .attr("class", "text")
      .attr("x", function(d, i) {
        return xScale(i + 0.5) - 4
      })
      .attr("y", function(d) {
        return (isAnimate) ? yScale(50) - 10 : yScale(d.value) - 10
      })
      .text(function(d) {
        if (d.compare == true && !isAnimate) {
          return "*";
        }
      });
  }

  update = function(data) {
    var u = svg.selectAll(".line")
      .data([data], function(d) {
        return d.value
      });

    var t = d3.transition()
      .duration(3000)
      .delay(1000);

    // Updata the line
    u
      .enter()
      .append("path")
      .attr("class", "line")
      .merge(u)
      .transition(t)
      .attr("d", d3.line()
        .x(function(d, i) {
          return xScale(i + 0.5);
        })
        .y(function(d) {
          return yScale(d.value);
        }))

    var d = svg.selectAll(".dot")
      .data(data)

    d
      .enter()
      .append("circle")
      .attr("class", "dot")
      .merge(d)
      .transition(t)
      .attr("cx", function(d, i) {
        return xScale(i + 0.5)
      })
      .attr("cy", function(d) {
        return yScale(d.value)
      });


    var txt = svg.selectAll(".text")
      .data(data);

    txt
      .enter()
      .append("text")
      .attr('class', 'text')
      .merge(txt)
      .transition(t)
      .attr("x", function(d, i) {
        return xScale(i + 0.5) - 4
      })
      .attr("y", function(d) {
        return yScale(d.value) - 10
      })
      .text(function(d) {
        if (d.compare == true) {
          return "*";
        }
      });
  }

}
