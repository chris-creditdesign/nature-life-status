BuildWidget.prototype.buildCanvas = function(target) {
	/* set up canvas */
	this.canvas = d3.select(target).append("canvas")
      .attr("width", this.params.width)
      .attr("height", this.params.height);

	this.context = this.canvas.node().getContext("2d");
};
