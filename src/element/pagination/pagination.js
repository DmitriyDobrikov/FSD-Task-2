import '../../../node_modules/simple-pagination/jquery.simplePagination.js'
import '../../../node_modules/simple-pagination/simplePagination.css'

let prevPageIcon = document.querySelector('.light-pagination')
let qwerty = document.querySelectorAll('.page-link')
let paginationVariants = document.querySelector('.pagination-variants')




$(function() {
    
    $('.light-pagination').pagination({
        items: 15,
        itemsOnPage: 1,
        cssStyle: 'light-theme',
        displayedPages: 3,
        edges: 1,
        prevText: NaN,
        nextText: '<i class="material-icons prev-page">arrow_forward</i>',
        ellipsePageSet: false,
    });

});






prevPageIcon.onclick = function () {
    let i = $('.light-pagination').pagination('getCurrentPage')
    paginationVariants.textContent = `${i  > 1? (i - 1)*12 : i} - ${i*12} из 100+ вариантов аренды`
     

    if (i == 1) {
        $('.light-pagination').pagination({
            items: 15,
            itemsOnPage: 1,
            cssStyle: 'light-theme',
            displayedPages: 3,
            edges: 1,
            prevText: NaN,
            nextText: '<i class="material-icons prev-page">arrow_forward</i>',
            ellipsePageSet: false,
        });
    } else if ( i == 15 ){
        $('.light-pagination').pagination({
            items: 15,
            itemsOnPage: 1,
            cssStyle: 'light-theme',
            displayedPages: 3,
            edges: 1,
            prevText: '<i class="material-icons prev-page">arrow_back</i>',
            nextText: NaN,
            ellipsePageSet: false,
            currentPage: i,
        });
     } else{
        $('.light-pagination').pagination({
            items: 15,
            itemsOnPage: 1,
            cssStyle: 'light-theme',
            displayedPages: 3,
            edges: 1,
            prevText: '<i class="material-icons prev-page">arrow_back</i>',
            nextText: '<i class="material-icons prev-page">arrow_forward</i>',
            ellipsePageSet: false,
            currentPage: i,
        });
    }
    
}



