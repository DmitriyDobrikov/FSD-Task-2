let i = document.querySelectorAll('.like')


for (let index = 0; index < i.length; index++) {
  i[index].id = 'number_' + index
}



let parentId

$('.like').mouseenter(function(){
  parentId = this.id
});




for(item = 0; item < i.length; item++) {

  let like = document.querySelector('#' + i[item].id)
  let likesNumber = document.querySelector('#' + i[item].id  + ' .forbutton-like' + ' .likes-number');
  let heart = document.querySelector('#' + i[item].id  + ' .forbutton-like' + ' .material-icons');
  let likeStyle = document.querySelector('#' + i[item].id  + ' .forbutton-like' + ' .likes-number');
  let likeStyleChecked = document.querySelector('#' + i[item].id  + ' .forbutton-like');
  let counter = +likesNumber.textContent;

  like.onclick = function () {
    
    if (like.classList.contains('added')) {
      counter--;
      heart.textContent = 'favorite_outline'
      heart.style.color = 'rgba(31, 32, 65, 0.25)';
      likeStyle.style.color = 'rgba(31, 32, 65, 0.25)';
      likeStyleChecked.style.marginLeft = -7 + 'px';
      like.classList.remove("color-style");
    } else {
      counter++;
      heart.textContent = 'favorite'
      heart.style.color = '#BC9CFF';
      likeStyle.style.color = '#BC9CFF';
      likeStyleChecked.style.marginLeft = -5 + 'px';
      like.classList.add("color-style");

    }
    likesNumber.textContent = counter;
    like.classList.toggle('added');
  };
}


