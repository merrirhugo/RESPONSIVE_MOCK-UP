var Index = 1;
showSlides(Index);

function NextSlides(i) {
  showSlides((Index += i));
}

function OnSlide(i) {
  showSlides((Index = i));
}

function showSlides(i) {
  var i;
  var slides = document.getElementsByClassName("slider_img");
  var circles = document.getElementsByClassName("circle");
  if (i > slides.length) {
    Index = 1;
  }
  if (i < 1) {
    Index = slides.length;
  }
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  for (j = 0; j < circles.length; j++) {
    circles[j].className = circles[j].className.replace(" active", "");
  }
  slides[Index - 1].style.display = "block";
  circles[Index - 1].className += " active";
}
