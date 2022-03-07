carre=[];
precision=50
for (let i=0;i<precision;i++){
	if (i%2==0){carre.push(0)}else{carre.push(1/i)}
}
tria=[];
for (let i=0;i<precision;i++){
	if (i%2==0){tria.push(0)}else{tria.push((-1)**(Math.floor(i/2))/i**2)}
}
dentScie=[0];
for (let i=1;i<precision;i++){
	dentScie.push((-1)**(i+1)/i)
}
points=[]
t=0
facteur=50
nbr=500
signal='carre'
function setup(){
	createCanvas(600,600);

}
transform=[]
function draw(){
	if (signal=='carre'){transform=carre;}
	else if (signal=='triangle'){transform=tria;}
	else if (signal=='dentScie'){transform=dentScie;}
	push()
	strokeWeight(1)
	noFill()
	background(0);
	stroke(255);
	translate(100,300)
	y=0;
	for (let w=0;w<transform.length;w++){
		ampli=transform[w];
		ellipse(0,0,2*ampli*facteur,2*ampli*facteur);
		dx=facteur*ampli*cos(w*t)
		dy=facteur*ampli*sin(w*t)
		y+=dy;
		line(0,0,dx,dy)
		translate(dx,dy)
	}
	line()
	if (frameRate()!=0){dt=1/frameRate();t+=dt}else{dt=0}
	points.push(y)
	pop()
	translate(400,300)
	x=0
	dx=0.4
	strokeWeight(3)
	stroke(255,0,0)
	if (points.length>nbr){points.splice(0,1);}
	for (let i=points.length-1;i>=0;i--){
		line(x,points[i],x+dx,points[i-1])
		x+=dx
	}
}
