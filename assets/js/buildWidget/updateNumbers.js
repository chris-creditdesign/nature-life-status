BuildWidget.prototype.updateNumbers = function() {
	var total = 0;
	var mammals = 0;
	var birds = 0;
	var amphibians = 0;

	if ( this.data.selectedStates.indexOf("critically_endangered") !== -1 ) {
		total += (this.data.totals.mammalsCR + this.data.totals.birdsCR + this.data.totals.amphibiansCR);
		mammals += this.data.totals.mammalsCR;
		birds += this.data.totals.birdsCR;
		amphibians += this.data.totals.amphibiansCR;
	}

	if ( this.data.selectedStates.indexOf("vulnerable") !== -1 ) {
		total += (this.data.totals.mammalsV + this.data.totals.birdsV + this.data.totals.amphibiansV);
		mammals += this.data.totals.mammalsV;
		birds += this.data.totals.birdsV;
		amphibians += this.data.totals.amphibiansV;
	}

	if ( this.data.selectedStates.indexOf("endangered") !== -1 ) {
		total += (this.data.totals.mammalsE + this.data.totals.birdsE + this.data.totals.amphibiansE);
		mammals += this.data.totals.mammalsE;
		birds += this.data.totals.birdsE;
		amphibians += this.data.totals.amphibiansE;
	}

	d3.select("#total-number").text(this.params.format(total));
	
	d3.select("#mammals-number").text(this.params.format(mammals));
	
	d3.select("#birds-number").text(this.params.format(birds));
	
	d3.select("#amphibians-number").text(this.params.format(amphibians));
};
