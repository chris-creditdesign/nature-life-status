/*	Function to sort objects by class */
function compareClass(a,b) {
	if (a.class < b.class)
		return 1;
	if (a.class > b.class)
		return -1;
	return 0;
}

function compareNames(a,b) {
	if (a.name > b.name)
		return 1;
	if (a.name < b.name)
		return -1;
	return 0;
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitAndCapitalise(string) {

	var myString = string.split('_');
	
	myString[0] = capitaliseFirstLetter(myString[0]);

	myString = myString.join(" ");

	return myString;
}
