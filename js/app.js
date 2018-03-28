/*All variables
 * Create a list that holds all of your cards
 */
const cardList = ["diamond", "diamond", "paper-plane-o", "paper-plane-o", "anchor", "anchor", "bolt", "bolt", "cube", "cube", "leaf", "leaf", "bicycle", "bicycle", "bomb", "bomb"];
const deckOfCards = document.querySelector('.deck');
const restart = document.querySelector('.restart');
//Popup message
const modal = document.querySelector('.modal');
const stars = document.querySelector('.stars');
const moves = document.querySelector('.moves');
const moveCounter = document.querySelector('.move-count');
const time = document.querySelector('.time');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let timer;
let resetTimer = 0;
//TODO: stores matched cards
let matchCards = [];
let finishGame = 0;


/* set up the event listener for a card. If a card is clicked:
* - display the card's symbol
*/
restart.addEventListener("click", addBoard); 
deckOfCards.addEventListener("click", openCard);
shuffle(cardList);
newBoard();

//start the game
function addBoard() {
	deckOfCards.innerHTML = "";
	shuffle(cardList);
	newBoard();
	matchTwoCards = [];
	finishGame = 0;
	moves.innerText = 0;
	resetTimer = 0;
	seconds.innerText = 0;
	minutes.innerText = 0;
	stopTime();
	newRaiting();
	resetModal();
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
