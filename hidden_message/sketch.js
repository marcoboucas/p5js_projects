
let message = "Coucou"

let font;
function preload() {
  font = loadFont('./assets/yellowCandy.otf');
}


const DISTANCE = 200;
const SPHERE_RADIUS = 0.3; 
let MAX_POINT_DIST;
let cameraPoint; 

let points = []

const addRandomPoints = (messagePoints)=>{
  // Add random points
  let randomPoints = []
  
  for (let i=0;i<messagePoints.length*2;i++){
    let u = random();
    let x1 = randomGaussian()
    let x2 = randomGaussian()
    let x3 = randomGaussian()
    let mag = Math.sqrt(x1*x1 + x2*x2 + x3*x3)
    x1/=mag;
    x2/=mag;
    x3/=mag;

    let c = Math.cbrt(u);
    let vect = createVector(x1*c, x2*c, x3*c)
    vect.mult(MAX_POINT_DIST)
    randomPoints.push(vect)
  }
  return randomPoints.concat(messagePoints)
}
const generatePoints = () => {
  let fontPoints = font.textToPoints(message, 0, 0, 100, {
    sampleFactor: 1,
    simplifyThreshold: 0
  });
  // Translate the messsage
  let [maxX, maxY] = [0,0];
  fontPoints.forEach((pt)=>{
    if (pt.x>maxX){
      maxX = pt.x
    }
    if (pt.y>maxY){
      maxY = pt.y
    }
  })
  fontPoints.forEach((pt)=>{
    pt.x -= maxX/2;
    pt.y -= maxY/2;
    // Add random
    pt.x +=randomGaussian()*0.5
    pt.y +=randomGaussian()*0.5
    pt.z += randomGaussian()*0.5
  })
  MAX_POINT_DIST = 1.3*((maxX/2)**2+ (maxY/2)**2)**0.5
  return fontPoints.map((x)=>{
    return createVector(x.x, x.y)
  })
  
  

}


const project3D = (points2D) => {
  points2D.forEach((pos) => {
    let diff = p5.Vector.sub(cameraPoint, pos).normalize();
    let randomModif = 0.7 * (random(2*MAX_POINT_DIST)-MAX_POINT_DIST);
    diff.setMag(randomModif)
    pos.add(diff)
  })
  return points2D
}
function setup() {
  createCanvas(800, 500, WEBGL);
  cameraPoint = createVector(0, 0, 400);
  points3D = project3D(generatePoints())
  points3D = addRandomPoints(points3D)

  initRotateX = PI*random()
  initRotateY = PI*random()
  initRotateZ = 0.3*PI + random(0.7*PI)
  

}

function draw() {
  background(200);
  orbitControl();
  rotateX(initRotateX);
  rotateY(initRotateY);
  rotateZ(initRotateZ);
  translate(cameraPoint.x, cameraPoint.y, cameraPoint.z);
  sphere(SPHERE_RADIUS)
  translate(-cameraPoint.x, -cameraPoint.y, -cameraPoint.z);
  
  
  for (let x of points3D) {
    translate(x.x, x.y, x.z);
    sphere(SPHERE_RADIUS)
    translate(-x.x, -x.y, -x.z);
  }
}