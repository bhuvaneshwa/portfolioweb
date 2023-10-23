const textElement = document.getElementById('text');
const texts = [
  'Full Stack Developer',
  'Freelancer'
];
let textIndex = 0;
let letterIndex = 0;

function typeText() {
  if (letterIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(typeText, 50); // Typing speed (adjust as needed)
  } else {
    setTimeout(eraseText, 1500); // Display each text for 1.5 seconds
  }
}

function eraseText() {
  if (letterIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(eraseText, 20); // Erasing speed (adjust as needed)
  } else {
    textIndex = (textIndex + 1) % texts.length; // Cycle through the texts
    setTimeout(typeText, 1000); // Pause between texts (adjust as needed)
  }
}

typeText();
