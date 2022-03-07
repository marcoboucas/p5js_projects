var points=[];
var nbrPoints=5;
var me;
var pourcent=0.5;
var prec;
var d;
function setup(){
  createCanvas(windowWidth,windowHeight)
  for (let i=0;i<nbrPoints;i++){
    x=width*0.6*cos(TWO_PI*i/nbrPoints-PI/2)+width/2;
    y=height*0.6*sin(TWO_PI*i/nbrPoints-PI/2)+height/2;
    p={x:x,y:y}
    points.push(p)
  }
  me={x:width/2,y:height/2}
  background(0)
  stroke(255)
  strokeWeight(5)
  for (let p in points){
    point(p.x,p.y)
  }
  d=(width/2)**2+(height/2)**2
}
function draw(){
  strokeWeight(1)
  colorMode(HSB)
  for (let i=0;i<500;i++){
    suivant=random(points)
    while (suivant==prec){suivant=random(points);}
    me.x=lerp(me.x,suivant.x,pourcent)
    me.y=lerp(me.y,suivant.y,pourcent)
    ampli=(me.x-width/2)**2+(me.y-height/2)**2
    stroke(ampli/d*360,50,50)
    point(me.x,me.y)
    prec=suivant;
  }
}
