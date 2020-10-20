input.onButtonPressed(Button.A, function () {
    radio.sendString("ali")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
/**
 * Zwei Micro:bits "reden" miteinander!
 * 
 * Auf beiden Micro:bits kann man Sender und Empfänger installieren - also beide enthalten das gleiche Programm.
 */
radio.setGroup(99)
