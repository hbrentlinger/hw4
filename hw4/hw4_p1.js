function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	
var x=0;
	var y=0;
	
	while(x<=400){
		x=x+20;
	y=x+20;
		
				ellipse(x,y,20,20);
	fill(255,255,255);
	}
	

}