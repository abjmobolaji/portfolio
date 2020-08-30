
/** JS Code For Hamburger Menu **/
/** Declaring Variables **/
const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
 
/** Toggle mobile menu **/
function toggleMenu() {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-bars\"></i>";
    } else {
        navbar.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=\"fas fa-times\"></i>";
    }
}
 
/** Event Listener **/
toggle.addEventListener("click", toggleMenu, false);


/** JS Code For Testimonials **/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activedot", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activedot";
}