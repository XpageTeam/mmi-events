
$(() => {

	transformSubmenu();

})

	let updateSubmenuTimeout;
	
	function abs(i){
		return Math.abs(i);
	}

	function transformSubmenu (){

		
		clearTimeout(updateSubmenuTimeout);

		setTimeout(() => {
			$('.main-menu .dropdown .submenu').each((i,el) => {

				let $this = $(el),
					elWidth = $this.width(),
					elOffsetLeft = $this.offset().left,
					totalWindth = elOffsetLeft + elWidth,
					windowWidth = $(window).width(),
					difference = abs(windowWidth - (elWidth + elOffsetLeft));

					if(totalWindth > windowWidth){
						$this.css({
							"left" : "-"+(difference)+"px",
						})

					}

			})

		}, 100)
	}


	$(window).on('resize', transformSubmenu)
