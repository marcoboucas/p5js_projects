var jour=60*60*24;
var horloge=[];
var taille;
function setup(){
  createCanvas(windowWidth,windowHeight);
  for (let i=0;i<101;i++){
    horloge.push(false)
    frameRate(2)
  }
  taille=min(width,height)
}
function draw(){
  time=new Date();
  heures=time.getHours()
  minutes=time.getMinutes()
  secondes=time.getSeconds()
  fraction=str((secondes+60*(minutes+60*heures))/jour);

  fill(0)
  stroke(0)
  strokeWeight(10)
  textSize(50)
  txt=heures+"h "+minutes+"min "+secondes+"s"
  text("salut",width/2,height/2)
  console.log(txt)

  dixiemes=int(fraction[0]+fraction[2])
  centiemes=int(fraction[3]+fraction[4])
  milliemes=int(fraction[5]+fraction[6])

  // RESET
  for (let i=0;i<horloge.length;i++){
    horloge[i]=false;
  }
  // dixiemes
  for (let h=0;h<dixiemes;h++){
    horloge[(h+1)*10]=true;
  }

  // centieme
  for (let h=0;h<centiemes;h++){
    if (h%10!=0){
      horloge[h]=true;
    }
  }

  // milliemes
  horloge[milliemes]=!horloge[milliemes]




  // Afficher l'Horloge
  translate(width/2,height/2)
  noFill();
  background(70)
  strokeWeight(1);
  for (let i=0;i<horloge.length;i++){
    if (horloge[i]){
      if ((i%10)==0){stroke(255,0,0)}
      else{stroke(255)}
    }else{noStroke()}
    ellipse(0,0,taille*i/100)
  }
  stroke(0)
  ellipse(0,0,taille*1.01)
}
