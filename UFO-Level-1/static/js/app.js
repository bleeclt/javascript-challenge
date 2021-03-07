// from data.js
var tableData = data;

// append table to web page and add new rows for UFO sighting
var tbody = d3.select("tbody");
console.log(tableData);

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.defineProperties(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });

});

// js code that will listen for events and search d/t column to find rows that match user input

