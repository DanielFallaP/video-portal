function showModal(){
	$('.modal').modal();
	$('#modalPopup').modal('open');
}

function showToast(message,delay){
	Materialize.toast(message,delay);
}

function getColorFunc(value){
	if (value==0)
		return '#d8d8d8';
	if (value==1)
		return '#be0712'
	if (value==2)
		return '#548039';
	if (value==3)
		return '#5e9cd3'
}

function getDetailColorFunc(value){
	if (value==1)
		return 'rgba(242, 194, 195, 0.81)';
	if (value==2)
		return 'rgba(186, 208, 172, 0.78)';
	return 'white';
}

function getIconFunc(state){
	if (state==='Running')
		return 'crop_square';
	else
		return 'stop';
}

function buildUnitChart(id, passed, failed){
	          var w = 200;
		var h = 200;
		var r = h/2;
		var color = d3.scale.category20c();

		var data = [
						  {"label":"Tests passed", "value":passed}, 
						  {"label":"Tests failed", "value":failed}];


		var selector = '#'+id+'Unit';
		document.getElementById(id+'Unit').innerHTML='';
		var vis = d3.select(selector).append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
		var pie = d3.layout.pie().value(function(d){return d.value;});

		// declare an arc generator function
		var arc = d3.svg.arc().outerRadius(r);

		// select paths, use arc generator to draw
		var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
		arcs.append("svg:path")
			.attr("fill", function(d, i){
				return color(i);
			})
			.attr("d", function (d) {
				// log the result of the arc generator to show how cool it is :)
				console.log(arc(d));
				return arc(d);
			});

		// add the text
		arcs.append("svg:text").attr("transform", function(d){
					d.innerRadius = 0;
					d.outerRadius = r;
			return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
			return data[i].label;}
				);
}