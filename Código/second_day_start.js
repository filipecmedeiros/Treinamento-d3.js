function eventoClique(){
    var numPoints = Math.random()*50 + 1;
    for(var i = 0 ; i < numPoints ; ++i){
	
    }

    //updatePlot();
    console.log("you should update your plot here");
}


var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
	       [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

d3.select("svg").selectAll("circle").data(dataset).enter().append("circle")
    .attr("cx",d=>d[0]).attr("cy",d=>d[1]).attr("r",5);

d3.select("svg").selectAll("text").data(dataset).enter().append("text")
    .attr("x",d=>d[0]).attr("y",d=>d[1]).text(d=>d).attr("fill","red");
  
