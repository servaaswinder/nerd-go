// Konami Code
const konamiCode = [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "b", "a"
];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonami();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonami() {
    const statusElement = document.getElementById('konami-status');
    statusElement.textContent = "ENABLED";
    statusElement.style.color = "#0f0";
    alert("KONAMI CODE ACTIVATED! UNLIMITED LIVES (NOT REALLY).");
    // Add some fun effect here if desired
    document.body.style.textShadow = "0 0 10px #fff";
}

// Noodknop
const noodknop = document.getElementById('noodknop');
noodknop.addEventListener('click', () => {
    if (confirm("WEET JE ZEKER DAT JE OP DE NOODKNOP WILT DRUKKEN? DIT WIST JE BROWSERGESCHIEDENIS NIET!")) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll as a placeholder/joke
    }
});

// Optional: Simple typing effect for the prompt cursor only?
// Actually, the CSS animation handles the blinking cursor. 
// We can add a small boot effect if we want, but the image shows a static state.
console.log("System Ready.");
