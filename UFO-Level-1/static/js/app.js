// from data.js
var tableData = data;

// append table to web page and add new rows for UFO sighting
var tbody = d3.select("tbody");
// console.log(tableData);

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.defineProperties(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });

});

// js code that will listen for events and search d/t column to find rows that match user input
var button = d3.select("#filter-btn");
var form = d3.select("#form");
button.on("click", newDate);
form.on("submit", newDate);

// function to check for filter and update
function newDate() {
    d3.event.preventDefault();
    var inputBox = d3.select("#datetime");
    var inputDate = inputBox.property("value");
    var filterData = tableData.filter(tableData => tableData.datetime === inputDate);
    tbody.html("");
    if (filterData.length === 0) {
        tmsg = tbody.text("No data for this date");
    }
    else {
        filterData.forEach((ufo) => {
            var row = tbody.append("tr");
            Object.entries(ufo).forEach(([key,value])=>{
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
};

// function to reset table to original values
function resetTable() {
    tbody.html("")
    var table = tableData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

var resetButton = d3.select("#reset-btn");
resetButton.on("click", resetTable);
