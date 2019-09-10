const gameBoard = () => Array.from(document.getElementsByClassName('card'));
const allSame = (arr) => arr.every(cardEl => cardEl.innerText === arr[0].innerText && cardEl.innerText !== '');

//function clickCard() {
//    console.log('You clicked a card');
//}

const takeTurn = (index, letter) => grid()[index].innerText = letter;

const clickCard = (event) => {
    takeTurn(boxNumId(event.target), 'x');
    if(!checkForVictory())
    opponentTurn();
};

const cardListeners = () => gameBoard().forEach(cardEl => cardEl.addEventListener('click', clickCard));

cardListeners();


function playerTurn() {

};

function sequenceWin() {
    let victory = false;

    winningCombos.forEach(combo => {
        const board = gameboard();
        const sequence = [board[combo[0]], board[combo[1]], board[combo[2]], board[combo[3]], board[combo[4]]];
        if(allSame(sequence)) {
            victory = true;
            endGame(sequence);
        }
    });

    return victory;
};

