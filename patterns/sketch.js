nbrRadius=6;
nbrAngles=6;
r=0
nbr=6;

class Patern{
  constructor(x,y,r){
    this.center=createVector(x,y);
    this.r=r;
    this.radius=[];
    this.dices=[];
    this.lines=[];
    this.t=0;
    this.dt=random()*0.1-0.05
    for (let i=0;i<nbrRadius;i++){
      let da1=Math.floor(random(nbrAngles))
      let da2=Math.floor(random(nbrAngles))
      let a1=da1/nbrAngles*TWO_PI;
      let a2=da2/nbrAngles*TWO_PI;
      
      this.radius.push([a1,a2]);
      this.dices.push([da1,da2])
    }

    for (let i=0;i<this.dices.length-1;i++){
      let dice=this.dices[i];
      let des;
      let autre=-1;
      if (random()<0.5){des=dice[0]}else{des=dice[1]}
      for (let j=i+1;j<this.dices.length;j++){
        dice=this.dices[j];
        if (dice[0]>dice[1]){dice[1]+=nbrAngles};
        
        if (des>=dice[0] && des<=dice[1]){
          // Ca veut dire qu'on stop ici
          autre=j;
          break;
        }
      }
      if (autre==-1){autre=this.dices.length}
      let ang=des/nbrAngles*TWO_PI;
      let a1=i/nbrRadius*this.r/2;
      let a2=autre/nbrRadius*this.r/2;
      this.lines.push([a1*cos(ang),a1*sin(ang),a2*cos(ang),a2*sin(ang)]);
    }
  }
  show(){
    stroke(255);
    noFill();
    strokeWeight(2);
    push()
    translate(this.center.x,this.center.y)
    rotate(this.t)
    for (let i=0;i<this.radius.length;i++){
      arc(0,0,i/nbrRadius*this.r,i/nbrRadius*this.r,this.radius[i][0],this.radius[i][1]);
    }

    //console.log(this.dices)
    for (let ligne of this.lines){
      line(ligne[0],ligne[1],ligne[2],ligne[3])
    }
    pop()
    this.t+=this.dt;
  }
}
paterns=[];
function setup(){
  createCanvas(windowWidth,windowHeight);
  r=min(width,height)/2/nbr;
  for (let i=0;i<nbr;i++){
    for (let j=0;j<nbr;j++){
      x=r+i/nbr*width
      y=r+j/nbr*height
      paterns.push(new Patern(x,y,r))
    }
  }
}
function draw(){
  background(0);
  for (let patern of paterns){
    patern.show();
  }
}