import './form-elements.scss'
import '../../element/buttons/buttons.scss'
import '../../element/checkbox-buttons/checkbox-buttons.scss'
import '../../element/shrift/fonts.scss'
import '../../element/radio-button/radio-button.scss'
import '../../element/toggle/toggle.scss'
import $ from 'jquery';
import 'jquery-ui';
//import 'jquery-ui-slider';
import '../../element/like-buttons/like-buttons.js'
import '../../element/like-buttons/like-buttons.scss'
import '../../element/rate-button/rate-button.scss'
import '../../element/comfort-icons/comfort-icons.scss'
import '../../element/rich-checkbox-button/rich-checkbox-button.scss'
import '../../element/expandable-checkbox/expandable-checkbox.js'
import '../../element/expandable-checkbox/expandable-checkbox.scss'
import '../../element/dropdown/dropdown.scss'
import '../../element/dropdown/dropdown.js'

import '../../element/date-dropdown/date-dropdown.js'
import '../../element/date-dropdown/date-dropdown.scss'

import '../../element/dropdown-room/dropdown-room.scss'
import '../../element/dropdown-room/dropdown-room.js'
import '../../element/range-slider/range-slider.js'
import '../../element/range-slider/range-slider.scss'

import '../../element/pagination/pagination.js'
import '../../element/pagination/pagination.scss'


import '../../element/text-fields/text-fields.js'
import '../../element/text-fields/text-fields.scss'


import '../../element/bullet-list/bullet-list.scss'



import '../../element/comment/comment.js'
import '../../element/comment/comment.scss'





global.jQuery = $;
global.$ = $;

let uiKitLogo = document.querySelectorAll('.ui-kit-logo-icon')

uiKitLogo.forEach(el => {
    el.src = require("../../element/images/ui-kit-logo.png");
});

