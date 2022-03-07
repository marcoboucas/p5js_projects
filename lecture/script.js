function traitement(){
	t1=' <span class="mot '
	t2='">'
	t3='</span>'
	
	
	phrases=texte.split(',')
	
	phrases1=[]
	for (let i=0;i<phrases.length;i++){
		x=phrases[i].split('.')
		for (let j=0;j<x.length;j++){
			phrases1.push(x[j])
			phrases1.push('.')
		}
		phrases1.splice(phrases1.length-1,1)
		phrases1.push(',')
	}
	phrases1.splice(phrases1.length-1,1)
	
	texteF=''
	nbr=0
	for (let i=0;i<phrases1.length;i++){
		x=phrases1[i].split(' ')
		for (let j=0;j<x.length;j++){
			y=x[j]
			if (y=='.'){texteF+='.'}
			else if (y==','){texteF+=','}
			else if (y=='</br>'){texteF+='</br>'}
			else if (y.length>=1 && y[0]!=' '){
				while (y[0]==' '){y=y.substr(1)}
				while (y[x.length-1]==' '){y=y.substr(0,x.length-1)}
				if (y[0]=='<'){y=y.substr(7);y=y.slice(0,y.length-8);texteF+=t1+'event'+nbr+' '+y+t2+y+t3;nbr++;}
				else{ texteF+=t1+y+t2+y+t3 }	
			}
		}
	}
	tt='</br></br></br></br>'
	texte=tt+texteF.substr(1)+tt
	
	
}

function scroller(){
	events
}


function search(mot){
	t1='<span class="search">'
	t2='</span>';
	mot1=t1+mot+t2
	//texte1=texte.replace(mot,mot1)
	texte1=texte
	if (mot.length==0){document.getElementById('texte').innerHTML=texte1;return;}
	//n=0
	for (i=0;i<texte1.length;i++){
		if (texte1[i].toUpperCase()==mot[0].toUpperCase()){
			test=true
			for (k=1;k<mot.length;k++){
				if (texte1[i+k].toUpperCase()!=mot[k].toUpperCase()){test=false;break;}
			}
			if (test==true){
				//n++
				texte1=texte1.substr(0,i)+t1+texte1.substr(i,mot.length)+t2+texte1.substr(i+mot.length)
				i+=mot1.length-1
			}
		}
	}
	//console.log(n)
	document.getElementById('texte').innerHTML=texte1
	}
	