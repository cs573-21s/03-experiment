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
let data = [], points = [], inputs = 1;
const tests = 6, generatedPoints = 10;

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
    while(comparisonIndexes.length < 2) {
        var index = getRandomInt(0, generatedPoints);
        if(comparisonIndexes.indexOf(index) == -1) comparisonIndexes.push(index);
    }
    for(var i = 0; i < generatedPoints; i++) {
        let obj = {};
        obj['value'] = getRandomIntInclusive(0, 100);
        obj['compare'] = comparisonIndexes.includes(i);
        points.push(obj);
    }
}

function onSubmit(_) {
    var response = document.getElementById('response');
    if(response.value != '' && response.reportValidity()) {
        var obj = Object.create({});
        obj['points'] = points;
        obj['userResponse'] = parseFloat(response.value);
        data.push(obj);
        response.value = '';
        if(inputs == tests) {
            document.getElementById('title').innerHTML = "Results Submitted";
            document.getElementById('dataCollection').style.display = "none";
            document.getElementById('thanks').style.display = "block";
            console.log(data); //TODO: HANDLE DATABASE
        } else {
            generatePoints();
            document.getElementById('title').innerHTML = "Experiment " + (++inputs) + "/" + tests;
            if(inputs == tests)
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
    document.getElementById('submitResponse').addEventListener('click', onSubmit);
    document.getElementById('agree').addEventListener('click', onAgree);
    document.getElementById('dataCollection').style.display = "none";
    document.getElementById('thanks').style.display = "none";
}