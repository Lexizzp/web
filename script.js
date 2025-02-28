// Archivo script.js

let messageIndex = 1;
const messages = [
    "Eres mi razón para sonreír cada día 😊",
    "Tu luz ilumina mi mundo 🌟",
    "Gracias por ser quien eres 💖",
    "Siempre encuentro paz en tu abrazo 🤗",
    "La vida es más dulce a tu lado 🍯",
    "Nunca dejes de brillar ✨",
    "Me haces feliz más de lo que imaginas 😊",
    "Mi corazón late por ti 💓"
];

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    // Abrir sobre
    envelope.classList.add('open');
    letter.classList.remove('hidden');
    setTimeout(() => {
        letter.style.opacity = 1;
    }, 300); // Añadir un pequeño retraso para la animación
}

function nextMessage() {
    const messageContainer = document.getElementById('message');
    const counter = document.getElementById('counter');
    
    messageIndex = (messageIndex % messages.length) + 1;
    
    messageContainer.textContent = messages[messageIndex - 1];
    counter.textContent = `Mensaje ${messageIndex}/8`;
}

function resetEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    envelope.classList.remove('open');
    letter.style.opacity = 0;
    
    setTimeout(() => {
        letter.classList.add('hidden');
        messageIndex = 1;
        // Restablecer el primer mensaje al reiniciar
        nextMessage();
    }, 600); // Asegura que la animación se complete antes de ocultar la carta
}

// Asegurarse de que el script funcione correctamente al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que el primer mensaje aparezca al cargar la página
    nextMessage();
});
// Símbolos flotantes mejorados
const floatingSymbols = ['✨', '🦋', '🌟', '🌸', '🍀', '⭐', '🌺'];

function createFloatingItem() {
    const item = document.createElement('div');
    item.className = 'float-item';
    item.innerHTML = floatingSymbols[Math.floor(Math.random() * floatingSymbols.length)];
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDuration = Math.random() * 3 + 4 + 's';
    document.getElementById('float-container').appendChild(item);
    
    setTimeout(() => {
        item.remove();
    }, 7000);
}

// Crear nubes mejoradas
function createCloud() {
    const cloud = document.createElement('div');
    cloud.className = 'cloud';
    cloud.style.width = Math.random() * 150 + 100 + 'px';
    cloud.style.height = Math.random() * 40 + 25 + 'px';
    cloud.style.top = Math.random() * 70 + '%';
    
    const duration = Math.random() * 20 + 25;
    cloud.style.animation = `cloud-animation ${duration}s linear infinite`;
    
    document.getElementById('clouds-container').appendChild(cloud);
    
    setTimeout(() => {
        cloud.remove();
    }, duration * 1000);
}

// Crear estrellas de fondo
function createStars(count) {
    const container = document.getElementById('stars-container');
    for(let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}

// Crear burbujas decorativas
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 40 + 20;
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = Math.random() * 100 + 'vw';
    bubble.style.top = Math.random() * 100 + 'vh';
    
    document.getElementById('bubbles-container').appendChild(bubble);
    
    setTimeout(() => bubble.remove(), 8000);
}

// Crear cintas decorativas
function createRibbons() {
    const container = document.getElementById('ribbons-container');
    const positions = [20, 40, 60, 80];
    
    positions.forEach(pos => {
        const ribbon = document.createElement('div');
        ribbon.className = 'ribbon';
        ribbon.style.width = '3px';
        ribbon.style.left = pos + '%';
        ribbon.style.top = Math.random() * 50 + 25 + '%';
        ribbon.style.transform = `rotate(${Math.random() * 45 - 22.5}deg)`;
        container.appendChild(ribbon);
    });
}

// Inicializar todos los elementos
document.addEventListener('DOMContentLoaded', () => {
    // Crear estrellas iniciales
    createStars(50);
    
    // Crear elementos flotantes periódicamente
    setInterval(createFloatingItem, 600);
    
    // Crear nubes periódicamente
    setInterval(createCloud, 8000);
    
    // Crear burbujas periódicamente
    setInterval(createBubble, 3000);
    
    // Crear algunas nubes iniciales
    for(let i = 0; i < 6; i++) {
        createCloud();
    }
    
    // Crear cintas decorativas
    createRibbons();
    
    // Crear burbujas iniciales
    for(let i = 0; i < 10; i++) {
        createBubble();
    }
});