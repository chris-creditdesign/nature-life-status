BuildWidget.prototype.buildTooltip = function() {
	var self = this;

	this.svg.selectAll("rect")
		.on("mouseover", function (d) {
			var myRect = d3.select(this);

			var tooltipWidth = parseInt(d3.select("#widget-tooltip").style("padding-left"),10) + parseInt(d3.select("#widget-tooltip").style("width"),10) + parseInt(d3.select("#widget-tooltip").style("padding-right"),10);

			var top = (parseFloat(myRect.attr("y"))) - self.params.rectWidth;
			var left = (parseFloat(myRect.attr("x")));

			if ( parseFloat(myRect.attr("x")) > (self.params.width / 2) ) {
				left -= tooltipWidth;
	
				d3.select("#widget-tooltip")
					.style("top",  top + "px")
					.style("left", left + "px")
					.classed("left", false)
					.classed("right", true)
					.classed("hidden", false);
			} else {
				left += self.params.rectWidth;

				d3.select("#widget-tooltip")
					.style("top",  top + "px")
					.style("left", left + "px")
					.classed("left", true)
					.classed("right", false)
					.classed("hidden", false);
			}
			
			d3.select("#name").html(d.name);
			d3.select("#genus").html(d.genus);
			d3.select("#status").html(d.statusText);

		}).on("mouseout", function () {
			self.hideTooltip();
		});
};

BuildWidget.prototype.hideTooltip = function () {
	d3.select("#widget-tooltip").classed("hidden", true);
};
