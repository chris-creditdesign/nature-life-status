BuildWidget.prototype.buildScales = function() {
	var self = this;

	this.xScale = function (i) {
		var x = i % self.params.numPerLine;
		return x * self.params.rectWidth;
	}

	this.yScale = function (i) {
		var y = Math.floor( i / self.params.numPerLine );
		return y * self.params.rectWidth;
	}
};
