import '../../element/date-dropdown/date-dropdown.scss'
import '../../element/dropdown/dropdown.scss'
import '../../element/buttons/buttons.scss'

import '../../element/date-dropdown/date-dropdown.js'
import '../../element/dropdown/dropdown.js'
import '../../element/shrift/fonts.scss'


let daysValue = document.querySelector('.hotel-number-block' + ' .hotel-number-first-price')
let daysValue1 = document.querySelector('.hotel-number-block')
let daysVal = document.querySelector('.hotel-number-block' + ' .hotel-number-date' + ' .date-dropdown-block' + ' .enter-date')
//.hotel-number-first-price

daysValue1.onclick = function () {
    //alert(daysVal.val)
    daysValue.textContent = `9 990₽ x ${daysVal.val} суток`

}

//alert(daysValue.textContent)