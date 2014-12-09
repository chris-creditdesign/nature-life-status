function buildParams () {
	var params = {};

	params.colour =  {	MAMMALIA: "#f26621",
						AVES: "#66c7c3",
						AMPHIBIA: "#677a94"
					};

	params.uiColour = {
		veryLightGrey: "#ddd",
		lightGrey: "#999",
		grey: "#666",
		darkGrey: "#333"		
	};

	params.width = jQuery('#content').width();

	/* Rectangel dimensions */
	params.numPerLine = 50;
	params.rectWidth = params.width / params.numPerLine;

	params.key = {};

	params.format = d3.format("0,000");

	return params;
}
