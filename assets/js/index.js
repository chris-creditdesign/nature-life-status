(function() {
		var init = function($)
		{
			/*	jQuery ready */
			$.when(
				$.getScript("http://www.nature.com/polopoly_static/js/d3.v3.min.js"),
				$.getScript("http://www.nature.com/widget_assets_polopoly/v516n7530/threatened_species_data.js")
			).done(function () {

				var lfStGraphic = new BuildWidget("#life-status-chart", buildParams(), buildData(data));
				
				lfStGraphic.buildCheckboxes("#states");
				lfStGraphic.updateData();

				lfStGraphic.buildScales();
				lfStGraphic.resizeContainer("#life-status-chart");
				lfStGraphic.buildCanvas("#canvas-chart");
				lfStGraphic.fillCanvas();

				/* Don't show the hover on mobile */
				if ($('.outer-wrapper').width() > 600 ) {
					lfStGraphic.buildSVG("#svg-chart");
					lfStGraphic.enterRects();
					lfStGraphic.buildTooltip();
				}

				lfStGraphic.updateNumbers();

				$(".outer-wrapper .options input").change(function () {
					lfStGraphic.updateData();

					lfStGraphic.fillCanvas();
					
					if ($('.outer-wrapper').width() > 600 ) {
						lfStGraphic.enterRects();
						lfStGraphic.updateRects();
						lfStGraphic.exitRects();
						lfStGraphic.buildTooltip();
					}

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