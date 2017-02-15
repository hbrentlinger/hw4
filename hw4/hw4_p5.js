function setup() {
	createCanvas(400, 400);
	colorMode(HSB);
	var h = random(360);
	background(255);
	noStroke();

	var h = 0;

	for (var y = 18; y <= 380; y += 20) {
		for (var x = 18; x <= 380; x += 20) {

			fill(h, 100, 100);
			ellipse(x, y, 18, 18);

			h = h + .6;


		}
	}
}