//code examples used
//https://www.d3-graph-gallery.com/graph/pie_basic.html
//https://www.tutorialsteacher.com/d3js/create-pie-chart-using-d3js
// https://bl.ocks.org/mbostock/1346410

function PieChart() {

  const width = 400;
  const height = 400;
  const margin = 50;

  this.init = function(data, isAnimate = false) {
    d3.select("#draw *").remove();

    if (isAnimate) {
      animatePie(data);
    } else {
      regularPie(data);
    }
  }

  regularPie = function(input) {
    var svg = d3.select("#draw")
      .attr('width', width)
      .attr('height', height)

    var radius = Math.min(width, height) / 2 - margin;

    var g = svg.append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var pie = d3.pie().value(d => d.value)
      .sort(null);

    var arc = g.selectAll(".arc")
      .data(pie(input))
      .enter().append("g")
      .attr("class", "arc");

    var path = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

    var label = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius - 80);


    arc.append("path")
      .attr("d", path)
      .attr('fill', function(d, i) {
        return (d.data.compare == true)? "#BBB": "none";
      })
      .attr('stroke', '#555')
      .style('stroke-width', '1px');

    arc.append("text")
      .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .attr("stroke", "#CCC")
      .text(function(d) {
        // if (d.data.compare == true) {
        //   return "*";
        // };
      });
  }

  animatePie = function(input) {
    var svg = d3.select("#draw")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var radius = Math.min(width, height) / 2 - margin;

    var pie = d3.pie()
      .value(function(d) {
        return d.value / d.value;
      })
      .sort(null);

    var arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

    var path = svg.datum(input).selectAll("path")
      .data(pie)
      .enter().append("path")
      .attr("fill", function(d, i) {
        return (d.data.compare == true)? "#BBB": "none";
      })
      .attr('stroke', '#555')
      .style('stroke-width', '1px')
      .attr("d", arc)
      .each(function(d) {
        this._current = d;
      }); // store the initial angles

    var label = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius - 80);


    svg.selectAll('.text')
      .data(pie)
      .enter().append("text")
      .attr('class', 'text')
      .attr("stroke", "#CCC")
      .attr("transform", function(d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .text(function(d) {
        // if (d.data.compare == true) {
        //   return "*"
        // }
      });

    function change() {
      var value = this.value;
      pie.value(function(d) {
        return d.value;
      }); // change the value function
      path = path.data(pie); // compute the new angles
      path.transition().delay(1000).duration(3000).attrTween("d", arcTween); // redraw the arcs

      var l = svg.selectAll('.text')
        .data(pie)

      l
        .enter()
        .append('text')
        .attr('class', 'text')
        .merge(l)
        .transition()
        .delay(50)
        .duration(1500)
        .attr("transform", function(d) {
          return "translate(" + label.centroid(d) + ")";
        })
        .attr("stroke", "#CCC")
        .text(function(d) {
          // if (d.data.compare == true) {
          //   return "*";
          // }
        })
    };


    // Store the displayed angles in _current.
    // Then, interpolate from _current to the new angles.
    // During the transition, _current is updated in-place by d3.interpolate.
    function arcTween(a) {
      var i = d3.interpolate(this._current, a);
      this._current = i(0);
      return function(t) {
        return arc(i(t));
      };
    }

    change();
  }
}
