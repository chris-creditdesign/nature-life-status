function buildData (data) {
	var updatedData = [];

	for (var i = 0; i < data.length; i++) {
		var myObject = {};

		myObject.class = data[i].class;
		myObject.status = data[i].status;

		if (data[i].common_names !== "") {
			myObject.names = data[i].common_names;
		} else if (data[i].synonyms !== "") {
			myObject.names = data[i].synonyms;
		} else {
			myObject.names = data[i].species;
		}
		myObject.name = myObject.names.split(',')[0].split('|')[0];
		
		updatedData.push(myObject);
	}

	updatedData.sort(compareClass);

	return updatedData;
}

/*	Function to sort papers by citation */
function compareClass(a,b) {
	if (a.class < b.class)
		return 1;
	if (a.class > b.class)
		return -1;
	return 0;
}