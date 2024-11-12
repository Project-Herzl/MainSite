// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');

  // Add click listener to close the menu when clicking outside
  if (menu.classList.contains('show')) {
      document.addEventListener('click', closeMenuOnClickOutside);
  } else {
      document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

// Function to close the menu when clicking outside of it
function closeMenuOnClickOutside(event) {
  const menu = document.getElementById('menu');
  const menuToggle = document.querySelector('.menu-toggle');
  
  // If the clicked element is not inside the menu or the toggle button, close the menu
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('show');
      document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

particlesJS('particles-js', {
  "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 }},
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }},
      "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 }},
      "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 40, "size_min": 0.1 }},
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
      "move": { "enable": true, "speed": 1, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
      "detect_on": "window",
      "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" }
      },
      "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 }}
  }
});
