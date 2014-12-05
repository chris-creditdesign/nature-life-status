BuildWidget.prototype.buildList = function() {

	d3.select(this.target)
	  .append("ul")
		.selectAll("li")
		.data(this.data)
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
	  .append("p")
		.text(function (d) {
			return d.name;
		});
};
