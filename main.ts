input.onButtonPressed(Button.A, function () {
    radio.sendString("left")
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
	
})
