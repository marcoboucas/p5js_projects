/*
Fichier avec les informations du batiment
-> batiment: liste des Points {x,y,z}
-> murs    : Liste des murs  [id1,id2] des points à relier


TYPES DE MURS:
murs chambres  -> 'room'
murs intérieurs-> 'building'
portes         -> 'door'
*/

function generer_muses(){
var batiment=[];
var murs=[];

// MUSE
pi=3.14
hauteurMuses=3.5
hauteurPortes=2.3
nbrEtages=5;

//Etages murs extérieurs
nbrPoints=15;
rayon=12;
ag=2*pi/nbrPoints/2
for (let k=0;k<nbrEtages+1;k++){

  for (let i=0;i<nbrPoints;i++){
    batiment.push(cp(rayon*Math.cos(2*pi*i/nbrPoints-ag),rayon*Math.sin(2*pi*i/nbrPoints-ag),k*hauteurMuses));
    murs.push([k*nbrPoints+i,k*nbrPoints+(i+1)%nbrPoints,'room']);
    if (k!=nbrEtages){
      murs.push([k*nbrPoints+i,(k+1)*nbrPoints+i,'room']);
    }
  }
}
imin=batiment.length;
batiment.push(cp(rayon*Math.cos(-ag/2),rayon*Math.sin(-ag/2),0))
batiment.push(cp(rayon*Math.cos(+ag/2),rayon*Math.sin(+ag/2),0))
batiment.push(cp(rayon*Math.cos(+ag/2),rayon*Math.sin(+ag/2),hauteurPortes))
batiment.push(cp(rayon*Math.cos(-ag/2),rayon*Math.sin(-ag/2),hauteurPortes))
murs.push([imin+0,imin+1,'door'])
murs.push([imin+1,imin+2,'door'])
murs.push([imin+2,imin+3,'door'])
murs.push([imin+3,imin+0,'door'])

//Etages murs intérieurs + murs extérieurs/intérieurs liaison
imin=batiment.length;
rayon=6;
for (let k=0;k<nbrEtages+1;k++){

  for (let i=0;i<nbrPoints;i++){
    batiment.push(cp(rayon*Math.cos(2*pi*i/nbrPoints-ag),rayon*Math.sin(2*pi*i/nbrPoints-ag),k*hauteurMuses));
    murs.push([imin+k*nbrPoints+i,imin+k*nbrPoints+(i+1)%nbrPoints,'room']);
    if (k!=nbrEtages){
      murs.push([imin+k*nbrPoints+i,imin+(k+1)*nbrPoints+i,'room']);
    }

    //liaison avec extérieur
    murs.push([k*nbrPoints+i,imin+k*nbrPoints+i,'room'])
  }
}
// Cage d'escalier au milieu
imin=batiment.length;
nbrPoints=4;
for (let k=0;k<nbrEtages+1;k++){
  batiment.push(cp(-3,-3,k*hauteurMuses))
  batiment.push(cp(-3,+3,k*hauteurMuses))
  batiment.push(cp(+3,+3,k*hauteurMuses))
  batiment.push(cp(+3,-3,k*hauteurMuses))
  murs.push([0+imin+k*nbrPoints,1+imin+k*nbrPoints,'building']);
  murs.push([1+imin+k*nbrPoints,2+imin+k*nbrPoints,'building']);
  murs.push([2+imin+k*nbrPoints,3+imin+k*nbrPoints,'building']);
  murs.push([3+imin+k*nbrPoints,0+imin+k*nbrPoints,'building']);
  if (k!=nbrEtages){
    murs.push([0+imin+k*nbrPoints,0+imin+(k+1)*nbrPoints,'building']);
    murs.push([1+imin+k*nbrPoints,1+imin+(k+1)*nbrPoints,'building']);
    murs.push([2+imin+k*nbrPoints,2+imin+(k+1)*nbrPoints,'building']);
    murs.push([3+imin+k*nbrPoints,3+imin+(k+1)*nbrPoints,'building']);
  }
}

return [batiment,murs];

}
function cp(x,y,z){
  return {'x':x,'y':y,'z':z}
}
