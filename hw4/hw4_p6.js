function setup() {
	createCanvas(400, 400);
	colorMode(HSB, 100);
	frameRate(3);
}

function draw() {
	background(0);


	for (var y = 20; y <= 200; y += 20) {
		for (var x = y; x <= 400-y; x += 20) {
		

			ellipse(x, y, 18, 18);

		}
	}
}