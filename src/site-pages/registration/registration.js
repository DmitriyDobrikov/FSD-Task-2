import '../headers-and-footers/headers-and-footers.js'
import './registration.scss'

import '../headers-and-footers/headers-and-footers.scss'

import '../../element/shrift/fonts.scss'
import '../../blocks/header-cite/header-cite.scss'
import '../../blocks/header-cite/header-cite.js'

import '../../blocks/footer-widgets/footer-widgets.scss'
import '../../blocks/footer-widgets/footer-widgets.js'

import '../../blocks/registration/registration.scss'
import '../../blocks/registration/registration.js'

import '../../blocks/login/login.scss'
import '../../blocks/login/login.js'


let callBlockReg = document.querySelector('#button-big-reg')
let callBlockSign = document.querySelector('.button-smole-border-header')

let blockSign = document.querySelector('.call-sign-on-page')
let blockReg = document.querySelector('.call-reg-on-page')

let blockButtonSign = document.querySelector('.login-block-smole-button')
let blockButtonReg = document.querySelector('.registration-block-smole-button')


blockButtonReg.onclick = function () {
    blockReg.style.display = 'none'
    blockSign.style.display = 'block'
}
blockButtonSign.onclick = function () {
    blockReg.style.display = 'block'
    blockSign.style.display = 'none'
}



callBlockReg.onclick = function () {
    blockReg.style.display = 'block'
    blockSign.style.display = 'none'
}
callBlockSign.onclick = function () {
    blockReg.style.display = 'none'
    blockSign.style.display = 'block'
}