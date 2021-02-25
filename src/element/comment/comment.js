import '../like-buttons/like-buttons.js'
import '../like-buttons/like-buttons.scss'




let userAvatarImage = document.querySelectorAll('.user-avatar')

userAvatarImage.forEach(element => {
    element.src = require(`../images/avatar/${element.alt}.jpg`);
});