const outputElement = document.getElementById('output');
const facts = [
    "Wist je dat licht 8 minuten en 19 seconden nodig heeft om van de zon naar de aarde te reizen?",
    "De meeste atomen bestaan voor 99,9999999999996% uit lege ruimte.",
    "Als je een auto de ruimte in zou kunnen rijden, zou je er met 100 km/u in minder dan een uur zijn.",
    "Neutronensterren zijn zo dicht dat een theelepel ervan 6 miljard ton zou wegen.",
    "Er zijn meer mogelijke zetten in een potje schaak dan er atomen zijn in het bekende universum.",
    "Tijd verloopt langzamer naarmate je sneller beweegt (tijdsdilatatie).",
    "Een dag op Venus duurt langer dan een jaar op Venus.",
    "Geluid kan zich niet voortplanten in een vacuüm (in de ruimte hoort niemand je gillen).",
    "Kwantumverstrengeling betekent dat deeltjes direct met elkaar verbonden kunnen zijn, ongeacht de afstand.",
    "Het universum dijt niet alleen uit, maar doet dat ook steeds sneller."
];

const jokes = [
    "Waarom ging de kip over de Möbiusband? Om aan dezelfde kant te komen!",
    "Er zijn 10 soorten mensen op de wereld: zij die binair begrijpen en zij die dat niet doen.",
    "Een neutron loopt een bar binnen en vraagt: 'Hoeveel kost een biertje?' De barman zegt: 'Voor jou? Geen lading!'",
    "Heisenberg en Schrödinger rijden in een auto. Ze worden aangehouden. De agent vraagt: 'Weet u hoe hard u reed?' Heisenberg: 'Nee, maar ik weet wel precies waar ik ben!' De agent kijkt in de kofferbak en zegt: 'Wist u dat hier een dode kat in ligt?' Schrödinger: 'Nu wel!'",
    "Wat zei de ene kwantumfysicus tegen de andere? 'Laten we afspreken, maar niet tegelijkertijd plaats en tijd bepalen.'",
    "Waarom kunnen natuurkundigen slecht verstoppertje spelen? Omdat goede spelers altijd gevonden worden!",
    "Wat is de favoriete snack van een atoom? Fission chips!",
    "Waarom vertrouwen atomen elkaar nooit? Omdat ze alles verzinnen (make up everything).",
    "Ik heb een nieuwe theorie over inertie, maar die komt maar niet van de grond.",
    "Wat zei de 0 tegen de 8? 'Leuke riem!'"
];

const bootSequence = [
    "INITIALIZING NERD-GO SYSTEM...",
    "LOADING PHYSICS KERNEL...",
    "MOUNTING JOKE DATABASE...",
    "CALIBRATING HUMOR SENSORS...",
    "ACCESS GRANTED.",
    "WELKOM BIJ DE TERMINAL VAN DE GROOTSTE NERD VAN NORTHGO COLLEGE.",
    "----------------------------------------------------------------",
    "Type 'help' voor een lijst met commando's."
];

let isTyping = false;

function typeText(text, speed = 30) {
    return new Promise(resolve => {
        isTyping = true;
        const p = document.createElement('div');
        outputElement.appendChild(p);
        
        let i = 0;
        function type() {
            if (i < text.length) {
                p.textContent += text.charAt(i);
                i++;
                outputElement.scrollTop = outputElement.scrollHeight;
                setTimeout(type, speed);
            } else {
                isTyping = false;
                resolve();
            }
        }
        type();
    });
}

async function runBootSequence() {
    for (const line of bootSequence) {
        await typeText(line, 20);
        await new Promise(r => setTimeout(r, 100));
    }
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

async function handleCommand(cmd) {
    const command = cmd.toLowerCase().trim();
    
    if (command === '') return;

    const cmdLine = document.createElement('div');
    cmdLine.textContent = `> ${cmd}`;
    cmdLine.style.color = '#fff';
    outputElement.appendChild(cmdLine);

    switch(command) {
        case 'help':
            await typeText("BESCHIKBARE COMMANDO'S:");
            await typeText("  weetje  - Krijg een willekeurig natuurkundig weetje");
            await typeText("  grapje  - Krijg een willekeurige natuurkundige grap");
            await typeText("  clear   - Maak het scherm leeg");
            await typeText("  info    - Over deze site");
            break;
        case 'weetje':
            await typeText(getRandomItem(facts));
            break;
        case 'grapje':
            await typeText(getRandomItem(jokes));
            break;
        case 'clear':
            outputElement.innerHTML = '';
            break;
        case 'info':
            await typeText("Gemaakt voor de grootste nerd van het Northgo College.");
            await typeText("Powered by HTML, CSS, JS en heel veel cafeïne.");
            break;
        default:
            await typeText(`Commando niet herkend: '${command}'. Type 'help' voor opties.`);
    }
    outputElement.scrollTop = outputElement.scrollHeight;
}

// Input handling
document.addEventListener('keydown', function(e) {
    if (isTyping) return;
    
    // We don't have a real input field to keep the mobile keyboard simple, 
    // but for desktop we can capture keys. 
    // For a better mobile experience, we might need a hidden input.
});

// Create a hidden input for typing
const hiddenInput = document.createElement('input');
hiddenInput.type = 'text';
hiddenInput.style.position = 'absolute';
hiddenInput.style.opacity = '0';
hiddenInput.style.top = '-1000px';
document.body.appendChild(hiddenInput);

document.addEventListener('click', () => {
    hiddenInput.focus();
});

// Keep focus
hiddenInput.addEventListener('blur', () => {
    setTimeout(() => hiddenInput.focus(), 10);
});

hiddenInput.addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        const cmd = hiddenInput.value;
        hiddenInput.value = '';
        await handleCommand(cmd);
    }
});

// Sync hidden input with visible cursor line
const userInputSpan = document.getElementById('user-input');

hiddenInput.addEventListener('input', () => {
    userInputSpan.textContent = hiddenInput.value;
});

// Initialize
runBootSequence();
