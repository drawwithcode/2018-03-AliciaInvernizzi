var colorList = ['#3EC9A2',
                '#2F9C95',
                '#FFA69E',
                '#FF7E6B',
                '#FFD3E8'];

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  frameRate(5);
  // rectMode(CENTER);
}


function draw() {
  // put drawing code here
  background(0);

for (var x = 250; x < width-250; x+=50) {
  for (var y = 100; y < height-100; y+=50) {
    var index = floor(random()*colorList.length);
    var colorHex = colorList[index];
      fill(color(colorHex));
      noStroke();
      rect(x,y,40,40);
      // translate(width/2,height/2);
      // rotate(frameCount);
   }
 }


ellipseMode(CENTER);

for (var c = 300; c < width-280; c+=50) {
 for (var d = 140; d < height-100; d+=50) {
   noStroke();
   ellipse(c-5,d+5,80);
     if (random()<0.3) {
       fill(255,255,255,40);
     } else {
       fill(0,0,0,40);
     }
 }
}



}
