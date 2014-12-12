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

	params.width = jQuery('.html-widget').width() - 2;	

	if (params.width === null || params.width > jQuery('#content').width()) {
		params.width = jQuery('#content').width() - 2;
	}

	/* Set a minimum size */
	if (params.width < 300 ) {
		params.width = 300;
	}

	/* Rectangel dimensions */
	params.numPerLine = 50;
	params.rectWidth = params.width / params.numPerLine;

	params.key = {};

	params.format = d3.format("0,000");

	return params;
}
