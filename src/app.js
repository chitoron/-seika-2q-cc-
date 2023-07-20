var setVanta = () => {
	if (window.VANTA) window.VANTA.RINGS({
	  el: ".s-section",
	  mouseControls: true,
	  touchControls: true,
	  gyroControls: false,
	  minHeight: window.innerHeight,
	  minWidth: window.innerWidth,
	  scale: 1.00,
	  scaleMobile: 1.00,
	  backgroundColor: 0xffffff,
	  color: 0x2f2f50,
	});
};

setVanta();