const cardObj = document.getElementsByClassName('card');

function clickCard() {
    console.log('You clicked a card');
}

function clickObj() {
    cardObj.addEventListener('click', function() {
        clickCard();
    });
}

clickObj();