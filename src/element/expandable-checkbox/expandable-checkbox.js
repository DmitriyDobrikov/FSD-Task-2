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

// $(document).ready(function()
// {
//     setTimeout(function()
//     {
//         $("h2").addClass("underline");
//     }, 2000);
// });

// let i = document.querySelectorAll('.like')
// for (let index = 0; index < i.length; index++) {
//   i[index].id = 'number_' + index
// }
// let parentId
// $('.like').mouseenter(function(){
//   parentId = this.id
// });
// for(item = 0; item < i.length; item++) {

//   let like = document.querySelector('#' + i[item].id)
//   let likesNumber = document.querySelector('#' + i[item].id  + ' .forbutton-like' + ' .likes-number');
//   let heart = document.querySelector('#' + i[item].id  + ' .forbutton-like' + ' .material-icons');
//   let likeStyle = document.querySelector('#' + i[item].id  + ' .forbutton-like' + ' .likes-number');
//   let likeStyleChecked = document.querySelector('#' + i[item].id  + ' .forbutton-like');
//   let counter = +likesNumber.textContent;





//НЕ УДАЛЯТЬ!!!!!
// const toggles = document.querySelectorAll('.faq-toggle');
// toggles.forEach(toggle => {
// 	toggle.addEventListener('click', () => {
// 		toggle.parentNode.classList.toggle('active');
// 	});
// });
//НЕ УДАЛЯТЬ!!!!!