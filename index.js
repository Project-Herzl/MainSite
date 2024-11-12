function toggleMenu() {
    document.getElementById('menu').classList.toggle('show');
  }
  
  particlesJS('particles-js', {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }},
      "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 }},
      "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 40, "size_min": 0.1 }},
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 }}
    },
    "retina_detect": true
  });
  
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(e) {
        e.preventDefault(); // Prevent right-click context menu
    });
});