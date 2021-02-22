import '../../element/shrift/fonts.scss'

import './cards.scss'

import '../../blocks/find/find.scss'
import '../../blocks/find/find.js'

import '../../blocks/registration/registration.scss'
import '../../blocks/registration/registration.js'

import '../../blocks/hotel-number/hotel-number.scss'
import '../../blocks/hotel-number/hotel-number.js'

import '../../blocks/login/login.scss'
import '../../blocks/login/login.js'

import '../../blocks/room-search-icon/room-search-icon.scss'
import '../../blocks/room-search-icon/room-search-icon.js'

import '../../element/date-dropdown/date-dropdown.js'
import '../../element/date-dropdown/date-dropdown.scss'


let uiKitLogo = document.querySelectorAll('.ui-kit-logo-icon')

uiKitLogo.forEach(el => {
    el.src = require("../../element/images/ui-kit-logo.png");
});
