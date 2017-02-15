function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 100);
	frameRate(3);
}

function draw() {
	background(220);


	for (var x = 0; x <= 400; x += 20) {
		for (var y = 0; y <= 400; y += 20) {

			ellipse(x, y, 20, 20);
			fill (random(255),random(255),random(255));

		}
	}
}