function buildData (data) {
	var updatedData = [];
	var statesArray = [];

	var totals = {
		mammalsCR: 0,
		mammalsV: 0,
		mammalsE: 0,
		birdsCR: 0,
		birdsV: 0,
		birdsE: 0,
		amphibiansCR: 0,
		amphibiansV: 0,
		amphibiansE: 0
	};

	for (var i = 0; i < data.length; i++) {
		if (data[i].class !== "INSECTA") {
			var myObject = {};

			myObject.class = data[i].class;
			myObject.status = data[i].status;

			if ( myObject.class === "MAMMALIA" ) {
				if (myObject.status === "critically_endangered") {
					++totals.mammalsCR;
				} else if (myObject.status === "vunerable") {
					++totals.mammalsV;
				} else if ( myObject.status === "endangered") {
					++totals.mammalsE;
				}
			} else if ( myObject.class === "AVES" ) {
				if (myObject.status === "critically_endangered") {
					++totals.birdsCR;
				} else if (myObject.status === "vunerable") {
					++totals.birdsV;
				} else if ( myObject.status === "endangered") {
					++totals.birdsE;
				}
			} else if ( myObject.class === "AMPHIBIA" ) {
				if (myObject.status === "critically_endangered") {
					++totals.amphibiansCR;
				} else if (myObject.status === "vunerable") {
					++totals.amphibiansV;
				} else if ( myObject.status === "endangered") {
					++totals.amphibiansE;
				}
			}

			myObject.statusText = splitAndCapitalise(myObject.status);

			if (data[i].common_names !== "") {
				myObject.names = data[i].common_names;
			} else if (data[i].synonyms !== "") {
				myObject.names = data[i].synonyms;
			} else {
				myObject.names = data[i].species;
			}
			myObject.name = myObject.names.split(',')[0].split('|')[0];
			myObject.name = capitaliseFirstLetter(myObject.name);
			
			updatedData.push(myObject);

			if (statesArray.indexOf(data[i].status) === -1) {
				statesArray.push(data[i].status);
			}
		}
	}

	updatedData.sort(compareClass);

	return {
		data: updatedData,
		status: statesArray,
		totals: totals
	};
}
