// When first loading the window (Page, index.html) Fading in effect in combo with CSS for a nice opacity transition for the chosen elements.
// Also added to window.onload is a typewriter effect created with javascript on the topline paragraph.

window.onload = function () {
  document.body.className += " loaded";
  typeWriter();
};

// Typing effect for topline text

var i = 0;
var toplineText =
  "I am web developing from the inside and out.\nSemantic, responsive and functional."; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < toplineText.length) {
    document.getElementById("typewriter").innerHTML += toplineText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// JQUERY script to dissolve (fade out) the element i want on scroll down. In this case the "to-portfolio element"

$(window).scroll(function () {
  $(".bar-under-banner").css("opacity", 1 - $(window).scrollTop() / 400);
});
