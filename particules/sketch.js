nbr=1;
Vmax=15;
Vini=3;
taille=5;
repulsMolX=-1;
repulsMolY=-1;
repulsObsX=-0.1;
repulsObsY=-0.1;
Xprec=-1;
Yprec=-1;

function setup(){
  createCanvas(700,400);
  background(255);
  elements=[];
  obstacles=[];
}

function draw(){
  background(200,200,200,150);
  noStroke();
  
  while (elements.length<nbr){
	elements.push(new particule(random(width)));
  }
  while (elements.length>nbr){
	elements.splice(elements.length-1,1);
  }
  
  for (let i=0;i<elements.length;i++){
    elements[i].updateAcc();
  }
  for (let i=0;i<obstacles.length;i++){
    obstacles[i].update();
  }
  for (let i=0;i<elements.length;i++){
    elements[i].update();
	elements[i].coloriage();
    elements[i].afficher();
  }
  stroke(0);
  for (let i=0;i<obstacles.length;i++){
    obstacles[i].afficher();
  }
  
  
  
  
  for (i=elements.length-1;i>=0;i--){
    if (elements[i].pos.x>width || elements[i].pos.x<-1 || elements[i].pos.y<0 || elements[i].pos.y>height){
      elements.splice(i,1);
	  elements.push(new particule(0));
    }
  }
}

function mousePressed(){
	Xn=mouseX
	Yn=mouseY
	if (Xn<width && Yn<height){
		if (Xprec!=-1){
			obstacles.push(new obstacle(Xprec,Yprec,Xn,Yn))
		}
		Xprec=Xn
		Yprec=Yn
	}
}