BuildWidget.prototype.updateData = function() {
		var checkboxesState = jQuery('.outer-wrapper .options input:checked');

		/* First remove the existing data from the arrays */		
		while ( this.data.selectedStates.length > 0 ) {
			this.data.selectedStates.shift();
		}

		while (this.data.activeData.length > 0) {
			this.data.activeData.shift();
		}

		/* Get the values of all of the selected checkboxes */
		for (var i = 0; i < checkboxesState.length; i++) {
			this.data.selectedStates.push(checkboxesState.eq(i).val());
		};

		for (var i = 0; i < this.data.data.length; i++) {
			if ( this.data.selectedStates.indexOf(this.data.data[i].status) !== -1 ) {
				this.data.activeData.push(this.data.data[i]);
			}
		};
};
