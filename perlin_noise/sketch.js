particules=[]

nbrParticules=10000;
t=0
dt=0.01
ratio=1/50

debugMode=false;
vectorSize=10;
function setup(){
  noiseSeed(random())
  noiseDetail(2)
  createCanvas(windowWidth*0.9,windowHeight*0.9)
  stroke(255,0,0,20)
  strokeWeight(1)
  if (!debugMode){
    for (let i=0;i<nbrParticules;i++){
      particules.push(new Particule())
    }
  }

}

function draw(){
  background(255,10);
  for (let particule of particules){
    particule.update();
    particule.show();
  }
  if (debugMode){
    stroke(255,0,0)
    for (let i=vectorSize;i<width;i+=vectorSize){
      for (let j=vectorSize;j<height;j+=vectorSize){
        angle=noise(i*ratio,j*ratio,t)*TWO_PI
        line(i,j,i+0.5*vectorSize*cos(angle),j+0.5*vectorSize*sin(angle))
      }
    }
  }
  t+=dt
  //console.log(noiseVector(0,0,t).x)
}

function Particule(){

  this.x=random(width);
  this.y=random(height);
  //this.angle=random(TWO_PI)
  //this.c=color(random(255),random(255),random(255))
  this.show=function(){
    //stroke(this.c);

    point(this.x,this.y)
  }
  this.update=function(){
    vecteur=noiseVector(this.x,this.y,t)
    this.x+=vecteur.x
    this.y+=vecteur.y
    if (this.x<0){this.x+=width}
    else if (this.x>width){this.x-=width}
    if (this.y<0){this.y+=height}
    else if (this.y>height){this.y-=height}

  }
}
function noiseVector(x,y,t){
  angle=noise(x*ratio,y*ratio,t)*TWO_PI
  ampli=5*noise(x*ratio/2+4000,y*ratio/2+4000,t)
  x=ampli*cos(angle)
  y=ampli*sin(angle)
  return {'x':x,'y':y}
}
