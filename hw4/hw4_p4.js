function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	var h = random(360);
	background(0);
	noStroke();


	for (var x = 0; x <= 400; x += 25) {
		for (var y = 0; y <= 400; y += 25) {
			fill(random(360), 100, 100);
			ellipse(x, y, 20, 20);


		}
	}
}