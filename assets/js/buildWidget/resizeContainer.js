BuildWidget.prototype.resizeContainer = function(target) {
	/* Resize container */
	this.params.height = (this.params.rectWidth/1.5) + ((this.data.data.length/this.params.numPerLine) * this.params.rectWidth);
	jQuery(target).css("height", Math.ceil(this.params.height) + "px");
};
