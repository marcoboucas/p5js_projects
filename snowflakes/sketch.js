particules=[];
finished=[];
vitesse=1;
epsilon=2;
radius=2;
proba=20;
nbrBranches=5;
acc=10;

function setup(){
  createCanvas(600,600);
  creerSnowflake();
}
function creerSnowflake(){
  ampli=250;
  angle=random(TWO_PI/nbrBranches)
  x=ampli*cos(angle);
  y=ampli*sin(angle);
  particules.push(new Snowflake(x,y));
}
function draw(){
  background(0);

  translate(width/2,height/2)
  for (let j=0;j<acc;j++){
    if ((acc*frameCount+j)%proba==0){creerSnowflake()}
    for (snow of particules){
      snow.update();
    }
  }
  for (snow of particules){
    snow.show();
  }
}

function Snowflake(x,y){
  this.pos=createVector(x,y);
  this.finished=false;
  this.r=radius;
}
Snowflake.prototype.show=function(){
  noStroke();
  fill(255);
  push()
  for (i=0;i<nbrBranches;i++){
    rotate(TWO_PI/nbrBranches);
    ellipse(this.pos.x,this.pos.y,this.r*2);
  }
  pop()
}
Snowflake.prototype.update=function(){
  if (!this.finished){
    direction=p5.Vector.fromAngle(this.pos.heading()).mult(-vitesse);
    this.pos=this.pos.add(direction);
    if (this.pos.mag()<epsilon){
      this.finished=true;
    }
    for (other of particules){
      if (other!=this){
        d=dist(other.pos.x,other.pos.y,this.pos.x,this.pos.y);
        if (d<2*radius){
          this.finished=true;
          break;
        }
      }
    }
  }
}
