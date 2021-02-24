let headerLogo = document.querySelectorAll('.header-logo-img')

headerLogo.forEach(el => {
    el.src = require("../../element/images/toxin-logo.png");
});


let linkToMainPage = document.querySelector('.header-logo-img')

linkToMainPage.onclick = function () {
    window.location='./main.html'
}

let linkToRegistrationReg = document.querySelector('#button-big-reg')
let linkToRegistrationSign = document.querySelector('.button-smole-border-header')

linkToRegistrationReg.onclick = function () {
    window.location='./registration.html'
}

linkToRegistrationSign.onclick = function () {
    window.location='./registration.html'
}