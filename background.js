let canvas;
let noiseScale = 0.02;
let colorNoiseScale = 0.005;
let particles = [];
let colorPalette;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  
  colorPalette = [
    color(65, 105, 225),
    color(30, 144, 255),
    color(0, 191, 255),
    color(135, 206, 235),
    color(173, 216, 230) 
  ];
  
  for (let i = 0; i < 1000; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  
  background(0);
}

function draw() {
  background(0, 10);
  
  let mouseVector = createVector(mouseX, mouseY);
  
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    let n = noise(p.x * noiseScale, p.y * noiseScale, frameCount * 0.01);
    let angle = TAU * n;
    
    p.add(cos(angle), sin(angle));
    
    if (!onScreen(p)) {
      p.set(random(width), random(height));
    }
    
    let colorIndex = floor(noise(p.x * colorNoiseScale, p.y * colorNoiseScale, frameCount * 0.005) * colorPalette.length);
    let c = colorPalette[colorIndex];
    
    let distance = p5.Vector.dist(p, mouseVector);
    let maxDistance = 200;
    let alpha = map(distance, 0, maxDistance, 255, 0, true);
    
    stroke(red(c), green(c), blue(c), alpha);
    strokeWeight(2);
    point(p.x, p.y);
  }
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function calculateTargetDate() {
    let currentDate = new Date();
    let targetDate = new Date(currentDate);
    targetDate.setMonth(currentDate.getMonth() + 3);
    targetDate.setDate(currentDate.getDate() + 5);
    return targetDate;
}

function updateCountdown() {
    let now = new Date().getTime();
    let targetDate = calculateTargetDate().getTime();
    let distance = targetDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("countdown").innerHTML = `${days}:${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "The event has started!";
    }
}

let countdownInterval = setInterval(updateCountdown, 1000);
