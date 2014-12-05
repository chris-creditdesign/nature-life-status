BuildWidget.prototype.updateList = function() {
	var self = this;
	var selectedStates = [];

	var checkboxesState = jQuery('.outer-wrapper .options input:checked');

	for (var i = 0; i < checkboxesState.length; i++) {
		selectedStates.push(checkboxesState.eq(i).val());
	};

	d3.select(this.target)
		.select("ul")
		.selectAll("li")
		.classed("visible", function (d) {
			if (selectedStates.indexOf(d.status) === -1 ) {
				return false;
			} else {
				return true;
			}
		});

};