import './landing-page.scss'

import '../headers-and-footers/headers-and-footers.scss'

import '../../element/shrift/fonts.scss'
import '../../blocks/header-cite/header-cite.scss'
import '../../blocks/header-cite/header-cite.js'

import '../../blocks/footer-widgets/footer-widgets.scss'
import '../../blocks/footer-widgets/footer-widgets.js'

import '../../element/text-fields/text-fields.scss'

import '../../blocks/find/find.scss'
import '../../blocks/find/find.js'


let linkToRegistrationReg = document.querySelector('#button-big-reg')
let linkToRegistrationSign = document.querySelector('.button-smole-border-header')

linkToRegistrationReg.onclick = function () {
    window.location='./registration.html'
}

linkToRegistrationSign.onclick = function () {
    window.location='./registration.html'
}