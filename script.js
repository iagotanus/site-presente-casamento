const revealButton = document.querySelector('.reveal-button');
const hiddenNote = document.querySelector('.hidden-note');

revealButton.addEventListener('click', () => {
  const isOpen = revealButton.getAttribute('aria-expanded') === 'true';
  revealButton.setAttribute('aria-expanded', String(!isOpen));
  revealButton.querySelector('span').textContent = isOpen ? '+' : '−';
  hiddenNote.classList.toggle('visible', !isOpen);
  hiddenNote.setAttribute('aria-hidden', String(isOpen));
});