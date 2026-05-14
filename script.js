var currentIndex = 0;
var slides = document.getElementsByClassName("slide");
var dots = [];
var interval = 10000;
var timer;

// Show slide
function showSlide(index) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].className = "slide";
    dots[i].className = "dot";
  }

  slides[index].className = "slide active";
  dots[index].className = "dot active";
}

// Next / Prev
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// Create dots
function createDots() {
  var container = document.getElementById("dots");

  for (var i = 0; i < slides.length; i++) {
    (function(i) {
      var dot = document.createElement("span");
      dot.className = "dot";
      dot.onclick = function() {
        currentIndex = i;
        showSlide(currentIndex);
        restartTimer();
      };
      container.appendChild(dot);
      dots.push(dot);
    })(i);
  }
}

// Auto slide
function startTimer() {
  timer = setInterval(nextSlide, interval);
}

function restartTimer() {
  clearInterval(timer);
  startTimer();
}

// Init
window.onload = function() {
  createDots();
  showSlide(currentIndex);
  startTimer();

  document.getElementById("next").onclick = nextSlide;
  document.getElementById("prev").onclick = prevSlide;

  // Pause on hover
  document.getElementById("banner").onmouseover = function() {
    clearInterval(timer);
  };

  document.getElementById("banner").onmouseout = function() {
    startTimer();
  };
}
function enableVideo() {
  var obj = document.getElementById("h1");
  var btn = document.getElementById("playBtn");

  // Prevent reloading if already loaded
  if (obj.getAttribute("data") === "videos/h1.mp4") {
    return;
  }

  // Set BOTH data and param src (important for compatibility)
  obj.setAttribute("data", "videos/h1.mp4");

  var param = obj.getElementsByTagName("param")[0];
  if (param) {
    param.setAttribute("value", "videos/h1.mp4");
  }

  // Hide button after clicking
  btn.style.display = "none";
}

// ===== Dark Mode Toggle =====
function toggleDarkMode() {
  var body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    try {
      localStorage.setItem("theme", "light");
    } catch (e) {}
  } else {
    body.classList.add("dark");
    try {
      localStorage.setItem("theme", "dark");
    } catch (e) {}
  }
}

// ===== Load Saved Theme (SAFE) =====
function loadTheme() {
  try {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  } catch (e) {}
}

// Run AFTER page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadTheme);
} else {
  loadTheme();
}

