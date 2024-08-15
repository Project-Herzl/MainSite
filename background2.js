let streams = [];
const symbolSize = 14;
let messageCounter = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  let x = 0;
  for (let i = 0; i <= width / symbolSize; i++) {
    let stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize;
  }
  textFont('Consolas');
  textSize(symbolSize);
}

function draw() {
  background(0, 150); 
  
  drawMessage(); 
  
  streams.forEach(function(stream) {
    stream.render();
  });
}

function drawMessage() {
  fill('red');
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text('HAMAS WILL FALL', width / 2, 20); 
}

function Matrix(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.first = first;
  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval === 0) {
      if (random() > 0.5) {
        this.value = String.fromCharCode(0x30A0 + floor(random(0, 97)));
      } else {
        this.value = floor(random(0, 10));
      }
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 35));
  this.speed = random(5, 22);

  this.generateSymbols = function(x, y) {
    let first = random() < 0.5;
    for (let i = 0; i <= this.totalSymbols; i++) {
      let symbol = new Matrix(x, y, this.speed, first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(180, 255, 180);
      } else {
        fill(0, 255, 70);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  streams = [];
  let x = 0;
  for (let i = 0; i <= width / symbolSize; i++) {
    let stream = new Stream();
    stream.generateSymbols(x, random(-2000, 0));
    streams.push(stream);
    x += symbolSize;
  }
}
