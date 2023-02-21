var video;

var vScale = 8;

function setup() {
  createCanvas(800, 600);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
}

function draw() {
  background(255);
  video.loadPixels();
  
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;

      noStroke();
      fill(0);
      rectMode(CENTER);
      if (bright < 30) {
        text("思", x * vScale, y * vScale);
      } else if (bright < 100) {
        text("心", x * vScale, y * vScale);
      } else if (bright < 170) {
        text("门", x * vScale, y * vScale);
      } else if (bright < 200) {
        text("一", x * vScale, y * vScale);
      } else {
        text(".", x * vScale, y * vScale);
      }
    }
  }
}
