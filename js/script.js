const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');

})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
var section1 = false;
var section2 = false;
var section3 = false;

function reveal() {
    
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        elementVisible = 0;
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      
    
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
  
      }
    }
  }
  reveal();
  window.addEventListener("scroll", reveal);

 