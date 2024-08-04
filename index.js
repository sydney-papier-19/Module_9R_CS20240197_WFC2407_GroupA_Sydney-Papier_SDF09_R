let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard] //array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

/*this function makes sure the startGame btn from html works and calls
on the renderGame function. */
function startGame() {
    renderGame() 
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
     messageEl.textContext = message
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 6 /*created a card variable*/ 
    sum += card /*this adds the new card to the sum variable*/
    renderGame() /*call renderGame()*/
}