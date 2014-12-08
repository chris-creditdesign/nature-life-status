BuildWidget.prototype.updateNumbers = function() {

	/* This should be combined into a function */ 
	var selectedStates = [];

	var checkboxesState = jQuery('.outer-wrapper .options input:checked');

	for (var i = 0; i < checkboxesState.length; i++) {
		selectedStates.push(checkboxesState.eq(i).val());
	};

	var total = 0;
	var mammals = 0;
	var insects = 0;
	var birds = 0;
	var amphibians = 0;

	if ( selectedStates.indexOf("critically_endangered") !== -1 ) {
		total += (this.data.totals.mammalsCR + this.data.totals.insectsCR + this.data.totals.birdsCR + this.data.totals.amphibiansCR);
		mammals += this.data.totals.mammalsCR;
		insects += this.data.totals.insectsCR;
		birds += this.data.totals.birdsCR;
		amphibians += this.data.totals.amphibiansCR;
	}

	if ( selectedStates.indexOf("vunerable") !== -1 ) {
		total += (this.data.totals.mammalsV + this.data.totals.insectsV + this.data.totals.birdsV + this.data.totals.amphibiansV);
		mammals += this.data.totals.mammalsV;
		insects += this.data.totals.insectsV;
		birds += this.data.totals.birdsV;
		amphibians += this.data.totals.amphibiansV;
	}

	if ( selectedStates.indexOf("endangered") !== -1 ) {
		total += (this.data.totals.mammalsE + this.data.totals.insectsE + this.data.totals.birdsE + this.data.totals.amphibiansE);
		mammals += this.data.totals.mammalsE;
		insects += this.data.totals.insectsE;
		birds += this.data.totals.birdsE;
		amphibians += this.data.totals.amphibiansE;
	}

	d3.select("#total-number").text(total);
	
	d3.select("#mammals-number").text(mammals);
	
	d3.select("#birds-number").text(insects);
	
	d3.select("#amphibians-number").text(birds);
	
	d3.select("#insects-number").text(amphibians);
};
