// slider//
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("okay", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " okay";
  setTimeout(showSlides, 6000); // Change image every 6 seconds
};

