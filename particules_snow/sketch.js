nbr=400;
Particules=[];
Vent=0

function preload(){
	img=loadImage('image.PNG')
	fond=loadImage('fond.jpg')
}
function setup(){
	createCanvas(700,700)
	background(0)
}
function draw(){
	image(fond,0,0,width,height)
	while (Particules.length<nbr){
		Particules.push(new particule())
	}
	fill(255)
	noStroke()
	Vent=(noise(frameCount/10)-0.5)/10
	
	for (i=Particules.length-1;i>=0;i--){
		if (Particules[i].pos.y>height) {Particules.splice(i,1);}
		Particules[i].update()
		Particules[i].afficher()
	}
	
}