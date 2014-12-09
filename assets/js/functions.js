/*	Function to sort objects by class */
function compareClass(a,b) {
	if (a.class < b.class)
		return 1;
	if (a.class > b.class)
		return -1;
	return 0;
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitAndCapitalise(string) {

	var myString = string.split('_');
	
	for (var y = 0; y < myString.length; y++) {
		myString[y] = capitaliseFirstLetter(myString[y]);
	}

	myString = myString.join(" ");

	return myString;
}
