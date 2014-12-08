BuildWidget.prototype.drawRects = function() {
	var self = this;

	this.rects = this.svg.selectAll("rect")
		.data(this.data.data)
		.enter()
		.append("rect")
		.attr("x", function(d,i) {
				return self.xScale(i);
			})
		.attr("y", function(d,i) {
				return self.yScale(i);
			})
		.attr("width", this.params.rectWidth)
		.attr("height", this.params.rectWidth)
		.style("opacity", 0);
		
		// .on("mouseover", function (d) {
		// 	console.log(d.name);
		// });
};