(function() {
		var init = function($)
		{
			/*	jQuery ready */
			$.when(
				$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js"),
				$.getScript("data/threatened_species_data.js")
			).done(function () {

				var lfStGraphic = new BuildWidget("#life-status-chart", buildParams(), buildData(data));
				lfStGraphic.buildList();

				$("li").on("mouseover", function() {
					$("li").addClass("inactive");
					$(this).removeClass("inactive");
				});

				$("ul").on("mouseleave", function () {
					$("li").addClass("inactive");
				});

			});

		/* End of active code */
		};


	setTimeout(function()
	{
	if (typeof jQuery !== 'undefined')
	{
		init(jQuery);
	} else
	{
		setTimeout(arguments.callee, 60);
	}
	}, 60);

})();