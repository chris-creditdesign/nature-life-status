function buildParams () {
	var params = {};

	params.colour =  [	"#ef6930", // mammals
						"#9db58f", // birds
						"#687a94", // amphibians
						"#e5ae5a" //  insects
					];

	params.species = [	"mammals",
						"birds",
						"amphibians",
						"insects"
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
