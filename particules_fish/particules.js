function f1(x){
  y=-2*x+1
  y=max(0,y)
  return 255*y
}
function f2(x){
  if (x<=1/2){
    y=2*x
  }else{
    y=-2*x+2
  }
  y=max(0,y)
  return 255*y
}
function f3(x){
  y=2*x-1
  y=max(0,y)
  return 255*y
}

function Particule(){
  this.pos=[random(width),random(height)]
  this.vel=[random(Vmax),random(Vmax)]
  this.acc=[0,0]
  this.color=[0,0,0]
  this.masse=0.5+random(7)

  this.update=function(){
    this.acc=[0,0]
    dx=(repuls[0]-this.pos[0])*G*this.masse
    dy=(repuls[1]-this.pos[1])*G*this.masse
    this.acc=[dx,dy]

    this.vel[1]+=this.acc[1]
    this.vel[0]+=this.acc[0]
    this.pos[1]+=this.vel[1]
    this.pos[0]+=this.vel[0]

    ampli=this.vel[0]**2+this.vel[1]**2
    if (ampli>Vmax){
      this.vel[0]*=Vmax/ampli
      this.vel[1]*=Vmax/ampli
      ampli=Vmax
    }
    ampli=ampli/Vmax
    this.color=[f3(ampli),f2(ampli),f1(ampli)]
  }
  this.afficher=function(){
    fill(this.color)
    point(this.pos[0],this.pos[1])
  }
}
