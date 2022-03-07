let nbr = 7000;
let particules=[];
let speed=0.005;
let taille;
let alpha=0.6;

function setup(){
  createCanvas(700,700);
  taille=min(width,height)*0.15;
  while (particules.length<nbr){
    particules.push({'theta':random(TWO_PI),'offset':random(1000)})
  }
}

function draw(){
  background(0,0,0,60)
  while (particules.length<nbr){
    particules.push({'theta':0,'offset':random(1000)})
  }
  translate(width/2,height/2)
  stroke(255)
  fill(255)
  for (let p of particules){
    r=taille*(1+alpha*noise(p.theta+p.offset))
    /* Pour les coeurs
    x=r*sin(p.theta)**3
    y=-r*(cos(p.theta)-cos(p.theta)**4)
    */
    /* Pour le trèfle */
    n=3
    rho=r*(1+cos(p.theta*n)+sin(p.theta*n)**2)
    x=rho*cos(p.theta)
    y=rho*sin(p.theta)
    point(x,y)
    p.theta+=speed;
  }

  for (let i=particules.length-1;i>=0;i--){
    if (particules[i].theta>=TWO_PI){
      particules.splice(i,1)
    }
  }
}
