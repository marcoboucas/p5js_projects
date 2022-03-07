function Cercle(Rayon,couleur) {
	this.points=[]
	this.couleur=couleur
	for (i=0;i<nbr;i++){
		this.points.push([Rayon,i/nbr*2*PI])
	}
	
	this.afficher=function(){
		fill(this.couleur)
		stroke(this.couleur)
		for (i=0;i<this.points.length-1;i++){
			line(taille/2+posX(this.points[i]),taille/2+posY(this.points[i]),taille/2+posX(this.points[i+1]),taille/2+posY(this.points[i+1]))
		}
		line(taille/2+posX(this.points[0]),taille/2+posY(this.points[0]),taille/2+posX(this.points[this.points.length-1]),taille/2+posY(this.points[this.points.length-1]))
	
	}
	this.modifAmpli=function(){
		i=int(random(0,nbr));
		u=i;
		v=i;
		Am=random(-10,10);
		this.points[i][0]+=Am
		u=suiv(u);
		v=prec(v)
		this.points[u][0]+=Am*0.8
		this.points[v][0]+=Am*0.8
		u=suiv(u);
		v=prec(v)
		this.points[u][0]+=Am*0.6
		this.points[v][0]+=Am*0.6
		u=suiv(u);
		v=prec(v)
		this.points[u][0]+=Am*0.4
		this.points[v][0]+=Am*0.4
		u=suiv(u);
		v=prec(v)
		this.points[u][0]+=Am*0.2
		this.points[v][0]+=Am*0.2
	}
	this.modifAngle=function(){
		i=int(random(0,nbr));
		Theta=random(-PI/15,PI/15);
		this.points[i][1]+=Theta	
			
	}
	this.modifCouleur=function(){
		i=int(random(3))
		this.couleur[i]+=random(-2,2)
	}
	
}