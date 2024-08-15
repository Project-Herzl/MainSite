let numberofturns = 0;
let streams = [];
const fadeInterval = 1.6;
const symbolSize = 14;
const randomfps = [20, 70, 1000, 5000, 10, 7734, 3283];
let index;
let newrandom = [];
let deathSound;

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight);
  deathSound.play()
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
  index = int(random(0, 7));
  numberofturns++;

  if (numberofturns % 100) {
    background(0);  
        fill('red');
    textSize(20);
    textAlign(CENTER, CENTER);
    text('HAMAS WILL FALL', width / 2, height / 2);
  }

  streams.forEach(function(stream) {
    stream.render();
  });
}

function Matrix(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.speed = speed;
  this.first = first;
  this.switchInterval = round(random(2, 25));

  this.setToRandomSymbol = function() {
    let charType = round(random(0, 5));
    if (frameCount % this.switchInterval === 0) {
      if (charType > 1) {
        this.value = String.fromCharCode(0x30A0 + floor(random(0, 97)));
      } else {
        this.value = floor(random(0,10));
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
    let first = round(random(0, 1)) == 1;
    for (let i =0; i <= this.totalSymbols; i++) {
      let symbol = new Matrix(
        x,
        y,
        this.speed,
        first
      );
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
