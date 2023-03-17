input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(2, 2, 128)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        index = 0
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(2, 2, 128)
        basic.pause(50)
        led.plotBrightness(2, 2, 162)
        basic.pause(50)
        led.plotBrightness(2, 2, 191)
        basic.pause(100)
        led.plotBrightness(2, 2, 255)
        basic.pause(100)
        led.plotBrightness(2, 2, 191)
        basic.pause(100)
        led.plotBrightness(2, 2, 162)
        basic.pause(50)
        led.plotBrightness(2, 2, 128)
        basic.pause(50)
        basic.clearScreen()
        basic.pause(500)
        index = 0
    }
})
basic.forever(function () {
	
})
