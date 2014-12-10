BuildWidget.prototype.drawCircle = function(colour, x, y, radius) {
	this.context.beginPath();
	this.context.fillStyle = colour;  
	this.context.arc((this.params.rectWidth/2) + (x * this.params.rectWidth), (this.params.rectWidth/2) + (y * this.params.rectWidth), radius, 0, 2 * Math.PI, false);
	this.context.fill();
	this.context.closePath();
};
