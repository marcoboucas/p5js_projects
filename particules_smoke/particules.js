function particule(){
	if (random()>0.5){
		this.pos=[geneX1,geneY]
	}else{
		this.pos=[geneX2,geneY]
	}
	this.pos=[mouseX,mouseY]
	this.vel=[0,0]
	this.acc=[0,0]
	this.life=vie
	
	this.update=function(){
		this.acc=[(random()-0.5)*gx,-gy]
		
		this.vel[0]+=this.acc[0]
		this.vel[1]+=this.acc[1]
		this.pos[0]+=this.vel[0]
		this.pos[1]+=this.vel[1]
		this.life--;
	}
	this.show=function(){
		fill(int(this.life/vie*255))
		noStroke()
		ellipse(this.pos[0],this.pos[1],10)
	}
}