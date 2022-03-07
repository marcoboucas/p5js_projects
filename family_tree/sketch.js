let tailleElement = 20;
let l0 = 120;
let k = 0.01;
let alpha = 0.01;
let g = 10

let offsetX = 10;
let offsetY = -10;

let vitesseConvergence = 5000;

function setup(){
	createCanvas(windowWidth,windowHeight)
	for (let id of Object.keys(individus)){

		individus[id]['x']=random(width)
		individus[id]['y']=random(height)
		individus[id]['vx']=0
		individus[id]['vy']=0
	}

	for (let i =0; i < vitesseConvergence; i ++){
		// Calcul des forces entre éléments
		accelerations = {}
		for (let id of Object.keys(individus)){

			accelerations[id] = computeAcceleration(id)
		}
		//console.log('\n\n')
		// Mise à jour des éléments
		for (let id of Object.keys(individus)){
			//console.log(id)
			acc = accelerations[id];
			//console.log(acc)
			//console.log(individus[id])
			individus[id]['vx']+=acc.x
			individus[id]['vy']+=acc.y
			individus[id]['x']+=individus[id]['vx']
			individus[id]['y']+=individus[id]['vy']
			//console.log(individus[id])
		}
	}
}


function draw(){
	background(255)
	// Affichage des individus
	textSize(10)
	dontMove = false;
	idElementMoving = -1;




	for (let relation of relations){
		let indi1 = individus[relation[0]]
		let indi2 = individus[relation[1]]
		stroke(0)
		line(indi1.x,indi1.y,indi2.x,indi2.y)
	}




	for (let id of Object.keys(individus)){
		individu = individus[id]
		c = colors[individu['annee']]
		fill(c[0],c[1],c[2])
		noStroke()
		ellipse(individu['x'],individu['y'],tailleElement)
		txt = individu['prenom']+" "+individu['nom']
		txt = individu['pseudo']
		fill(0)
		stroke(255)
		text(txt,individu['x']+offsetX,individu['y']+offsetY)
	}

	for (let id of Object.keys(individus)){
		individu = individus[id]

		// Si la souris est dessus
		l = ((individu.x-mouseX)**2+(individu.y-mouseY)**2)
		if (l<tailleElement**2){
			if (mouseIsPressed){
				idElementMoving = id;
				individus[id].x=mouseX;
				individus[id].y=mouseY;
				dontMove = true;
			}
			strokeWeight(3)
			stroke(255,0,0)
			c = colors[individu['annee']]
			fill(c[0],c[1],c[2])
			ellipse(individu['x'],individu['y'],tailleElement)
			strokeWeight(1)
			document.getElementById('content').style.display='block';
			document.getElementById('content').style.top=mouseY+offsetY+'px';
			document.getElementById('content').style.left=mouseX+offsetX+'px';
			changeDiv(id);
			break;
		}
		else{
			noStroke()
			document.getElementById('content').style.display='none';
		}
	}

	// On décale la vue si on laisse souris appuyée.
	if (mouseIsPressed && !dontMove){
		let dx = mouseX-pmouseX;
		let dy = mouseY-pmouseY;
		for (let key of Object.keys(individus)){
			individus[key]['x']+=dx;
			individus[key]['y']+=dy;
		}
	}


	for (let i =0; i < 10; i++){
		// Calcul des forces entre éléments
		accelerations = {}
		for (let id of Object.keys(individus)){

			accelerations[id] = computeAcceleration(id)
		}
		//console.log('\n\n')
		// Mise à jour des éléments
		for (let id of Object.keys(individus)){
			//console.log(id)
			if (id != idElementMoving){
				acc = accelerations[id];
				//console.log(acc)
				//console.log(individus[id])
				individus[id]['vx']+=acc.x
				individus[id]['vy']+=acc.y
				individus[id]['x']+=individus[id]['vx']
				individus[id]['y']+=individus[id]['vy']
				//console.log(individus[id])
			}
		}
	}

}

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
			variationAnnee = 2*Math.abs(parseInt(target.annee)-parseInt(individu.annee))+1
			forceAmpli = -g/l**2*variationAnnee;

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
