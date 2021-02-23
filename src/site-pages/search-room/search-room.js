import './search-room.scss'
import '../../element/shrift/fonts.scss'


import '../../blocks/header-cite/header-cite.scss'
import '../../blocks/header-cite/header-cite.js'

import '../../blocks/footer-widgets/footer-widgets.scss'
import '../../blocks/footer-widgets/footer-widgets.js'

import '../../element/text-fields/text-fields.scss'
//

import '../../element/range-slider/range-slider.js'
import '../../element/range-slider/range-slider.scss'


import '../../element/dropdown/dropdown.scss'
import '../../element/dropdown/dropdown.js'

import '../../element/date-dropdown/date-dropdown.js'
import '../../element/date-dropdown/date-dropdown.scss'

import '../../element/checkbox-buttons/checkbox-buttons.scss'

import '../../element/rich-checkbox-button/rich-checkbox-button.scss'

import '../../element/dropdown-room/dropdown-room.scss'
import '../../element/dropdown-room/dropdown-room.js'

import '../../element/expandable-checkbox/expandable-checkbox.js'
import '../../element/expandable-checkbox/expandable-checkbox.scss'



import '../../blocks/room-search-icon/room-search-icon.scss'
import '../../blocks/room-search-icon/room-search-icon.js'

// import '../../element/rate-button/rate-button.scss'

import '../../element/pagination/pagination.js'
import '../../element/pagination/pagination.scss'




let linkToRegistrationReg = document.querySelector('#button-big-reg')
let linkToRegistrationSign = document.querySelector('.button-smole-border-header')

linkToRegistrationReg.onclick = function () {
    window.location='./registration.html'
}

linkToRegistrationSign.onclick = function () {
    window.location='./registration.html'
}


// let roomSearchIcon = document.querySelectorAll('.room-search-icon-image')

// roomSearchIcon.forEach(element => {
//     element.src = require(`../../element/images/twitter.png`);
//     // element.src = require(`../../element/images/twitter.png`);
//     alert(element)
// });
