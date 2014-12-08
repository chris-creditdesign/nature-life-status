(function() {
		var init = function($)
		{
			/*	jQuery ready */
			$.when(
				$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js"),
				$.getScript("data/threatened_species_data.js")
			).done(function () {

				var lfStGraphic = new BuildWidget("#life-status-chart", buildParams(), buildData(data));
				
				lfStGraphic.buildCheckboxes("#states");

				lfStGraphic.buildScales();
				lfStGraphic.resizeContainer("#life-status-chart");
				lfStGraphic.buildCanvas("#canvas-chart");
				lfStGraphic.fillCanvas();

				lfStGraphic.buildSVG("#svg-chart");
				lfStGraphic.drawRects();

				// TO DO ADD LEFT RIGHT to tool tips
				// $("li").eq(300).position().left;

				$(".outer-wrapper .options input").change(function () {
					lfStGraphic.fillCanvas();
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