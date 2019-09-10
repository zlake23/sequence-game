const gameBoard = () => Array.from(document.getElementsByClassName('card'));

function clickCard() {
    console.log('You clicked a card');
}

const cardListeners = () => gameBoard().forEach(cardEl => cardEl.addEventListener('click', clickCard));

cardListeners();


function playerTurn() {

};

function sequenceWin() {

};

