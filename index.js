let homeScore = document.getElementById("home")
let guestScore = document.getElementById("guest")

let guestCount = 0;
let homeCount = 0;

function guestOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}
function guestTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}
function guestThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}

function homeOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}
function homeTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function homeThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}

function newGame() {
    homeCount = 0
    guestCount = 0
    homeScore.textContent = homeCount
    guestScore.textContent = guestCount
    }