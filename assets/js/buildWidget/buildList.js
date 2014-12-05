BuildWidget.prototype.buildList = function() {

	d3.select(this.target)
	  .append("ul")
		.selectAll("li")
		.data(this.data.data)
		.enter()
	  .append("li")
		.attr("class", function (d) {
			switch (d.class) {
				case "MAMMALIA":
					return "mammals";
					break;
				case "AVES":
					return "birds";
					break;
				case "AMPHIBIA":
					return "amphibians";
					break;
				case "INSECTA":
					return "insects";
					break;
				default:
					return "null";
			}
		})
		.classed("inactive", true)
		.classed("visible", true)
		.html(function (d) {
			return "<p>" + d.name + "</p>";
		});
};
