/*
 * Create a list that holds all of your cards
 */
let cards = document.getElementsByClassName('card');

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//convert list into array from https://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript
let cardsArray = [];

function toArray(obj) {
  for (let i = 0; i < obj.length; i++) { 
    cardsArray[i] = obj[i];
  }
  return cardsArray;
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

document.body.onload = startGame();

function startGame() {
	for (var i = 0; i < cards.length; i++){
		cards[i].classList.remove('show', 'open', 'match');
	}
	cardsArray = shuffle(cardsArray);
	cardsArray.forEach(function(e) {
        deck.appendChild(e);
    })
}

//set up the event listener for a card
const deck = document.querySelector('.deck');
deck.addEventListener('click', clickedCard);

//if a card is clicked
function clickedCard () {
	displaySymbol ();
	addToArray ();
	moveCounter();
	if (openedCards.length === 2) {
		if (openedCards[0].type === openedCards[1].type) {
			match();
		} else {
			unmatch ();
		}
	}
}

//display card's symbol
function displaySymbol () {
	for (let i = 0; i < cardsArray.length; i++) {
		cardsArray[i].classList.add('open', 'show');
	}
}

const restart = document.querySelector('.restart');
restart.addEventListener('click',startGame);

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
