score=0
taille=100
vx=0;ax=0;

vie=100

Perdu=false
freq=100
Vtir=5;
Vennemis=2
balles=[]
ennemis=[]
cendres=[]
function preload(){
	img=loadImage('fond.jpg')
	fighter=loadImage('fighter.png')
	asteroide=loadImage('asteroide.png')
	
}
function setup(){
	createCanvas(700,700)
	px=width/2
	py=height-100
}

function draw(){
	imageMode(CORNERS)
	image(img,0,0,width,height)

	//AFIICHAGE VIE
	fill(vie/100*255,0,0)
	stroke(255)
	rectMode(CORNERS)
	rect(0,0,vie/100*width,30)

	if (vie<=0){
		py=-50;
		ennemis=[]
		balles=[]
		if (frameCount%6==0){
		explosion(width/2,height/2)
	}
		textAlign(CENTER,CENTER)
		text('Perdu !! Score:'+score,width/2,50)
		Perdu=true
	}

	if (score>30){freq=90}
	if (score>50){freq=80}



	noStroke()
	textSize(40)
	rectMode(CENTER)
	fill(189,120,0)
	text(score+'',width/2,200)

	update()
	/*
	rectMode(CENTER)
	fill(255,0,0)
	triangle(px,py,px-30,py+40,px+30,py+40)
	triangle(px+width,py,px-30+width,py+40,px+30+width,py+40)
	triangle(px-width,py,px-30-width,py+40,px+30-width,py+40)
	*/
	imageMode(CENTER)
	push()
	translate(px,py)
	rotate(PI)
	image(fighter,0,0)
	pop()
	
	noStroke()
	fill(0,255,100)
	for (k=balles.length-1;k>=0;k--){
		balles[k][1]-=Vtir
		if (balles[k][1]<=-5){balles.splice(k,1)}else{
		ellipse(balles[k][0],balles[k][1],10)}
		//image(asteroide,balles[k][0],balles[k][1],20,20)}
	}

	noStroke()
	fill(255,0,0)
	if (frameCount%freq==0){ennemis.push([random()*width,0])}
	for (k=ennemis.length-1;k>=0;k--){
		ennemis[k][1]+=Vennemis
		if (ennemis[k][1]>height){ennemis.splice(k,1);score--;if (score<0){score=0;}vie-=10;}else{
		image(asteroide,ennemis[k][0],ennemis[k][1],30,30)}

		// ON REGARDE S'il est touché
		for (l=0;l<balles.length;l++){
			if (abs(balles[l][1]-ennemis[k][1])<15+10){
				if (abs(balles[l][0]-ennemis[k][0])<15+10){
					explosion(ennemis[k][0],ennemis[k][1])
					ennemis.splice(k,1)
					balles.splice(l,1)
					score+=5;
					break;
				}
			}
		}
	}

	noStroke()

	for (k=cendres.length-1;k>=0;k--){
		c=cendres[k]
		c.vie--
		if (c.vie<=0){cendres.splice(k,1)}else{
			c.x+=c.vx
			c.y+=c.vy
			fill(c.vie,0,0)
			ellipse(c.x,c.y,5)
		}
	}

}
function keyPressed(){
	if (keyCode==LEFT_ARROW){
		ax=-0.2
	}else if (keyCode==RIGHT_ARROW){
		ax=0.2
	}else if(keyCode==32){
		balles.push([px,py-20])
	}
}
function keyReleased(){
	ax=0
}
function update(){
	vx+=ax
	if (vx>10){vx=10}else if (vx<-10){vx=-10}
	px+=vx
	if (px>width){px=0}
	else if (px<0){px=width}
}
function explosion(dx,dy){
	for (m=0;m<30;m++){
		a=random()*2*3.14
		cendres.push({x:dx,y:dy,vx:cos(a),vy:sin(a),vie:255})
	}
}
