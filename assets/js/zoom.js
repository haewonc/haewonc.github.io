// Initialize medium zoom.
$(document).ready(function () {
	
	function getMargin() {
		const vh = window.innerHeight;
		const vw = window.innerWidth;
		let margin = 0; 
		if (vw > 576) {
			if (vh > vw) {
				margin = vw * 0.2;
			} else margin = vh * 0.2;
		}
		return margin;
		
	}
	const margin = getMargin();
	medium_zoom = mediumZoom("[data-zoomable]", {
		background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for trasparency.
		margin: margin,
	});
	
	$(window).resize(function () {
		medium_zoom.update({margin: getMargin()})
	});
});
