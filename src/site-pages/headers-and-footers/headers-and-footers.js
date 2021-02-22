import './headers-and-footers.scss'
import '../../element/shrift/fonts.scss'
import '../../blocks/header-cite/header-cite.scss'
import '../../blocks/header-cite/header-cite.js'

import '../../blocks/footer-widgets/footer-widgets.scss'
import '../../blocks/footer-widgets/footer-widgets.js'

import '../../element/text-fields/text-fields.scss'


import '../../blocks/footer-creative/footer-creative.scss'
import '../../blocks/footer-creative/footer-creative.js'


let uiKitLogo = document.querySelectorAll('.ui-kit-logo-icon')

uiKitLogo.forEach(el => {
    el.src = require("../../element/images/ui-kit-logo.png");
});
