// import csv.data
d3.csv("../assets/data/data.csv").then(function (data) {
    // format used data as numbers
    data.forEach(d => {
        d.poverty = +d.poverty;
        d.healthcare = +d.healthcare;
        console.log(data);
    })
    
//set-up my margins
    var margin = { top: 10, right: 30, bottom: 60, left: 60 },
        width = 600 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    })

// append the body of the html
    var svg = d3.select("#scatter")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        
    var svgGroup = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`),
    }),


