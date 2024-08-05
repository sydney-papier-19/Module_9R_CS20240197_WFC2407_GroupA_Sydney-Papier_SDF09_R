/*objects*/
let player = {
    name: "Sydney",
    chips: 200
}

let cards = [] /*an array to store the players cards*/
let sum = 0 /*the total value of the player's cards*/
let hasBlackJack = false /*a boolean indicating whether the player hasBlackJack*/ 
let isAlive = false /*a boolean indicating whether the game is still active*/
let message = ""  /*a string to display game messages*/

/*DOM Elements to display game info*/
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

/*The Math object */
function getRandomCard() {    /*returns a random card number from 1-11*/
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

/*this function makes sure the startGame btn from html works and calls on the renderGame function. */
function startGame() {    /*initializes the game*/
    isAlive = true
    /*deals two random cards to player and calculates the initial sum*/
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 
    renderGame() /*displays the game state*/
}

function renderGame() { /*updates the game display*/
    /*displays the players cards and sum*/
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
/*checks the sum and updates the message accordingly*/
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else { 
        message ="You're out of the game!"
        isAlive = false        
    }
     messageEl.textContent = message /*displays the game message*/
}

function newCard() {  /*deals a new card to the player*/
    /*checks if game is still active and if player doesn't have blackjack*/
    if (isAlive === true && hasBlackJack === false) {
 /*deals a new card and updates the sum and card array*/     
    let card = getRandomCard()    /*created a card variable*/ 
    sum += card   /*this adds the new card to the sum variable*/
    cards.push(card)   /*push array*/
    renderGame()    /*call renderGame() to update the display*/
    }
}