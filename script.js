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
// Terminal Logic
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

const jokes = [
    "Waarom kunnen natuurkundigen zo slecht koken? Omdat ze de tijd vergeten als ze de ruimte bestuderen.",
    "Er zijn 10 soorten mensen: zij die binair begrijpen en zij die dat niet doen.",
    "Een neutron loopt een bar binnen en vraagt: 'Hoeveel kost een biertje?' De barman zegt: 'Voor jou? Geen lading.'",
    "Wat zei de ene kwantumfysicus tegen de andere? 'Ik weet niet waar ik ben, maar ik weet wel precies hoe snel ik daar niet ben.'",
    "Heisenberg wordt aangehouden door de politie. De agent vraagt: 'Weet u wel hoe hard u reed?' Heisenberg antwoordt: 'Nee, maar ik weet wel precies waar ik ben!'",
    "Waarom vertrouwen atomen elkaar nooit? Ze verzinnen alles!",
    "Wat is de favoriete snack van een computer? Microchips.",
    "Waarom ging de computer naar de dokter? Hij had een virus."
];

const facts = [
    "Licht doet er ongeveer 8 minuten en 20 seconden over om van de zon naar de aarde te reizen.",
    "Een theelepel neutronenster weegt ongeveer 6 miljard ton.",
    "Als je in een zwart gat zou vallen, zou je uitgerekt worden als spaghetti (spaghettificatie).",
    "De meeste atomen in je lichaam zijn gemaakt in sterren die miljarden jaren geleden zijn ontploft.",
    "Water zet uit als het bevriest, wat vrij uniek is voor een vloeistof.",
    "De temperatuur van de bliksem is vijf keer heter dan het oppervlak van de zon.",
    "In de kwantummechanica kunnen deeltjes op twee plekken tegelijk zijn (superpositie).",
    "Het universum dijt nog steeds uit, en steeds sneller."
];

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value.trim().toLowerCase();
        processCommand(command);
        terminalInput.value = '';
    }
});

function processCommand(cmd) {
    addToOutput(`[root@nerd-go.nl ~]$ ${cmd}`);

    if (cmd === 'help') {
        addToOutput("Beschikbare commando's:\n  - grapje: Laat een willekeurige grap zien\n  - weetje: Laat een willekeurig weetje zien\n  - clear: Maak het scherm leeg\n  - help: Toon dit menu");
    } else if (cmd === 'grapje') {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        addToOutput(randomJoke);
    } else if (cmd === 'weetje') {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        addToOutput(randomFact);
    } else if (cmd === 'clear') {
        terminalOutput.innerHTML = "Welkom in de Nerd-Go Terminal.<br>Type 'help' voor een lijst met commando's.<br><br>";
    } else if (cmd === '') {
        // Do nothing
    } else {
        addToOutput(`Commando niet gevonden: ${cmd}. Type 'help' voor hulp.`);
    }
    
    // Scroll to bottom
    const terminalBox = document.querySelector('.terminal-box');
    terminalBox.scrollTop = terminalBox.scrollHeight;
}

function addToOutput(text) {
    const div = document.createElement('div');
    div.textContent = text;
    terminalOutput.appendChild(div);
}

console.log("System Ready.");
