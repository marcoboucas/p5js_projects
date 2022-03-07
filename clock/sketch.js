r=20
g=0.3
f=0.001
function setup(){
  createCanvas(700,700);
  background(0);
  angleMode(DEGREES);
  balles=[]
  d=date()
  nbrH=0;nbrM=0;nbrS=0;nbrMS=0;
}


function draw(){
	if (balles.length>200){noLoop()}
	background(0)
	d=date()
	
	if (nbrH==23 && d.h>=0){nbrH=0;for (i=balles.length-1;i>=0;i--){if (balles[i].type=='heure'){balles.splice(i,1)}}}
	if (nbrM==59 && d.m>=0){nbrM=0;for (i=balles.length-1;i>=0;i--){if (balles[i].type=='minute'){balles.splice(i,1)}}}
	if (nbrS==59 && d.s>=0){nbrS=0;for (i=balles.length-1;i>=0;i--){if (balles[i].type=='seconde'){balles.splice(i,1)}}}
	if (nbrMS==9 && d.ms>=0){nbrMS=0;for (i=balles.length-1;i>=0;i--){if (balles[i].type=='milliseconde'){balles.splice(i,1)}}}
	
	if (nbrH<d.h){balles.push(creerBalle('heure'));nbrH++}
	if (nbrM<d.m){balles.push(creerBalle('minute'));nbrM++;}
	if (nbrS<d.s){balles.push(creerBalle('seconde'));nbrS++;}
	if (nbrMS<d.ms){nbrMS++;}
	
	
	
	
	for (i=0;i<balles.length;i++){
		updateBalle(balles[i])
	}
	for (i=0;i<balles.length;i++){
		b=balles[i]
		if (b.type=='heure'){fill(255,0,0)}
		else if (b.type=='minute'){fill(0,255,0)}
		else if (b.type=='seconde'){fill(0,0,255)}
		else if (b.type=='milliseconde'){fill(80,200,255)}
		ellipse(b.x,b.y,r,r)	
	}
}

function date(){
	return {h:hour(),m:minute(),s:second(),ms:millis()}
}



function creerBalle(type){
	x=random()*(width/4-2*r)+r
	if (type=='heure'){x+=0}
	else if (type=='minute'){x+=width/4}
	else if (type=='seconde'){x+=2/4*width}
	else if (type=='milliseconde'){x+=3/4*width}
	y=0
	vx=0;
	vy=0;
	m=1+random()
	return {x:x,y:y,vx:vx,vy:vy,ax:0,ay:0,type:type,m:m}
}


function updateBalle(b){
	ax=-f*b.vx
	ay=g*b.m-f*b.vy
	b.vx+=ax
	b.vy+=ay
	if (b.y+b.vy>=height){b.vy=-b.vy}
	
	b.x+=b.vx
	b.y+=b.vy
	
}
