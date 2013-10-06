var data = [4, 8, 13, 15, 16, 23, 42, 69, 70, 100];
// var chart = d3.select('body').append('div').attr('class', 'chart');
// var x = d3.scale.linear().domain([0, d3.max(data)]).range([0, 500]);
// chart.selectAll('div')
//   .data(data)
//   .enter()
//   .append('div')
//   .style('width', x)
//   .text(function(d){
//     return d;
//   });

var w = 420;
var h = 20;

var chart = d3.select("body")
  .append('svg')
  .attr('class', 'chart')
  .attr('width', w + 20)
  .attr('height', h * data.length + 20)
  .append("g")
  .attr('transform', 'translate(10,15)');

var x = d3.scale
  .linear()
  .domain([0, d3.max(data)])
  .range([0, w]);

var y = d3.scale.ordinal()
  .domain(data)
  .rangeBands([0, h * data.length]);

chart.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('y', function(d,i){
    return i * h;
  })
  .attr('width', x)
  .attr('height', h)

chart.selectAll('text')
  .data(data)
  .enter()
  .append('text')
  .attr("x", x)
  .attr('y', function(d) {return y(d) + y.rangeBand() / 2;})
  .attr("dx", -3)
  .attr("dy", ".35em")
  .attr('text-anchor', 'end')
  .text(String)

chart.selectAll('line')
  .data(x.ticks(10))
  .enter()
  .append('line')
  .attr('x1', x)
  .attr('x2', x)
  .attr('y1', 0)
  .attr('y2', h * data.length)
  .style('stroke', '#ccc')

chart.selectAll(".rule")
  .data(x.ticks(10))
  .enter()
  .append('text')
  .attr('class', 'rule')
  .attr('x', x)
  .attr('y', 0)
  .attr('dy', -3)
  .attr('text-anchor', 'middle')
  .text(String);

chart.append("line")
  .attr("y1", 0)
  .attr("y2", h * data.length)
  .style("stroke", "#000");