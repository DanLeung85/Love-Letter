const envelope = document.getElementById("envelope");
const btn = document.getElementById("openBtn");
const letter = document.getElementById("letter");

const confettiColors = [
  "#ff7aac",
  "#ff5a92",
  "#ffb3d1",
  "#e63e6d",
  "#fbd3e3",
  "#b1315b",
  "#ffffff",
  "#f7b8cc",
];

function launchConfetti() {
  const count = 100;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.classList.add("confetti-piece");

      // Alternate launching from left and right sides
      const fromLeft = Math.random() < 0.5;
      el.style.left = fromLeft
        ? `${Math.random() * 40}vw` // left side
        : `${70 + Math.random() * 30}vw`; // right side

      el.style.top = `${Math.random() * 40}vh`; // varies vertically
      el.style.background =
        confettiColors[Math.floor(Math.random() * confettiColors.length)];
      el.style.width = `${6 + Math.random() * 20}px`;
      el.style.height = `${10 + Math.random() * 15}px`;
      el.style.animationDuration = `${0.7 + Math.random() * 1.2}s`;
      el.style.animationDelay = `${Math.random() * 0.6}s`;

      document.body.appendChild(el);

      // Remove from DOM after animation
      setTimeout(() => el.remove(), 3500);
    }, i * 20);
  }
}

function openEnvelope() {
  envelope.classList.add("opened");
  envelope.style.transform = "translateY(100vh)";
  btn.disabled = true;
  setTimeout(() => {
    letter.classList.add("show");
    letter.setAttribute("aria-hidden", "false");
    launchConfetti();
  }, 150);
}

btn.addEventListener("click", openEnvelope);
envelope.addEventListener("click", openEnvelope);
