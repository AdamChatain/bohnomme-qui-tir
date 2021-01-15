input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . # # # .
        . . . # .
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . # .
        # . # # .
        . . . # .
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . # .
        . . # # .
        . . . # .
        . . . # .
        . . # . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . . .
        . # # # .
        . # . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # # . #
        . # . . .
        . # . . .
        # . # . .
        `)
    basic.showLeds(`
        . # . . .
        . # # . .
        . # . . .
        . # . . .
        # . # . .
        `)
})
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    . # . # .
    `)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.pause(500)
})
