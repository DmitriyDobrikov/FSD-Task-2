let expandableList = document.querySelectorAll('.qwe222')
//let i = document.querySelectorAll('.like')
// alert()
for (let ind = 0; ind < expandableList.length; ind++) {
    expandableList[ind].id = 'expandeble_number_' + ind
}


let expandableParentId

$('.expandable-checkbox-button').mouseenter(function(){
    expandableParentId = this.id
});



for(j = 0; j < expandableList.length; j++) {
    
    let expandableButtonId = document.querySelector('#' + expandableList[j].id + ' .expandable-block');
    let expandableBlock = document.querySelector( '#' + expandableList[j].id + ' .expandable-checkbox-list');
    let expand = document.querySelector('#' + expandableList[j].id + ' .expandable-block' + ' .material-icons');
    let checkLabel = document.querySelector( '#' + expandableList[j].id + ' .expandable-checkbox-list' + ' .expandable-label');

    if (expand.textContent == 'expand_less') {
        expandableBlock.style.display = 'none';         
        expand.textContent = 'expand_more'
    } else {
        expandableBlock.style.display = 'block';
        expand.textContent = 'expand_less'
    }


    expandableButtonId.onclick = function () {
        //alert(checkLabel)

        if (expand.textContent == 'expand_less') {
            expandableBlock.style.display = 'none';         
            expand.textContent = 'expand_more'
        } else {
            expandableBlock.style.display = 'block';
            expand.textContent = 'expand_less'
        }

    }

    checkLabel.onclick = function () {
        checkLabel.classList.add('.expandable-label-checked')  
    }

}







//НЕ УДАЛЯТЬ!!!!!
// const toggles = document.querySelectorAll('.faq-toggle');
// toggles.forEach(toggle => {
// 	toggle.addEventListener('click', () => {
// 		toggle.parentNode.classList.toggle('active');
// 	});
// });
//НЕ УДАЛЯТЬ!!!!!