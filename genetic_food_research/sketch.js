function Vehicule(dna,x,y){
  this.pos=createVector(x || random(width),y || random(height));
  this.vel=createVector(0,0);
  this.acc=createVector(0,0);
  this.dna=dna
  this.life=this.dna['maxLife'];
  this.livingTime=0
  this.forceFood=createVector();

}
Vehicule.prototype.show=function(){
  fill(couleur(this.life,this.dna['maxLife']))
  push()
  translate(this.pos.x,this.pos.y);
  angle=this.vel.heading()-PI/2
  rotate(angle)
  triangle(-5,0,0,30,5,0)
  if (debugMode){
    rotate(-this.vel.heading()+this.forceFood.heading())
    fill(0,0,255)
    rect(0,0,2,100*this.forceFood.mag())
  }
  pop()
}
Vehicule.prototype.applyForce=function(force){
  this.acc=this.acc.add(force)
}
Vehicule.prototype.update=function(){
  this.pos=this.pos.add(this.vel);
  this.vel=this.vel.add(this.acc);
  this.acc=this.acc.mult(0);
}
Vehicule.prototype.nearestFood=function(){
  nearest=null;
  index=null
  dmin=Infinity
  for (let i=0;i<nourritures.length;i++){
    food=nourritures[i]
    d=food.copy().sub(this.pos).mag()
    if (d<dmin && this.dna['visionRange']){
      dmin=d;
      index=i;
      nearest=food
    }
  }
  return [nearest,index];
}
Vehicule.prototype.goToward=function(vecteur){
  facteurStearing=this.dna['mass']/100+0.5;
  facteurForce=this.dna['velocity'];
  desiredVelocity=vecteur.copy().sub(this.pos).mult(facteurStearing)
  stearing=desiredVelocity.sub(this.vel).mult(facteurForce)
  return stearing
}
Vehicule.prototype.reaction=function(){
  [nearestFood,index]=this.nearestFood();
  if (nearestFood){
    if (nearestFood.copy().sub(this.pos).mag()<epsilon){
      nourritures.splice(index,1);
      this.life+=50-this.dna['mass']/2;
      if (this.life>this.dna['maxLife']){this.life=this.dna['maxLife']}
    }
    this.forceFood = this.goToward(nearestFood);
    this.applyForce(this.forceFood);
  }

  // Pour éviter qu'ils partent trop hors du cadre
  if (this.pos.x<borderLimit || this.pos.x>width-borderLimit || this.pos.y<borderLimit || this.pos.y>height-borderLimit){
    force=this.vel.copy().mult(-0.1)
    this.applyForce(force);
  }
  this.update();
  this.life--;
  this.livingTime++;
}



vehicules=[];
nourritures=[];

nbr=10;
probaFood=0.1;
debugMode=false;
epsilon=5
borderLimit=20

mutationRate=0.05;
reproductionRate=0.01;
longestLife=0
function setup(){
  createCanvas(windowWidth,windowHeight);
  for (let i=0;i<nbr;i++){
    dna=generateDNA();
    vehicules.push(new Vehicule(dna))
  }
}
function draw(){

  if (nourritures.length<10){
    newFood=createVector(random(width),random(height))
    nourritures.push(newFood)
  }

  background(255);
  for (let vehicule of vehicules){
    vehicule.reaction()
    vehicule.show()
    if (random()<reproductionRate && vehicules.length<2*nbr){
      dna=mutateDNA(vehicule.dna);
      x=vehicule.pos.x;
      y=vehicule.pos.y
      vehicules.push(new Vehicule(dna,x,y))
    }
    if (vehicule.livingTime>longestLife){
      longestLife=vehicule.livingTime;
    }
  }
  for (let food of nourritures){
    fill(0,255,0)
    ellipse(food.x,food.y,5,5)
  }
  for (i=vehicules.length-1;i>=0;i--){
    if (vehicules[i].life<=0){
      x=vehicules[i].pos.x;
      y=vehicules[i].pos.y;
      vehicules.splice(i,1);
      newFood=createVector(x,y);
      nourritures.push(newFood);
    }
  }
  stroke(2)
  text(longestLife+'',width/2,20)
}

function couleur(x,xMax){
  txt='hsl('+Math.floor(x/xMax*90)+', 70%, 50%)';
  return color(txt);
}

function generateDNA(){
  dna={}
  dna['maxLife']=random(200)+50;
  dna['visionRange']=random(100)+5;
  dna['mass']=random(40)+5;
  dna['velocity']=random(0.01)+0.005;
  return dna
}
function mutateDNA(dna){
  newDna=generateDNA();
  keys=['maxLife','visionRange','mass','velocity']
  for (let key of keys){
    if (random()<mutationRate){
      dna[key]=newDna[key]
    }
  }
  return dna
}
