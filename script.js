const revealButton = document.querySelector('.reveal-button');
const hiddenNote = document.querySelector('.hidden-note');

revealButton.addEventListener('click', () => {
  const isOpen = revealButton.getAttribute('aria-expanded') === 'true';
  revealButton.setAttribute('aria-expanded', String(!isOpen));
  revealButton.querySelector('span').textContent = isOpen ? '+' : '−';
  revealButton.childNodes[0].textContent = isOpen ? 'Abrir a carta ' : 'Carta aberta ';
  hiddenNote.classList.toggle('visible', !isOpen);
  hiddenNote.setAttribute('aria-hidden', String(isOpen));
});