const text = "shrinking cities are these things that make you wonder...";
const delay = 75; // Milliseconds

let i = 0;
let displayText = "";

function type() {
  if (i < text.length) {
    displayText += text.charAt(i);
    document.getElementById("typewriter").innerHTML = displayText;
    i++;
    setTimeout(type, delay);
  }
}

window.onload = function() {
  type();
};
