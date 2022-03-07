nbr=100
w=5
cases=[]

p1=0.1
p2=0.5
t=20
function setup(){
  createCanvas(nbr*w,nbr*w)
  background(255)
  for (i=0;i<nbr;i++){
    cases.push([])
    for (j=0;j<nbr;j++){
      cases[i].push(0)
    }
  }
  x=int(random()*nbr)
  y=int(random()*nbr)
  cases[x][y]=1
  frameRate(5)
}
function draw(){
  background(255)
  noStroke()
  for (i=0;i<nbr;i++){
    for (j=0;j<nbr;j++){
      c=cases[i][j]
      if (c==0){fill(255)}
      else if (c==1){fill(255,0,0)}
      else if (c==2){fill(0,255,0)}
      else if (c==3){fill(0)}
      rect(i*w,j*w,w,w)
    }
  }
  mousePressed()
}
function mousePressed(){
  newcases=[]
  for (i=0;i<nbr;i++){
    newcases.push([])
    for (j=0;j<nbr;j++){
      newcases[i].push(0)
    }
  }
  for (i=0;i<nbr;i++){
    for (j=0;j<nbr;j++){
      c=cases[i][j]
      if (c==0){
        s=0
        for (x=-1;x<=1;x++){
          for (y=-1;y<=1;y++){
            dx=i+x;dy=j+y;
            if (dx>=0 && dx<nbr && dy>=0 && dy<nbr){
              if (cases[dx][dy]==1){
                s+=1
              }
            }
          }
        }
        if (s>=1){
          if (random()<p2){
            newcases[i][j]=1
          }
        }
      }
      else if(c==1){
        if (random()<=p1){newcases[i][j]=3}else{newcases[i][j]=2}
      }
      else{
        newcases[i][j]=cases[i][j]
      }

    }
  }
  for (i=0;i<nbr;i++){
    for (j=0;j<nbr;j++){
      if (newcases[i][j]!=cases[i][j]){
        cases=newcases
        return
      }
    }
  }
  console.log('FINI!!')
  noLoop()
  cases=newcases
  s=0;i=0;r=0;d=0
  for (i=0;i<nbr;i++){
    for (j=0;j<nbr;j++){
      c=cases[i][j]
      if (c==0){
        s+=1
      }
      else if(c==1){
        i+=1
      }else if(c==2){
        r+=1
      }else{d+=1}
    }
  }
  console.log('Nombre de Saints:',s)
  console.log('Nombre d\'infectés:',i)
  console.log('Nombre de Rétablis:',r)
  console.log('Nombre de Morts:',d)
}
