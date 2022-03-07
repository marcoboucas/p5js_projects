
let message = "hello world"

let font;
function preload() {
  font = loadFont('./assets/yellowCandy.otf');
}

N = 100
W = 800
H = 400
Z = 20
shereRadius = 1


let points = []

function setup() {
  createCanvas(800, 500, WEBGL);
  points = font.textToPoints(message, 0,  0, 50, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  let [maxX, maxY] = [0, 0];
  points.forEach((point)=>{
      maxX = max(point.x, maxX);
      maxY = max(point.y, maxY)
  })
  console.log(maxX, maxY)
  maxX/=2
  maxY/=2
  points.forEach((point)=>{
      
      point.x-=maxX
      point.y-=maxY
      ampli = 0.5 * (maxX - 0.9 * Math.abs(point.x))
      point.z = random(2*ampli)-ampli;

      point.x -=point.z*0.1;
      //point.y /= 10;
  })
  
}

function draw() {
  background(200);
  orbitControl();
  for (let x of points){
    translate(x.x, x.y, x.z);
    sphere(shereRadius)
    translate(-x.x, -x.y, -x.z);
  }
}