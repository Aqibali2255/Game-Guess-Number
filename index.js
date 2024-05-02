let randomNumber = Math.round(Math.random() * 10 + 10);
// console.log(randomNumber);
let submit = document.querySelector('#submit')
let userinput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHigh = document.querySelector('.lowOrHigh')
let startover = document.querySelector('.resultparas')


let p = document.createElement('p')

let prevGuess = []
let numGuess = 2
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        let guess = parseInt(userinput.value)
        // console.log(guess);

        validateGuess(guess)
    })
}


function validateGuess(guess) {  // usinmg for cheching valid guess meant that not a Alphabetics or others as this

    if (isNaN(guess)) {
        alert('Please Enter a valid numeric number');
    }

    if ((guess < 1)) {
        alert('Please Enter a valid Greater than 1 number');
    }

    if ((guess > 100)) {
        alert('Please Enter a valid Less than 100 number');
    } else {
        prevGuess.push(guess)

        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over : Random numnber was ${randomNumber} `)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



function checkGuess(guess) {   // using for check number less than or greater then given conditions

    if (guess === randomNumber) {
        displayMessage(`You guessed it Right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is Toooo low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is Toooo High`)

    }
}

function displayGuess(guess) { // update the previous Guess   and next Remaining Guess
    userinput.value = '';
    guessSlot.innerHTML += `${guess} ,`;
    numGuess++;
    remaining.innerHTML = `${12 - numGuess}`;
}

function displayMessage(message) {  // using for pass the message to LoworHigh

    lowOrHigh.innerHTML = `<h2> ${message}</h2>`
}

function endGame() {
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startover.appendChild(p)
    playGame = false
    newGame();
}


function newGame() {
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = Math.round(Math.random() * 10 + 10);

        prevGuess = []
        numGuess = 2
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${12 - numGuess}`;
        userinput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame = true

    })


}

