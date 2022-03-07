function obstacle(x1,y1,x2,y2){
	this.pos1=createVector(x1,y1);
	this.pos2=createVector(x2,y2);
	this.d=(this.pos1.x-this.pos2.x)**2+(this.pos1.y-this.pos2.y)**2
	
	this.afficher=function() {
		line(this.pos1.x,this.pos1.y,this.pos2.x,this.pos2.y);
	}
	
	
	this.update=function(){
		// Stockage des deux points
		if (this.pos1.y>this.pos2.y){
			pos1=this.pos1;pos2=this.pos2
		}
		else if (this.pos1.y==this.pos2.y){
			if (this.pos1.x>this.pos2.x){
				pos1=this.pos1;pos2=this.pos2
			}
			else{
				pos2=this.pos2;pos1=this.pos1;
			}
		}
		else{
			pos2=this.pos2;pos1=this.pos1
		}
		// Creation de la fonction into qui à un pt return true si entre les deux
		if (pos1.x==pos2.x){
			into=function(pt){
				return (pt.y<=pos1.y && pt.y>=pos2.y)
			}
		}else if (pos1.y==pos2.y){
			into=function(pt){
				return (pt.x>=pos1.x && pt.x<=pos2.x)
			}
		}else{
			a=(pos1.x-pos2.x)/(pos2.y-pos1.y)
			b=pos1.y-a*pos1.x
			into=function(pt){
				a1=a*pt.x+b
				a2=a*(pt.x+pos1.x-pos2.x)+b-pos1.y+pos2.y
				y1=max(a1,a2);
				y2=min(a1,a2);
				
						
				
				//console.log(int(y1+pos2.y-pos1.y),' >= ',int(pt.y),' >= ',int(y1))
				return (y1>=pt.y && pt.y>=y2)
			}
		}		
		for (j=0;j<elements.length;j++){
			ele=elements[j];
			if (into(ele.pos)){
				pt=ele.pos
				D2=y1-y2
				D1=abs(y1-pt.y)
				fract=D1/D2
				
				xf=pos1.x+fract*(pos2.x-pos1.x)
				yf=pos1.y+fract*(pos2.y-pos1.y)
				d=((xf-pt.x)**2+(yf-pt.y)**2)**0.5
				
				if (abs(d)<taille*10){
					ad=1/d**0.5
					elements[j].acc.x+=ad*repulsObsX*(xf-pt.x)
					elements[j].acc.y+=ad*repulsObsY*(yf-pt.y)
				}
			}
		}
	}
}