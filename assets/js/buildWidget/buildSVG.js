BuildWidget.prototype.buildSVG = function(target) {
	/*	Create SVG element */
	this.svg = d3.select("#svg-chart")
		.append("svg")
		.attr("width", this.params.width)
		.attr("height", this.params.height);

};
