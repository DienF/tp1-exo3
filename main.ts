let x = randint(0, 4)
let y = 0
basic.forever(function () {
    led.plot(x, y)
    basic.pause(1000)
    led.plotBrightness(x, y, 170)
    y += 1
    led.plot(x, y)
    basic.pause(1000)
    led.plotBrightness(x, y, 170)
})
