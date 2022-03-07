var nbr=300;
var rapport=2;
var r=250;
function setup(){
  createCanvas(700,700);
}
function draw(){
  background(255,0,0);

  translate(width/2,height/2)
  stroke(255)
  strokeWeight(1);
  for (let i=0;i<nbr;i++){
    a1=map(i,0,nbr,0,TWO_PI)
    a2=map((rapport*i)%nbr,0,nbr,0,TWO_PI)
    x1=r*cos(a1);
    y1=r*sin(a1);
    x2=r*cos(a2);
    y2=r*sin(a2);
    line(x1,y1,x2,y2);
  }
  /*nbr++;
  if (nbr==400){
    nbr=20;
  }*/
  rapport+=0.05
  if (rapport>=500){
    rapport=2;
  }
}
