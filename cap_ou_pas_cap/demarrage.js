function ajouter_joueur(){
  nom=document.getElementById('ajouter_joueur').value+""
  Joueurs.push(new Joueur(nom))
  console.log('Joueur ajouté',Joueurs)
  affichage_joueurs()
}
function supprimer_joueur(id){
  Joueurs.splice(id,1)
  console.log('Joueur supprimé',Joueurs)
  affichage_joueurs()
}
function affichage_joueurs(){
  texte='<table>'
  for (i=0;i<Joueurs.length;i++){
    texte+="<tr><td><input type='text' value='"+Joueurs[i].nom+"' onchange='Joueurs["+i+"].nom=this.value'/></td><td><input type='color' value='"+Joueurs[i].color+"' onchange='Joueurs["+i+"].color=this.value'/></td><td><button onclick='supprimer_joueur("+i+")'>X</button></td></tr>"
  }
  texte+="<tr><td>Nom: <input type='text' id='ajouter_joueur'/></td><td><button onclick='ajouter_joueur();' >Ajouter</button></td></tr>"
  texte+='</table>'

  if (Joueurs.length>=2){
    texte+='<button onclick="lancer_partie()">Lancer la Partie !</button>'
  }
  document.getElementById('joueurs').innerHTML=texte
}
