let dropdownPeopleList = document.querySelectorAll('.people')

for (let index = 0; index < dropdownPeopleList.length; index++) {
    dropdownPeopleList[index].id = 'dropdown_people_' + index
}

for(j = 0; j < dropdownPeopleList.length; j++) {

    let dropdownPeopleParent = document.querySelector('#' + dropdownPeopleList[j].id);
    let dropdownPeopleId = document.querySelector('#' + dropdownPeopleList[j].id + ' .guest-quantity-block');
    let dropdownListBlock = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list');
    let dropdownIcon = document.querySelector('#' + dropdownPeopleList[j].id + ' .guest-quantity-block' + ' .dropdown-icon-block' + ' .material-icons');
    let dropdownPeopleQuantity = document.querySelector('#' + dropdownPeopleList[j].id + ' .guest-quantity-block' + ' .guest-quantity-text' + ' .guest-quantity');
    
    dropdownPeopleId.onclick = function () {
        if (dropdownIcon.textContent == 'expand_more') {
            dropdownListBlock.style.display = 'block';
            dropdownIcon.textContent = 'expand_less'
            dropdownPeopleParent.style.height = 202 + 'px';
        } else {
            dropdownListBlock.style.display = 'none';         
            dropdownIcon.textContent = 'expand_more'
            dropdownPeopleParent.style.height = 44 + 'px';
        }

    }


    let dropdownListAduldsPlus = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .adults' + ' .quantity-block' + ' .plus');
    let dropdownListAduldsNumber = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .adults' + ' .quantity-block' + ' .quantity-number');
    let dropdownListAduldsMinus = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .adults' + ' .quantity-block' + ' .minus');

    let dropdownListChildrenPlus = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .children' + ' .quantity-block' + ' .plus');
    let dropdownListChildrenNumber = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .children' + ' .quantity-block' + ' .quantity-number');
    let dropdownListChildrenMinus = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .children' + ' .quantity-block' + ' .minus');

    let dropdownListBabiesPlus = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .babies' + ' .quantity-block' + ' .plus');
    let dropdownListBabiesNumber = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .babies' + ' .quantity-block' + ' .quantity-number');
    let dropdownListBabiesMinus = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .babies' + ' .quantity-block' + ' .minus');

    let dropdownPeopleSummAdd = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .dropdown-people-add' + ' .add-dropdown-block' + ' .add-dropdown');
    let dropdownPeopleSummClean = document.querySelector('#' + dropdownPeopleList[j].id + ' .dropdown-list' + ' .dropdown-people-add' + ' .clean-dropdown-block' + ' .clean-dropdown');




//------------------------------------ Adult
    dropdownListAduldsPlus.onclick = function () {
        if (+dropdownListAduldsNumber.textContent == 0 ){ 
            dropdownListAduldsMinus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListAduldsMinus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListAduldsNumber.textContent = +dropdownListAduldsNumber.textContent + 1;
        } else if (+dropdownListAduldsNumber.textContent > 0 && +dropdownListAduldsNumber.textContent < 4){
            dropdownListAduldsNumber.textContent = +dropdownListAduldsNumber.textContent + 1;
        }else if (+dropdownListAduldsNumber.textContent == 4){ 
            dropdownListAduldsPlus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListAduldsPlus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListAduldsNumber.textContent = +dropdownListAduldsNumber.textContent + 1;
        }
    }
    dropdownListAduldsMinus.onclick = function () {
        if (+dropdownListAduldsNumber.textContent == 5){ 
            dropdownListAduldsPlus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListAduldsPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListAduldsNumber.textContent = +dropdownListAduldsNumber.textContent - 1;
        } else if (+dropdownListAduldsNumber.textContent > 1 && +dropdownListAduldsNumber.textContent < 5){
            dropdownListAduldsNumber.textContent = +dropdownListAduldsNumber.textContent - 1;
        }else if (+dropdownListAduldsNumber.textContent == 1){ 
            dropdownListAduldsMinus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListAduldsMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListAduldsNumber.textContent = +dropdownListAduldsNumber.textContent - 1;
        }
    }
//------------------------------------ Adult




//------------------------------------ Children
    dropdownListChildrenPlus.onclick = function () {
        if (+dropdownListChildrenNumber.textContent == 0 ){ 
            dropdownListChildrenMinus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListChildrenMinus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListChildrenNumber.textContent = +dropdownListChildrenNumber.textContent + 1;
        }else if (+dropdownListChildrenNumber.textContent > 0 && +dropdownListChildrenNumber.textContent < 4){
            dropdownListChildrenNumber.textContent = +dropdownListChildrenNumber.textContent + 1;
        }else if (+dropdownListChildrenNumber.textContent == 4){ 
            dropdownListChildrenPlus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListChildrenPlus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListChildrenNumber.textContent = +dropdownListChildrenNumber.textContent + 1;
        }
    }
    dropdownListChildrenMinus.onclick = function () {
        if (+dropdownListChildrenNumber.textContent == 5){ 
            dropdownListChildrenPlus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListChildrenPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListChildrenNumber.textContent = +dropdownListChildrenNumber.textContent - 1;
        }else if (+dropdownListChildrenNumber.textContent > 1 && +dropdownListChildrenNumber.textContent < 5){
            dropdownListChildrenNumber.textContent = +dropdownListChildrenNumber.textContent - 1;
        }else if (+dropdownListChildrenNumber.textContent == 1){ 
            dropdownListChildrenMinus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListChildrenMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListChildrenNumber.textContent = +dropdownListChildrenNumber.textContent - 1;
        }
    }
//------------------------------------ Children




//------------------------------------ Babies
    dropdownListBabiesPlus.onclick = function () {
        if (+dropdownListBabiesNumber.textContent == 0 ){ 
            dropdownListBabiesMinus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBabiesMinus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBabiesNumber.textContent = +dropdownListBabiesNumber.textContent + 1;
        }else if (+dropdownListBabiesNumber.textContent > 0 && +dropdownListBabiesNumber.textContent < 4){
            dropdownListBabiesNumber.textContent = +dropdownListBabiesNumber.textContent + 1;
        }else if (+dropdownListBabiesNumber.textContent == 4){ 
            dropdownListBabiesPlus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBabiesPlus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBabiesNumber.textContent = +dropdownListBabiesNumber.textContent + 1;
        }
    }
    dropdownListBabiesMinus.onclick = function () {
        if (+dropdownListBabiesNumber.textContent == 5){ 
            dropdownListBabiesPlus.style.color = 'rgba(31, 32, 65, 0.5)'
            dropdownListBabiesPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
            dropdownListBabiesNumber.textContent = +dropdownListBabiesNumber.textContent - 1;
        }else if (+dropdownListBabiesNumber.textContent > 1 && +dropdownListBabiesNumber.textContent < 5){
            dropdownListBabiesNumber.textContent = +dropdownListBabiesNumber.textContent - 1;
        }else if (+dropdownListBabiesNumber.textContent == 1){ 
            dropdownListBabiesMinus.style.color = 'rgba(31, 32, 65, 0.25)'
            dropdownListBabiesMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
            dropdownListBabiesNumber.textContent = +dropdownListBabiesNumber.textContent - 1;
        }
    }
//------------------------------------ Babies


//------------------------------------ ПРИМЕНИТЬ
    dropdownPeopleSummAdd.onclick = function () {
        dropdownPeopleQuantity.textContent = +dropdownListAduldsNumber.textContent + +dropdownListChildrenNumber.textContent + +dropdownListBabiesNumber.textContent;
        if( +dropdownPeopleQuantity.textContent > 0){
            if (+dropdownPeopleQuantity.textContent > 4) {
                dropdownPeopleQuantity.textContent += ' гостей'
            }else if (+dropdownPeopleQuantity.textContent == 1){
                dropdownPeopleQuantity.textContent += ' гость'
            }else {
                dropdownPeopleQuantity.textContent += ' гостя'
            }
        }else{
            dropdownPeopleQuantity.textContent = 'Сколько гостей'
        }
    }
//------------------------------------ ПРИМЕНИТЬ


//------------------------------------ ОЧИСТИТЬ
    dropdownPeopleSummClean.onclick = function () {
        dropdownPeopleQuantity.textContent = 'Сколько гостей'
        dropdownListAduldsNumber.textContent = 0;
        dropdownListChildrenNumber.textContent = 0;
        dropdownListBabiesNumber.textContent = 0;

        dropdownListBabiesMinus.style.color = 'rgba(31, 32, 65, 0.25)'
        dropdownListBabiesMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
        dropdownListBabiesPlus.style.color = 'rgba(31, 32, 65, 0.5)'
        dropdownListBabiesPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'

        dropdownListChildrenMinus.style.color = 'rgba(31, 32, 65, 0.25)'
        dropdownListChildrenMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
        dropdownListChildrenPlus.style.color = 'rgba(31, 32, 65, 0.5)'
        dropdownListChildrenPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'

        dropdownListAduldsMinus.style.color = 'rgba(31, 32, 65, 0.25)'
        dropdownListAduldsMinus.style.borderColor = 'rgba(31, 32, 65, 0.25)'
        dropdownListAduldsPlus.style.color = 'rgba(31, 32, 65, 0.5)'
        dropdownListAduldsPlus.style.borderColor = 'rgba(31, 32, 65, 0.5)'
    }
//------------------------------------ ОЧИСТИТЬ


    dropdownPeopleParent.onclick = function () {

        if (dropdownPeopleQuantity.textContent == 'Сколько гостей') {
            dropdownPeopleSummClean.style.display = "none"
        } else {
            dropdownPeopleSummClean.style.display = "inline-block"
        }
    }


}