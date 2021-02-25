import './room-details.scss'
import '../../element/shrift/fonts.scss'

import '../../blocks/header-cite/header-cite.scss'
import '../../blocks/header-cite/header-cite.js'

import '../../blocks/footer-widgets/footer-widgets.scss'
import '../../blocks/footer-widgets/footer-widgets.js'

import '../../element/text-fields/text-fields.scss'
//
import '../../element/bullet-list/bullet-list.scss'

import '../../element/comment/comment.scss'
import '../../element/comment/comment.js'

import '../../element/comfort-icons/comfort-icons.scss'

import '../../blocks/hotel-number/hotel-number.scss'
import '../../blocks/hotel-number/hotel-number.js'

import '../../element/vote/vote.scss'


let roomDetailsRoomNumber = document.querySelector('.for-int-number').textContent

let roomDetailsImages = document.querySelectorAll('.room-details-room-image')

roomDetailsImages.forEach(element => {
    element.src = require(`../../element/images/room-details-images/${roomDetailsRoomNumber}${element.alt}.jpg`);
});

