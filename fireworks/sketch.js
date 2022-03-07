function etincelle(x, y, vx, vy){
  this.pos = [x, y]
  this.v = [vx, vy]
  this.vie = 300
}
etincelle.prototype.show=function(){
  noStroke()
  colorMode(HSB, 100)
  fill(100*(this.vie/300),80, this.vie/3)
  colorMode(RGB)
  ellipse(this.pos[0], this.pos[1],2)
}
etincelle.prototype.update=function(){
  this.vie -= 1
  this.pos = [this.pos[0]+this.v[0], this.pos[1]+this.v[1]]
  this.v[1] += 0.05
}

function fusee(x,y,vx,vy,type){
  this.type = type
  this.pos = [x, y]
  this.v = [vx, vy]
  this.vie = 50
}
fusee.prototype.show = function(){
  fill(255*random(),255*random(),255*random())
  rectMode(CENTER)
  rect(this.pos[0], this.pos[1],5,10)
}
fusee.prototype.update = function(){
  this.vie -= 1
  this.pos = [this.pos[0]+this.v[0], this.pos[1]+this.v[1]]
  this.v[1] += 0.1
}
fusee.prototype.exploser = function(){
  if(this.type == 0){
    for(j=0; j<nbEtincelle; j++){
      t = (j*60/nbEtincelle)
      r = random()*5
      x = 0.001*(-t*t+40*t+1200)*sin(PI*t/180) *r
      y = -0.001*(-t*t+40*t+1200)*cos(PI*(t/180))*r
      Etincelles.push(new etincelle(this.pos[0],this.pos[1],x,y))
      Etincelles.push(new etincelle(this.pos[0],this.pos[1],-x,y))
    }
  }
  else if(this.type == 1){
    for(j=0; j<nbEtincelle; j++){
      theta = TWO_PI*random()
      rho = random()
      //console.log(cos(theta))
      Etincelles.push(new etincelle(this.pos[0],this.pos[1],rho*cos(theta),rho*sin(theta)))
    }
  }
  else{
    nbBranches = Math.floor(random()*5)+4

    for(j=0; j<nbEtincelle; j++){
      theta = TWO_PI*random()
      rho = cos(theta*nbBranches)**2
      //console.log(cos(theta))
      Etincelles.push(new etincelle(this.pos[0],this.pos[1],rho*cos(theta),rho*sin(theta)))
    }
  }
}


Fusees = []
Etincelles = []
p = 0.05
nbEtincelle = 200


function setup(){
  createCanvas(windowWidth, windowHeight)
}

function draw(){
  background(0)
  if(random()<p){
    Fusees.push(new fusee(width*random(),height,0,random()*(-10)-8, Math.floor(random()*3)))
  }
  for(i = Fusees.length -1; i>=0 ; i--){
    if(Fusees[i].vie > 0){
      Fusees[i].show()
      Fusees[i].update()
    }
    else{
      Fusees[i].exploser()
      Fusees.splice(i,1)
    }
  }
  for(i = Etincelles.length -1; i>=0 ; i--){

    if(Etincelles[i].vie > 0){
      Etincelles[i].show()
      Etincelles[i].update()
    }
    else{
      Etincelles.splice(i,1)
    }
  }
}
