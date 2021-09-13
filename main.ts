input.onButtonPressed(Button.A, function () {
    playerOne = playerOne + 1
})
input.onButtonPressed(Button.B, function () {
    playerTwo = playerTwo + 1
})
let timer = 0
let playerTwo = 0
let playerOne = 0
let maxTime = 5
basic.forever(function () {
    if (timer <= maxTime) {
        timer = timer + 1
        basic.showNumber(timer)
    } else {
        if (playerOne > playerTwo) {
            basic.showString("p1 wins")
        } else {
            basic.showString("p2 wins")
        }
        timer = 0
        basic.pause(200)
    }
})
