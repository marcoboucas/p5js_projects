nbr=600
acc=5
Fourmis=[]
function setup(){
	createCanvas(nbr,nbr)
	background(255)
	Fourmis.push(new fourmi(int(nbr/4),int(nbr/4)))
	Fourmis.push(new fourmi(int(nbr*3/4),int(nbr/4)))
	Fourmis.push(new fourmi(int(nbr/4),int(nbr*3/4)))
	Fourmis.push(new fourmi(int(nbr*3/4),int(nbr*3/4)))

}

function draw(){
  noStroke()

  loadPixels()
	for (k=0;k<acc;k++){
		for (l=0;l<Fourmis.length;l++){
			Fourmis[l].move()
		}
	}

  updatePixels()
}

function fourmi(x,y){
		this.x=x;
		this.y=y;
		this.dir=0;
		this.move=function(){
			if (get(this.x,this.y)[0]==255){
				this.dir++
				if (this.dir==4) {this.dir=0}
			}else{
				this.dir--
				if (this.dir==-1) {this.dir=3}
			}

			c=255-get(this.x,this.y)[0]
			c=color(c,c,c)
			set(this.x,this.y,c)

			if (this.dir==0){this.y--}
			else if (this.dir==1){this.x++}
			else if (this.dir==2){this.y++}
			else{this.x--}

			if (this.x==-1){this.x=nbr-1}
			else if(this.x==nbr){this.x=0}
			else if(this.y==nbr){this.y=0}
		}
}
