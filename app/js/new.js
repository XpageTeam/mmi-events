"use strict";

$(function () {

	transformSubmenu();
});

var updateSubmenuTimeout = void 0;

function abs(i) {
	return Math.abs(i);
}

function transformSubmenu() {

	clearTimeout(updateSubmenuTimeout);

	setTimeout(function () {
		$('.main-menu .dropdown .submenu').each(function (i, el) {

			var $this = $(el),
			    elWidth = $this.width(),
			    elOffsetLeft = $this.offset().left,
			    totalWindth = elOffsetLeft + elWidth,
			    windowWidth = $(window).width(),
			    difference = abs(windowWidth - (elWidth + elOffsetLeft));

			if (totalWindth > windowWidth) {
				$this.css({
					"left": "-" + difference + "px"
				});
			}
		});
	}, 100);
}

$(window).on('resize', transformSubmenu);
//# sourceMappingURL=new.js.map
