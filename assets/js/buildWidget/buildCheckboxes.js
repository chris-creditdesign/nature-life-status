BuildWidget.prototype.buildCheckboxes = function (target) {
	
	/* Create checkboxes for each site */
	d3.select(target)
		.append("ul")
		.selectAll('li')
	  .data(this.data.status)
	  	.enter()
		.append("li")
		.html(function (d, i) {
			var checked = "checked";
			var safeName = splitAndCapitalise(d);

			var innerHTML = "<label ><input type='checkbox' value='" + d + "' " + checked + "> " + safeName + "</label>";

			return innerHTML;
		});
};
