// use these variables in createCanvas() parameters to use your
// enter screen real estate to create drawing board.
var windowHeight;
var windowWidth;
windowWidth = window.innerWidth; 								
windowHeight = window.innerHeigh;





function setup() {
	createCanvas(1920,1080);
}


function draw() {
	if(mouseIsPressed) {
		fill(0);
	}

	else {
		fill(255);
	}

	ellipse(mouseX, mouseY, 80, 80);
}


