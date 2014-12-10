BuildWidget.prototype.fillCanvas = function() {
	var fullRadius = this.params.rectWidth/2.3;

	this.context.clearRect(0, 0, this.params.width, this.params.height);

	for (var i = 0; i < this.data.activeData.length; i++ ) {
		var	colour = this.params.colour[this.data.activeData[i].class];

		var x = i % this.params.numPerLine;
		var y = Math.floor( i / this.params.numPerLine );
		this.drawCircle(colour,x,y,fullRadius);
	}
};
