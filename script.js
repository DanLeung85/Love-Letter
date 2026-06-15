const envelope = document.getElementById('envelope');
const btn      = document.getElementById('openBtn');
const letter   = document.getElementById('letter');

function openEnvelope() {
  // Flip top flap
  envelope.classList.add('opened');
  // Slide envelope down off screen
  envelope.style.transform = 'translateY(100vh)';
  // Fade and disable button
  btn.disabled = true;
  // Slight delay then show letter centred on screen
  setTimeout(function() {
    letter.classList.add('show');
    letter.setAttribute('aria-hidden', 'false');
  }, 150);
}

btn.addEventListener('click', openEnvelope);
envelope.addEventListener('click', openEnvelope);
