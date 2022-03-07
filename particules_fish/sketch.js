nbr=1;
Vmax=700
G=0.01
repuls=[]

function setup(){
  createCanvas(700,600);
  background(255);
  particules=[]
  repuls=[300,300]

  for (i=0;i<nbr;i++){
    particules.push(new Particule())
  }

  c1=random(255)
  c2=random(255)
  c3=random(255)
}

function draw(){
  background(0,0,0,150);
  //fill(255,0,0)
  stroke(255)
  //ellipse(repuls[0],repuls[1],5)
  while (particules.length<nbr){
    particules.push(new Particule())
  }
  while (particules.length>nbr){
    particules.splice(0,1)
  }
  for (let i=0;i<nbr;i++){
    particules[i].update()
  }
  if (random()<0.1){
    c1=random(255)
    c2=random(255)
    c3=random(255)
  }
  stroke(c1,c2,c3)
  for (let i=0;i<nbr;i++){
    particules[i].afficher()
  }
}
function mousePressed(){
  X=mouseX;Y=mouseY;
  for (i=0;i<particules.length;i++){
    particules[i].pos=[X,Y]
  }
}

function mouseMoved(){
  X=mouseX;Y=mouseY;
  if (Y<=height){
	   repuls=[mouseX,mouseY]
  }
}
function reboot(){
  for (let i=0;i<nbr;i++){
    particules[i].pos[0]=random(width)
    particules[i].pos[1]=random(height)
  }
}
