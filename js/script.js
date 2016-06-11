// TIME NODES

var clockNode = document.querySelector('#clock')
var hourNode = document.querySelector('#hours')
var minuteNode = document.querySelector('#minutes')
var secondNode = document.querySelector('#seconds')
var backgroundNode = document.querySelector('#clockBody')

// COLOR NODES

var colorNode = document.querySelector('#hexColor')
var redNode = document.querySelector ('#red')
var greenNode = document.querySelector('#green')
var blueNode = document.querySelector('#blue')

var currentTimeAndColor = function() {

    //  TIME CLOCK

    var d = new Date()
    var currentHour = d.getHours()
    var currentMinute = d.getMinutes()
    var currentSecond = d.getSeconds()

    if(currentHour > 12) {
        currentHour = currentHour - 12
    }

    if(currentHour < 10) {
        currentHour = '0' + currentHour
    }

    if(currentMinute < 10) {
        currentMinute = '0' + currentMinute
    }

    if(currentSecond < 10) {
        currentSecond = '0' + currentSecond
    }

    hourNode.innerHTML = currentHour + ':'
    minuteNode.innerHTML = currentMinute + ':'
    secondNode.innerHTML = currentSecond

    // COLOR CLOCK

    var hourNumber = parseInt(currentHour) + 150
    var minuteNumber = parseInt(currentMinute) + 150
    var secondNumber = parseInt(currentSecond) + 150


    var hexHourInner = hourNumber.toString(16)
    var hexMinuteInner = minuteNumber.toString(16)
    var hexSecondInner = secondNumber.toString(16)
    redNode.innerHTML = hexHourInner + ':'
    greenNode.innerHTML = hexMinuteInner + ':'
    blueNode.innerHTML = hexSecondInner

    // OUTER GRADIENT

    var hexHourOuter =  currentHour.toString(16)
    var hexMinuteOuter = currentMinute.toString(16)
    var hexSecondOuter = currentSecond.toString(16)


    // BACKGROUND COLOR


    var innerBackgroundColor = '#' + hexHourInner + hexMinuteInner + hexSecondInner
    var outerBackgroundColor = '#' + hexHourOuter + hexMinuteOuter + hexSecondOuter


    backgroundNode.style.background = 'radial-gradient(circle, ' + innerBackgroundColor + ' , ' + outerBackgroundColor + ')'

}

window.setInterval(currentTimeAndColor, 1000)
