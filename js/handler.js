/* Data
[
    {
        points: [...],
        userResponse: 0-100
    }
]
*/
/* Points
[
    {
        value: 0-100,
        compare: true/false
    }
]
 */
let data = [],
  points = [],
  inputs = 1,
  tests = 0;
const generatedPoints = 10;

var chart;
var chartSequence = [];

function generateChartSequence() {
  let limit = 4;
  var random = 0;
  var temp = [];
  for (var j = 0; j < limit; j++) {
    temp.push("bar", "barAnim", "pie", "pieAnim", "line", "lineAnim");
  }

  while (temp.length > 0) {
    random = Math.floor(Math.random() * temp.length);
    chartSequence.push(temp[random]);
    temp.splice(random, 1);
  }
  tests = chartSequence.length;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generatePoints() {
  let comparisonIndexes = [];
  points = [];
  while (comparisonIndexes.length < 2) {
    var index = getRandomInt(5, generatedPoints);
    if (comparisonIndexes.indexOf(index) == -1) comparisonIndexes.push(index);
  }
  for (var i = 0; i < generatedPoints; i++) {
    let obj = {};
    obj['value'] = getRandomIntInclusive(5, 100);
    obj['compare'] = comparisonIndexes.includes(i);
    points.push(obj);
  }

  switch (chartSequence[0]) {
    case "bar":
      chart = new BarChart();
      chart.init(points);
      break;
    case "barAnim":
      chart = new BarChart();
      chart.init(points, true);
      break;
    case "pie":
      chart = new PieChart();
      chart.init(points);
      break;
    case "pieAnim":
      chart = new PieChart();
      chart.init(points, true);
      break;
    case "line":
      chart = new LineChart();
      chart.init(points);
      break;
    case "lineAnim":
      chart = new LineChart();
      chart.init(points, true);
      break;
  }
  // chart.init(points, true);
}

function onSubmit(_) {
  var response = document.getElementById('response');
  if (response.value != '' && response.reportValidity()) {
    var obj = Object.create({});
    obj['points'] = points;
    obj['userResponse'] = parseFloat(response.value);
    obj['chart'] = chartSequence[0];
    chartSequence.splice(0, 1);
    data.push(obj);
    response.value = '';
    if (inputs == tests) {
      document.getElementById('title').innerHTML = "Results Submitted";
      document.getElementById('dataCollection').style.display = "none";
      document.getElementById('thanks').style.display = "block";
      console.log(data);
      //TODO: HANDLE DATABASE lets write it into the data folder on the repo as json file.
      // Need to figure out the naming convention though
    } else {
      // TODO: the draw function for the chart goes here
      generatePoints();
      document.getElementById('title').innerHTML = "Experiment " + (++inputs) + "/" + tests;
      if (inputs == tests)
        document.getElementById('submitResponse').value = "Submit";
    }
  }
}

function onAgree(_) {
  document.getElementById('intro').style.display = "none";
  document.getElementById('dataCollection').style.display = "block";
  document.getElementById('title').innerHTML = "Experiment " + inputs + "/" + tests;
  generatePoints();
}

window.onload = () => {
  generateChartSequence();
  document.getElementById('submitResponse').addEventListener('click', onSubmit);
  document.getElementById('agree').addEventListener('click', onAgree);
  document.getElementById('dataCollection').style.display = "none";
  document.getElementById('thanks').style.display = "none";
}
