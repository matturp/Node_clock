let clock;
let roboto;


function setup() {
  createCanvas(windowWidth, windowHeight);
  roboto = loadFont('assets/RobotoMono-Bold.ttf');
  textFont(roboto);
  textSize(250);

}

function draw() {
  background(0);
  //fill(255);
  //noStroke();
  noFill();
  stroke(255);
  textAlign(CENTER);

  var timeH = hour();
  var timeM = minute();
  var timeS = second();
  var x = width/2;
  var y = height/2 + 50;

  clock = text(timeH + ':' + timeM + ':' + timeS,x,y);


  // RASTER


  var tiles = 150;
  var tileSize = width / tiles;
  
   for (var a = 0; a < tiles; a ++) {
   for (var b = 0; b < tiles; b ++) {
     
     var c = clock.get(a*tileSize,b*tileSize);
     var wave = sin(radians(frameCount))*10;
     
     noStroke();
     fill(c);
     ellipse(a*tileSize,b*tileSize,wave,wave);

}
  } 
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
