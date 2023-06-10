const emailDesc = document.getElementById("email-description")

// Check the current media query status on page load
if (window.matchMedia("(min-width: 810px)").matches) {
  emailDesc.textContent = "Get in touch 👉";
} else {
  emailDesc.textContent = "Get in touch 👇";
}

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 810px)").matches) {
    emailDesc.textContent = "Get in touch 👉";
  } else {
    emailDesc.textContent = "Get in touch 👇";
  }
});


// Typescript effect

let typed = new Typed(".auto-type", {
  strings: ["Bonjour!", "¡Hola!", "Ciao!", "こんにちは!", "!مرحبًا", "안녕하세요!" ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})
