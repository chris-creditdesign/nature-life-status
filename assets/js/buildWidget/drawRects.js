BuildWidget.prototype.enterRects = function() {
	var self = this;

	this.svg.selectAll("rect")
		.data(this.data.activeData)
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
		.attr("fill", "#fff")
		.style("opacity", 0);
};

BuildWidget.prototype.updateRects = function() {
	var self = this;

	this.svg.selectAll("rect")
		.data(this.data.activeData)
		.attr("x", function(d,i) {
				return self.xScale(i);
			})
		.attr("y", function(d,i) {
				return self.yScale(i);
			})
		.attr("width", this.params.rectWidth)
		.attr("height", this.params.rectWidth)
		.style("opacity", 0);
};

BuildWidget.prototype.exitRects = function() {
	var self = this;

	this.svg.selectAll("rect")
		.data(this.data.activeData)
		.exit()
		.remove();
};