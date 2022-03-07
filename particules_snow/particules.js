function particule(){
	if (frameCount>2){this.pos={x:random()*width,y:0} }
	else{ this.pos={x:random()*width,y:random()*height} }
	this.vel={x:0,y:0}
	this.acc={x:0,y:0}
	this.m=random()*1.3+0.1
	this.neige=false
	if (random()>0.5){this.neige=true}
	
	
	this.afficher=function(){
		if (this.neige==true){image(img,this.pos.x,this.pos.y,this.m*15,this.m*15)}
		else{ ellipse(this.pos.x,this.pos.y,this.m*10)}
	}
	this.update=function(){
		this.acc.x=Vent*this.m
		this.acc.y=0
		
		this.vel.x+=this.acc.x
		this.vel.y=this.m*3
		this.pos.x+=this.vel.x
		this.pos.y+=this.vel.y
		
	}
	
}