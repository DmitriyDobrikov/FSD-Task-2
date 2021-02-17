import '../../element/date-dropdown/date-dropdown.scss'
import '../../element/dropdown/dropdown.scss'
import '../../element/buttons/buttons.scss'

import '../../element/date-dropdown/date-dropdown.js'
import '../../element/dropdown/dropdown.js'
import '../../element/shrift/fonts.scss'


let daysValueFirstPrice = document.querySelector('.hotel-number-block' + ' .hotel-number-first-price')
let hotelNumberBlock = document.querySelector('.hotel-number-block')
let daysValuePriceLast = document.querySelector('.hotel-number-block' + ' .hotel-number-price')
let hotelNumberPriceResult = document.querySelector('.hotel-number-block' + ' .hotel-number-days-price-result')
let daysVal = document.querySelector('.hotel-number-block' + ' .hotel-number-date' + ' .date-dropdown-block' + ' .enter-date')


function spaceAdd(string) {
    if (string.length > 3) {
        return string.substring(0, string.length - 3) + " " + string.substr(-3, 3) + "₽"
    }else {
        return string + "₽"
    }
}



hotelNumberBlock.onclick = function () {
    if (daysVal.val != undefined) {
        daysValueFirstPrice.textContent = `9 990₽ x ${daysVal.val} суток`
        hotelNumberPriceResult.textContent = spaceAdd(daysVal.val * 9990 + '')
        daysValuePriceLast.textContent = spaceAdd(daysVal.val * 9990 + 300 - 2179 + '')
    }
}

