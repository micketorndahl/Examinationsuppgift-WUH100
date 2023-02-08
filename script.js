// When first loading the window (Page, index.html) Fading in effect in combo with CSS for a nice opacity transition for the chosen elements.

window.onload = function () {
  document.body.className += " loaded";
};

// JQUERY script to dissolve (fade out) the element i want on scroll down. In this case the "bar-under-banner element"

$(window).scroll(function () {
  $(".bar-under-banner").css("opacity", 1 - $(window).scrollTop() / 400);
});

// TYPEWRITER EFFECT START

// Creating a constant variable named textDisplay to store the typewriter-text element grabbed by its id so it now can be used in the js-file.
const textDisplay = document.getElementById("typewriter-text");

// Storing the sentences that I want to appear in the typewriter-effect in an array.
const phrases = [
  "Hello my name is Mikael.",
  "I am web developing from the inside and out.",
  "Semantic.",
  "Responsive.",
  "and Functional.",
];

// Creating a function with nested loops. The outer loop is looping over the sentences to put them out by one by one whilst the inner loop is looping over the letters that is contained in that chosen sentence to put out the letters like a typewriter.

let i = 0; // Outer loop set to 0 as default start for looping.
let j = 0; // Inner loop set to 0 as default start for looping.
let currentPhrase = []; // An empty array that the letters will be pushed to.
let isDeleting = false; // False as default for isDeleting to switch over to true when the letters of a sentence is at the end and the eraser should start.
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join(""); // Whatever whats in the currentPhrase will be displayed using innerHTML. Using the join js method to join the letters together without the commas.
  if (i < phrases.length) {
    // If statement to see if i is less than the length of the phrases. If the condition is true then do the things inside the block.

    // If statement to see if its not deleting and j is less than the length of the phrase (the letters). If the condition is true then do the things inside the block.
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]); // Pushing the current letter (j) from the current sentence (i) in to the currentPhrase array so it can be displayed with innerHTML.
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    // If statement to see if isDeleting is true and j is less or equal to the length of phrases[i]
    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]); // Popping(Removing) the current letter one by one down to nothing when its at the end of a sentence.
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    // If the first sentence is completed we want to go on the next one by comparing j to the current phrase length if the condition is true we go on the the next sentence by incrementing i.
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    // When the letter is at zero (sentence done and letters removed) we use i++ to increment the loop for the next sentence
    if (isDeleting && j === 0) {
      currentPhrase = []; // Starting an empty array in case its anything left over.
      isDeleting = false; // Setting isDeleting to false since theres nothing to erase.
      i++; // go on to the next phrase.
      if (i == phrases.length) {
        // if its at the end of the phrases put i back to 0 so it starts all over again.
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (200 - 100) + 100;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);

  // Setting it to loop over the letters together with "j++" for the next letter in order by every 500ms.
}

// TYPEWRITER EFFECT END

loop();
