const cards = document.getElementsByClassName('flipper');
const cont = document.getElementsByClassName('container')[0];

cont.addEventListener('click', elem => cardFlip(elem));

function cardFlip(elem) {
  let target = elem.target;
  while (target != this) {
  if (Array.from(cards).some(card => card == target)) {
    target.classList.toggle("toFlip");
    return;
  }
  target = target.parentNode;
}}
