w=500
h=600
nbr=10
gx=0.05
gy=0.01
vie=255
geneX1=w*1/4
geneX2=w*3/4
geneY=4/5*h


Particules=[]

function setup(){
	createCanvas(w,h)
	for (i=0;i<nbr;i++){
		Particules[i]=new particule();
	}
}

function draw(){
	if (Particules.length>1000){
		console.log('Trop de particules');
		noLoop()
	}
	background(0)
	Particules.push(new particule())
	for (i=Particules.length-1;i>=0;i--){
		Particules[i].update()
		Particules[i].show()
		if (Particules[i].life<=0){
			Particules.splice(i,1)
		}
	}
}