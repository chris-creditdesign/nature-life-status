BuildWidget.prototype.updateNumbers = function() {
	var totalNumber = d3.selectAll('.outer-wrapper .chart li.visible');

	var mammalsNumber = d3.selectAll('.outer-wrapper .chart li.mammals.visible');
	var birdsNumber = d3.selectAll('.outer-wrapper .chart li.birds.visible'); 
	var amphibiansNumber = d3.selectAll('.outer-wrapper .chart li.amphibians.visible');
	var insectsNumber = d3.selectAll('.outer-wrapper .chart li.insects.visible');

	d3.select("#total-number").text(this.params.format(totalNumber[0].length));
	d3.select("#mammals-number").text(this.params.format(mammalsNumber[0].length));
	d3.select("#birds-number").text(this.params.format(birdsNumber[0].length));
	d3.select("#amphibians-number").text(this.params.format(amphibiansNumber[0].length));
	d3.select("#insects-number").text(this.params.format(insectsNumber[0].length));
};
