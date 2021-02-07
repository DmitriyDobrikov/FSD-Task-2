let dropdownRoomList = document.querySelectorAll('.room')

for (let index = 0; index < dropdownRoomList.length; index++) {
    dropdownRoomList[index].id = 'dropdown_room_' + index
}

// $('.room').mouseenter(function(){
//   alert(this.id)
// });


for(j = 0; j < dropdownRoomList.length; j++) {

    let dropdownRoomParent = document.querySelector('#' + dropdownRoomList[j].id);
    let dropdownRoomId = document.querySelector('#' + dropdownRoomList[j].id + ' .room-quantity-block');
    let dropdownListBlockRoom = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list');
    let dropdownIconRoom = document.querySelector('#' + dropdownRoomList[j].id + ' .room-quantity-block' + ' .dropdown-room-icon-block' + ' .material-icons');
    let dropdownRoomQuantity = document.querySelector('#' + dropdownRoomList[j].id + ' .room-quantity-block' + ' .room-quantity-text' + ' .room-quantity');
    
    dropdownRoomId.onclick = function () {
        if (dropdownIconRoom.textContent == 'expand_more') {
            dropdownListBlockRoom.style.display = 'block';
            dropdownIconRoom.textContent = 'expand_less'
            dropdownRoomParent.style.height = 182 + 'px';
        } else {
            dropdownListBlockRoom.style.display = 'none';         
            dropdownIconRoom.textContent = 'expand_more'
            dropdownRoomParent.style.height = 44 + 'px';
        }

    }

//bedroom Bed Bathroom
    let dropdownListBedroomPlus = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bedroom' + ' .quantity-block' + ' .plus');
    let dropdownListBedroomNumber = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bedroom' + ' .quantity-block' + ' .quantity-number');
    let dropdownListBedroomMinus = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bedroom' + ' .quantity-block' + ' .minus');

    let dropdownListBedPlus = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bed' + ' .quantity-block' + ' .plus');
    let dropdownListBedNumber = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bed' + ' .quantity-block' + ' .quantity-number');
    let dropdownListBedMinus = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bed' + ' .quantity-block' + ' .minus');

    let dropdownListBathroomPlus = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bathroom' + ' .quantity-block' + ' .plus');
    let dropdownListBathroomNumber = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bathroom' + ' .quantity-block' + ' .quantity-number');
    let dropdownListBathroomMinus = document.querySelector('#' + dropdownRoomList[j].id + ' .dropdown-room-list' + ' .bathroom' + ' .quantity-block' + ' .minus');

    // let dropdownPeopleSummAdd = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .dropdown-people-add' + ' .add-dropdown-block' + ' .add-dropdown');
    // let dropdownPeopleSummClean = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .dropdown-people-add' + ' .clean-dropdown-block' + ' .clean-dropdown');




//------------------------------------ Bedroom
    dropdownListBedroomPlus.onclick = function () {
        if (+dropdownListBedroomNumber.textContent == 0 ){ 
            dropdownListBedroomMinus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedroomMinus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedroomNumber.textContent = +dropdownListBedroomNumber.textContent + 1;
        } else if (+dropdownListBedroomNumber.textContent > 0 && +dropdownListBedroomNumber.textContent < 4){
            dropdownListBedroomNumber.textContent = +dropdownListBedroomNumber.textContent + 1;
        }else if (+dropdownListBedroomNumber.textContent == 4){ 
            dropdownListBedroomPlus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedroomPlus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedroomNumber.textContent = +dropdownListBedroomNumber.textContent + 1;
        }
    }
    dropdownListBedroomMinus.onclick = function () {
        if (+dropdownListBedroomNumber.textContent == 5){ 
            dropdownListBedroomPlus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedroomPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedroomNumber.textContent = +dropdownListBedroomNumber.textContent - 1;
        } else if (+dropdownListBedroomNumber.textContent > 1 && +dropdownListBedroomNumber.textContent < 5){
            dropdownListBedroomNumber.textContent = +dropdownListBedroomNumber.textContent - 1;
        }else if (+dropdownListBedroomNumber.textContent == 1){ 
            dropdownListBedroomMinus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedroomMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedroomNumber.textContent = +dropdownListBedroomNumber.textContent - 1;
        }
    }
//------------------------------------ Bedroom




//------------------------------------ Bed
    dropdownListBedPlus.onclick = function () {
        if (+dropdownListBedNumber.textContent == 0 ){ 
            dropdownListBedMinus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedMinus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedNumber.textContent = +dropdownListBedNumber.textContent + 1;
        }else if (+dropdownListBedNumber.textContent > 0 && +dropdownListBedNumber.textContent < 4){
            dropdownListBedNumber.textContent = +dropdownListBedNumber.textContent + 1;
        }else if (+dropdownListBedNumber.textContent == 4){ 
            dropdownListBedPlus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedPlus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedNumber.textContent = +dropdownListBedNumber.textContent + 1;
        }
    }
    dropdownListBedMinus.onclick = function () {
        if (+dropdownListBedNumber.textContent == 5){ 
            dropdownListBedPlus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBedNumber.textContent = +dropdownListBedNumber.textContent - 1;
        }else if (+dropdownListBedNumber.textContent > 1 && +dropdownListBedNumber.textContent < 5){
            dropdownListBedNumber.textContent = +dropdownListBedNumber.textContent - 1;
        }else if (+dropdownListBedNumber.textContent == 1){ 
            dropdownListBedMinus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBedNumber.textContent = +dropdownListBedNumber.textContent - 1;
        }
    }
//------------------------------------ Bed




//------------------------------------ Bathroom
    dropdownListBathroomPlus.onclick = function () {
        if (+dropdownListBathroomNumber.textContent == 0 ){ 
            dropdownListBathroomMinus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBathroomMinus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBathroomNumber.textContent = +dropdownListBathroomNumber.textContent + 1;
        }else if (+dropdownListBathroomNumber.textContent > 0 && +dropdownListBathroomNumber.textContent < 4){
            dropdownListBathroomNumber.textContent = +dropdownListBathroomNumber.textContent + 1;
        }else if (+dropdownListBathroomNumber.textContent == 4){ 
            dropdownListBathroomPlus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBathroomPlus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBathroomNumber.textContent = +dropdownListBathroomNumber.textContent + 1;
        }
    }
    dropdownListBathroomMinus.onclick = function () {
        if (+dropdownListBathroomNumber.textContent == 5){ 
            dropdownListBathroomPlus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBathroomPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBathroomNumber.textContent = +dropdownListBathroomNumber.textContent - 1;
        }else if (+dropdownListBathroomNumber.textContent > 1 && +dropdownListBathroomNumber.textContent < 5){
            dropdownListBathroomNumber.textContent = +dropdownListBathroomNumber.textContent - 1;
        }else if (+dropdownListBathroomNumber.textContent == 1){ 
            dropdownListBathroomMinus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBathroomMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBathroomNumber.textContent = +dropdownListBathroomNumber.textContent - 1;
        }
    }
//------------------------------------ Bathroom




    dropdownRoomParent.onclick = function () {
        //dropdownRoomQuantity.textContent = +dropdownListBedroomNumber.textContent +dropdownListBedNumber.textContent +  +dropdownListBathroomNumber.textContent
        
        let bedroomQuantity = +dropdownListBedroomNumber.textContent;
        let bedQuantity = +dropdownListBedNumber.textContent;
        let bathroomQuantity = +dropdownListBathroomNumber.textContent;

            
        if(+dropdownListBedroomNumber.textContent == 1) {
            bedroomQuantity += ' спальня,'
        } else if(+dropdownListBedroomNumber.textContent > 1 && +dropdownListBedroomNumber.textContent < 5) {
            bedroomQuantity += ' спальни,'
        }else if(+dropdownListBedroomNumber.textContent == 5){
            bedroomQuantity += ' спален,'
        } else {
            bedroomQuantity = ''
        }


        if(+dropdownListBedNumber.textContent == 1) {
            bedQuantity += ' кровать,'
        } else if(+dropdownListBedNumber.textContent > 1 && +dropdownListBedroomNumber.textContent < 5) {
            bedQuantity += ' кровати,'
        }else if(+dropdownListBedNumber.textContent == 5){
            bedQuantity += ' кроватей,'
        } else {
            bedQuantity = ''
        }


        if(+dropdownListBathroomNumber.textContent == 1) {
            bathroomQuantity += ' ванная'
        } else if(+dropdownListBathroomNumber.textContent > 1 && +dropdownListBathroomNumber.textContent < 6) {
            bathroomQuantity += ' ванных'
        }else {
            bathroomQuantity = ''
        }

        let roomSumm = bedroomQuantity + bedQuantity + bathroomQuantity
        dropdownRoomQuantity.textContent = roomSumm.slice(0, 20) + '...'


    }


}