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
			var safeName = d.split('_');
			
			for (var i = 0; i < safeName.length; i++) {
				safeName[i] = capitaliseFirstLetter(safeName[i]);
			};

			safeName = safeName.join(" ");

			var innerHTML = "<label ><input type='checkbox' value='" + d + "' " + checked + "> " + safeName + "</label>";

			return innerHTML;
		});
};