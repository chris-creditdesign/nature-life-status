BuildWidget.prototype.fillCanvas = function() {
	var selectedStates = [];

	var checkboxesState = jQuery('.outer-wrapper .options input:checked');

	for (var i = 0; i < checkboxesState.length; i++) {
		selectedStates.push(checkboxesState.eq(i).val());
	};

	this.context.clearRect(0, 0, this.params.width, this.params.height);

	for (var i = 0; i < this.data.data.length; i++ ) {
		var colour = "#ddd";

		if ( selectedStates.indexOf(this.data.data[i].status) !== -1 ) {
			// Should be a proper scale
			switch (this.data.data[i].class) {
				case "MAMMALIA":
					colour = this.params.colour[0];
					break;
				case "AVES":
					colour = this.params.colour[1];
					break;
				case "AMPHIBIA":
					colour = this.params.colour[2];
					break;
				case "INSECTA":
					colour = this.params.colour[3];
					break;
				default:
					colour = "#ddd";
			}
		}


		var x = i % this.params.numPerLine;
		var y = Math.floor( i / this.params.numPerLine );
		this.drawCircle(colour,x,y);
    }
};