const cards = document.getElementsByClassName('flipper');
const cont = document.getElementsByClassName('container')[0];

let images = ['champ1', 'champ2', 'champ3', 'champ4', 'champ5']
images.push(...images);
let check = [];
cont.addEventListener('click', elem => cardFlip(elem));

function cardsAdd(elem) {
  cont.innerHTML += `<div class="flip-container"><div class="flipper"><div class="front"><img src="./img/backCard.jpg" /></div><div class="back"><h1><img src="./img/${elem}.png "</h1></div></div></div>`
}

images.forEach(elem => cardsAdd(elem));
function cardFlip(elem) {
  let target = elem.target;
  while (target != this) {
  if (Array.from(cards).some(card => card == target)) {
    target.classList.toggle("toFlip");
    check.push(target.children[0]);
    if(check.length == 2) {

    }
    return;
  }
  target = target.parentNode;
}}
function checkEqual() {
  if (check[0] == check[1]){
    
  }
}
