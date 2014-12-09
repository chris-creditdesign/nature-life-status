function buildParams () {
	var params = {};

	params.colour =  [	"#f26621", /* mammals */
						"#66c7c3", /* birds */
						"#677a94" /* amphibians */
					];

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
