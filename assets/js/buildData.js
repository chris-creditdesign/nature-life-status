function buildData (data) {
	var updatedData = [];
	var statesArray = [];

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
		myObject.name = capitaliseFirstLetter(myObject.name);
		
		updatedData.push(myObject);

		if (statesArray.indexOf(data[i].status) === -1) {
			statesArray.push(data[i].status);
		}
	}

	updatedData.sort(compareClass);

	return {
		data: updatedData,
		status: statesArray
	};
}

/*	Function to sort papers by citation */
function compareClass(a,b) {
	if (a.class < b.class)
		return 1;
	if (a.class > b.class)
		return -1;
	return 0;
}

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
