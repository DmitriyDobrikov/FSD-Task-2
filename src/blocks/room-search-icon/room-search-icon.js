import '../../element/rate-button/rate-button.scss'
import '../../element/shrift/fonts.scss'



let roomSearchIcon = document.querySelectorAll('.room-search-icon-image')

roomSearchIcon.forEach(element => {
    element.src = require(`./images/${element.id}.png`);
});
