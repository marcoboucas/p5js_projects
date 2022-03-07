var mouvementTouches=0.01;
var mouvementSouris=1;
var mouvementSourisRoue=0.1;
var mouvementRotationDefaut=0.005
var echelle=70;
var zoom=3;
var batiment;
var murs;
var bornes;
var nom;

var cBackground;
var cBuilding;
var cRoom;
var cDoor;

var rotation={'tx':0,'ty':0.18};
function setup(){
	createCanvas(windowWidth,windowHeight);
	initialiser('4H');
	cBuilding=color(150);
	cRoom=color(100);
	cDoor=color(0,0,200);
	cBackground=color(0);
}


function draw(){
	background(cBackground);
	stroke(255)
	fill(255)
	textSize(10)
	textAlign(LEFT)
	text(''+Math.floor(frameRate()),20,10)
	// Affichage des informations:
	stroke(255)
	textAlign(CENTER)
	fill(255)
	strokeWeight(2)
	textSize(30)
	text(nom,width/2,30)


	// Affichage de la liste des bornes:
	push()
	translate(9/10*width,40)
	textSize(15)
	noStroke()
	text('Liste des bornes:')
	translate(0,20)
	noms=Object.keys(bornes)
	for (let nom of noms){
		borne=bornes[nom];
		if (borne.status==true){fill(0,225,0)}
		else if(borne.status==false){fill(255,0,0)}
		else{fill(0,0,255)}
		text(nom,0,0);
		translate(0,20)
	}
	pop()

	translate(width/2,3/4*height) // On se déplace en fonction de l'utilisateur

	// On place l'ensemble des points
	stroke(255);
	strokeWeight(3);
	batiment_perspective=[];
	for (let pt of batiment){
		newPt=projection(pt,rotation.tx,rotation.ty,zoom)
		batiment_perspective.push(newPt);
		point(newPt.x,newPt.y);
	}

	// On dessine les murs
	strokeWeight(1)
	for (let mur of murs){
		if (mur[2]=='building'){stroke(cBuilding);}
		else if (mur[2]=='room'){stroke(cRoom);}
		else if (mur[2]=='door'){stroke(cDoor);}
		else {stroke(255);}
		pt1=batiment_perspective[mur[0]];
		pt2=batiment_perspective[mur[1]];
		line(pt1.x,pt1.y,pt2.x,pt2.y);
	}
	noStroke();
	// On affiche les bornes:
	for (let nom of noms){
		borne=bornes[nom];
		if (borne.status==true){fill(0,225,0)}
		else if(borne.status==false){fill(255,0,0)}
		else{fill(0,0,255)}
		pt=projection({'x':borne.x,'y':borne.y,'z':borne.z},rotation.tx,rotation.ty,zoom);
		ellipse(pt.x,pt.y,10,10)
	}

	// Gestion du mouvement
	if (keyIsDown(LEFT_ARROW)){
		rotation.tx+=mouvementTouches;
	}
	else if (keyIsDown(RIGHT_ARROW)){
		rotation.tx-=mouvementTouches;
	}
	else{
		rotation.tx+=mouvementRotationDefaut;
	}
	if (keyIsDown(UP_ARROW)){
		rotation.ty+=mouvementTouches;
	}
	else if (keyIsDown(DOWN_ARROW)){
		rotation.ty-=mouvementTouches;
	}


	// Pour changer de batiment de temps en temps:
	if (rotation.tx>2*PI){
		changerBatiment();
	}
}
function mouseWheel(event) {

  zoom += event.delta*mouvementSourisRoue;
	if (zoom<0.01){zoom=0.01;}
	if (zoom>100){zoom=100;}
}
function projection(pt,theta,phi,zoom){
	dx=cos(theta)*pt.x-sin(theta)*pt.y;
	dy=sin(theta)*pt.x+cos(theta)*pt.y;
	dy=-pt.z*cos(phi)-dy*sin(phi)
	return {'x':dx/zoom,'y':dy/zoom};
}



function initialiser(nomBatiment){
	if (['4D','4E','4F','4G','4H'].includes(nomBatiment)){
		nom=nomBatiment;
		resultat=generer_muses()
		batiment=resultat[0];
		murs=resultat[1];
		bornes=BORNES[nomBatiment];
	}else{noLoop();console.log('Erreur: Ce batiment n\'existe pas');return}
	for (let point of batiment){
		point.x*=echelle;
		point.y*=echelle;
		point.z*=echelle;
	}
	nomsBornes=Object.keys(bornes);
	for (let nomBorne of nomsBornes){
		borne=bornes[nomBorne];
		borne.x*=echelle;
		borne.y*=echelle;
		borne.z*=echelle;
	}
	rotation={'tx':0,'ty':0.18};
	zoom=3;
}


function changerBatiment(){
	liste_batiments=['4D','4E','4F','4G','4H'];
	nomBatiment=random(liste_batiments);
	initialiser(nomBatiment);
}
