//code examples used:
//https://www.tutorialsteacher.com/d3js/create-bar-chart-using-d3js
//https://www.d3-graph-gallery.com/graph/barplot_basic.html

function BarChart() {

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
      .attr('width', width + +margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    yScale = d3.scaleLinear()
      .domain([0, 100]) // input
      .range([height, 0]); // output

    buildVis(data, isAnimate);
    if (isAnimate) {
      update(data);
    }
  }

  buildVis = function(data, isAnimate) {
    xScale = d3.scaleBand()
      .domain(data.map(function(d) {
        return d.value;
      })) // input
      .range([0, width])
      .padding(0.2);

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
        .ticks(0)
        .tickValues([]));

    svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale).ticks(1));

    svg.selectAll(".bar")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("fill", function(d) {
        return (d.compare == true) ? "black" : "grey";
      })
      .attr("x", function(d) {
        return xScale(d.value);
      })
      .attr("y", function(d) {
        return (isAnimate) ? (yScale(50)) : (yScale(d.value));
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function(d) {
        return (isAnimate) ? (height - yScale(50)) : (height - yScale(d.value));
      });

    svg.selectAll(".text")
      .data(data)
      .enter().append("text") // Uses the enter().append() method
      .attr("fill", "black") // Assign a class for styling
      .attr("x", function(d) {
        return (xScale(d.value) + xScale.bandwidth() / 2.35);
      })
      .attr("y", function(d) {
        return (isAnimate) ? (yScale(50) - 5) : (yScale(d.value) - 5);
      })
      .text(function(d) {
        if (d.compare == true && !isAnimate) {
          return "*";
        }
      });
  }

  update = function(data) {
    var u = svg.selectAll(".bar")
      .data(data);

    var t = d3.transition()
      .duration(3000)
      .delay(1000);

    u
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("fill", function(d) {
        return (d.compare == true) ? "black" : "grey";
      })
      .merge(u)
      .transition(t)
      .attr("y", function(d) {
        return yScale(d.value);
      })
      .attr("height", function(d) {
        return height - yScale(d.value);
      })

    var txt = svg.selectAll(".text")
      .data(data)

    txt
      .enter()
      .append("text")
      .attr('class', 'text')
      .attr("x", function(d) {
        // console.log(xScale(d.value) + xScale.bandwidth() / 2.35);
        return (xScale(d.value) + xScale.bandwidth() / 2.35);
      })
      .attr("y", function(d) {
        return yScale(50) - 5;
      })
      .merge(txt)
      .transition(t)
      .attr("y", function(d) {
        return yScale(d.value) - 5;
      })
      .text(function(d) {
        if (d.compare == true) {
          return "*";
        }
      });
  }

}
