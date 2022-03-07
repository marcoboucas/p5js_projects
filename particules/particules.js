function particule(x){
  this.pos=createVector(x+random(2),random(height));
  this.vel=createVector(random(Vini-1)+1,0);
  this.acc=createVector();
  this.color=[0,0,0];

  this.coloriage=function(){
	//grad=this.vel.x/Vmax*255;
	//this.color=[grad,255-grad,0];
  }
  this.updateAcc=function(){
	this.acc.mult(0);
	
	for (let k=0;k<elements.length;k++){
		dx=(this.pos.x-elements[k].pos.x)
		dy=(this.pos.y-elements[k].pos.y)
		d=dx**2+dy**2
		if (d<taille*5 && d>0){
			this.acc.x+=1/dx**0.5*repulsMolX
			this.acc.y+=1/dy**0.5*repulsMolY
		}
	}
  }

  this.update=function(j){
    this.vel.add(this.acc);
	if (abs(this.vel.x)>Vmax){this.vel.x=this.vel.x/abs(this.vel.x)*Vmax;}
	if (abs(this.vel.y)>Vmax){this.vel.y=this.vel.y/abs(this.vel.y)*Vmax;}
    this.pos.add(this.vel);
  }
  this.afficher=function(){
    fill(this.color);
    ellipse(this.pos.x,this.pos.y,taille);
  }
}