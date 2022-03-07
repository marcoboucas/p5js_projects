taille=600;
w=3;
nbr=100;
V=taille/3

cercles=[]
x=0;
c=0
function setup(){
	createCanvas(taille,taille);
	background(c);
	
	cercles.push(new Cercle(taille/3,[255,20,20]))
	cercles.push(new Cercle(taille/10,[100,20,20]))
	cercles.push(new Cercle(taille/4,[150,50,0]))
	cercles.push(new Cercle(taille/5,[200,0,0]))
 }

function draw(){
	background(c,c,c,1)
	
	for (m=0;m<cercles.length;m++){
		cercles[m].afficher()
	}
	for (m=0;m<cercles.length;m++){
		cercles[m].modifAmpli()
		//cercles[m].modifCouleur()
	}
	
}

function posX(pt){
	return pt[0]*cos(pt[1])
}
function posY(pt){
	return pt[0]*sin(pt[1])
}
function prec(i){
	if (i==0){
		return nbr-1
	}
	return i-1
}
function suiv(i){
	if (i==nbr-1){
		return 0
	}
	return i+1
}