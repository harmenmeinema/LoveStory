const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('i');
  heart.classList.add('fas', 'fa-heart', 'heart-icon');

  // Willekeurige positie en grootte
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  // Voeg hartje toe
  heartsContainer.appendChild(heart);

  // Verwijder na de animatie
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Start hartjesregen
setInterval(createHeart, 300);


function updateLoveTime() {
  const startDate = new Date("2025-02-14T22:00:00");
  const now = new Date();
  const diffMs = now - startDate;

  const seconds = Math.floor(diffMs / 1000) % 60;
  const minutes = Math.floor(diffMs / 1000 / 60) % 60;
  const hours = Math.floor(diffMs / 1000 / 60 / 60) % 24;
  const days = Math.floor(diffMs / 1000 / 60 / 60 / 24);

  const timeString = `${days} dagen, ${hours} uur, ${minutes} minuten en ${seconds} seconden`;

  // Update desktop-versie
  const desktopCounter = document.getElementById("time-counter");
  if (desktopCounter) {
    desktopCounter.textContent = timeString;
  }

  // Update mobiele versie
  const mobileCounter = document.getElementById("time-counter-mobile");
  if (mobileCounter) {
    mobileCounter.textContent = timeString;
  }
}

// Update elke seconde
setInterval(updateLoveTime, 1000);

// Roep het meteen ook 1x aan
updateLoveTime();





const button1 = document.getElementById('button1');  // "Ik houd meer van jou"
const button2 = document.getElementById('button2');  // "Hij houdt meer van mij"

button2.addEventListener('mouseenter', () => {
    // Genereer een willekeurige positie binnen de container (met een marge van de knop zelf)
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();

    const maxX = containerRect.width - button2.offsetWidth - 20; // 20px marge
    const maxY = containerRect.height - button2.offsetHeight - 20; // 20px marge

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Zet de nieuwe positie van de knop binnen de container
    button2.style.position = 'absolute';
    button2.style.left = `${randomX}px`;
    button2.style.top = `${randomY}px`;
});

const result = document.getElementById('result');
const resultContainer = document.querySelector('.result');

button1.addEventListener('click', () => {
  result.textContent = 'Goedzo schat, natuurlijk houd ik meer van jou! ❤️';
  resultContainer.style.display = 'block';
});

button2.addEventListener('click', () => {
  result.textContent = 'Hmm...Vooruit dan maar, cheater 😏';
  resultContainer.style.display = 'block';
});




