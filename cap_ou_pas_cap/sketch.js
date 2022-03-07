lancement=false;

theta2=0;
theta1=0;
theta=0;
Joueurs=[]
function Joueur(nom,c=[Math.random()*255,Math.random()*255,Math.random()*255]){
	this.nom=nom
	this.score=0
	this.color=c
}

function setup(){
	createCanvas(700,600)
	fullscreen()
	taille=400
}
function lancer_partie(){
	document.getElementById('Joueurs').hidden=true;
	document.getElementById('inGame').hidden=false;
	theta2=0;
	theta1=0;
	theta=-PI/2;
	affichage()
}
function Tourner(){
	document.getElementById('Tourner').disabled=true

	theta1=0.2+random()*0.5
	//theta1=0.001
	theta=random()*2*PI
	f=0.01
	loop()
}
function draw(){
	if (abs(theta1)>0.0001){
		theta2=-f*theta1
		theta1+=theta2
		theta+=theta1
		//console.log(theta)
		affichage()
	}else if(frameCount<2){noLoop();}
	else{
		document.getElementById('Tourner').disabled=false
		theta1=0
		da=2*PI/Joueurs.length
		gagnant=(theta-PI/2)%(2*PI)
		gagnant=2*PI-gagnant
		gagnant=int((gagnant-da)/da)-2
		if (gagnant<0){gagnant+=Joueurs.length}
		t=gages[int(random()*(gages.length+1))]
		t=Joueurs[gagnant].nom+":  "+t
		document.getElementById('texte').innerHTML=t

		noLoop()
	}
}
function update(){
	f=0.2
	theta2=-f*theta1
	theta1+=theta2
	theta+=theta1
}
function affichage(){
	background(255)
	translate(width/2,height/2)
	//Affichage de la fleche
	translate(0,-taille/2+30)
	a=30
	fill(0,255,0)
	triangle(a/2,-a,-a/2,-a,0,a)
	translate(0,taille/2+30)
	push()
	rotate(theta)
	textSize(32)
	da=2*PI/Joueurs.length
	for (i=0;i<Joueurs.length;i++){
		fill(Joueurs[i].color)
		arc(0,0,taille,taille,0,da)

		v=taille/2+20
		rotate(da/2)
		translate(v,0)
		text(Joueurs[i].nom,0,0)
		translate(-v,0)
		rotate(-da/2)
		rotate(da)
	}
	//arc(0,0,taille,taille,angle,angle+da)
	pop()

}
