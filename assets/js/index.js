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
				lfStGraphic.buildCheckboxes("#states");
				lfStGraphic.updateNumbers();


				$(".outer-wrapper .chart li").on("mouseover", function() {
					$(".outer-wrapper .chart li").addClass("inactive");
					$(this).removeClass("inactive");
				});

				$(".outer-wrapper .chart ul").on("mouseleave", function () {
					$(".outer-wrapper .chart li").addClass("inactive");
				});

				// TO DO ADD LEFT RIGHT to tool tips
				// $("li").eq(300).position().left;

				$(".outer-wrapper .options input").change(function () {
					// var thisProp = $(this).prop("checked");
					// var thisVal = $(this).val();

					lfStGraphic.updateList();
					lfStGraphic.updateNumbers();
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