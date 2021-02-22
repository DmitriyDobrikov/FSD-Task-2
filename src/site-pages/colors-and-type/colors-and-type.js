import './colors-and-type.scss'
import '../../element/shrift/fonts.scss'


let uiKitLogo = document.querySelectorAll('.ui-kit-logo-icon')

uiKitLogo.forEach(el => {
    el.src = require("../../element/images/ui-kit-logo.png");
});

