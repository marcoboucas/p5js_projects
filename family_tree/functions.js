
function computeAcceleration(id){
	acc = createVector(0,0);
	individu = individus[id]

	// On fait en sorte qu'ils se rapprochent de leurs voisins
	let relations = getRelations(id)
	for (let relation of relations){
		target = individus[relation]
		l = ((individu['x']-target['x'])**2+(individu['y']-target['y'])**2)**(1/2)
		l1 = l0 * (1+Math.abs(parseInt(target['annee'],10)-parseInt(individu['annee'],10)))
		forceAmpli = k * (l - l0)
		force = createVector(target['x']-individu['x'],target['y']-individu['y']).setMag(forceAmpli)
		acc = acc.add(force)
	}
	// On fait en sorte qu'ils s'éloignent entre eux
	for (let key of Object.keys(individus)){
		if (key != id){
			target = individus[key]
			l = ((individu['x']-target['x'])**2+(individu['y']-target['y'])**2)**(1/2)
			forceAmpli = -g/l**2
			force = createVector(target['x']-individu['x'],target['y']-individu['y']).setMag(forceAmpli)
			acc = acc.add(force)
		}
	}

	// On fait en sorte qu'il y ai du ralentissement
	force = createVector(-alpha * individu['vx'],-alpha * individu['vy'])
	acc = acc.add(force)
	return acc
}

function getRelations(id){
	liste=[]
	for (let relation of relations){
		if (relation[0]==id){
			liste.push(relation[1])
		}else if (relation[1]==id){
			liste.push(relation[0])
		}
	}
	return liste
}


function changeDiv(id){
	div = document.getElementById('content');
	individu = individus[id];

	document.getElementById('pseudo').innerHTML = individu['pseudo'];

	// Affichage de tous les fillots
	fillots=[];
	for (let relation of relations){
		if (relation[0]==id){
			fillots.push(individus[relation[1]].pseudo)
		}
	}

	txt = '<h3>Fillot(s):</h3><ul>'
	for (let fillot of fillots){
		txt+='<li>'+fillot+'</li>'
	}
	txt+='</ul>'
	if (fillots.length>0){
		document.getElementById('fillots').innerHTML=txt
	}else{
		document.getElementById('fillots').innerHTML="";
	}
	//Affichage des tous les parrains
	parrains=[];
	for (let relation of relations){
		if (relation[1]==id){
			parrains.push(individus[relation[0]].pseudo)
		}
	}
	txt = '<h3>Parrain(s):</h3><ul>'
	for (let parrain of parrains){
		txt+='<li>'+parrain+'</li>'
	}
	txt+='</ul>'
	if (parrains.length>0){
		document.getElementById('parrains').innerHTML=txt
	}else{
		document.getElementById('parrains').innerHTML="";
	}
}
