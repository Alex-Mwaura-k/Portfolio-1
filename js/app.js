
// Scroll back to top btn 
document.addEventListener("DOMContentLoaded", function() {
  const scrollButton = document.getElementById('scrollButton');
  const homeSection = document.getElementById('Home');

  // Initially hide the scroll button
  scrollButton.style.display = "none";

  window.onscroll = function() { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }

    // Check if at the "Home" section
    if (isElementInViewport(homeSection)) {
      scrollButton.style.display = "none";
    }
  }

  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});
//burger script
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector('nav .burger_btn');
  const nav = document.querySelector('nav .navlinks');
  const navlinks = document.querySelectorAll('nav .navlinks li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkFade 0.5s ease  ${index / 7 + 0.3}s backwards`;
      }
    });
    burger.classList.toggle('toggles');
  });
});
//Timely Greetings
var today = new Date() 
var curHr = today.getHours() 
if (curHr >= 0 && curHr < 6) { 
  document.getElementById("demo").innerHTML = 'Hi There!'; 
    } 
  else if (curHr >= 6 && curHr < 12) {
     document.getElementById("demo").innerHTML = 'Good Morning!'; 
    } 
  else if (curHr >= 12 && curHr < 17) { 
    document.getElementById("demo").innerHTML = 'Good Afternoon!'; 
    } 
  else { document.getElementById("demo").innerHTML = 'Good Evening!';
} 
//Auto type intro
var typed = new Typed('.element', {
  strings: ["Front-End Developer .", "Photographer .", "Graphic Designer ."],
  typeSpeed: 120,
  backSpeed: 50,
  loop: true
});
