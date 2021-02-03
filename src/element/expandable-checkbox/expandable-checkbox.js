let toggles = document.querySelector('.expandable-checkbox1');


// toggles.forEach(toggle => {
// 	toggle.addEventListener('click', () => {
//         toggle.parentNode.classList.toggle('active');
//         toggles.style.backgroundColor = 'red';
// 	});
// });

toggles.onclick = function () {
    alert("fase")
    toggles.style.color = 'red';
    toggles.style.display = 'none';
}
alert(toggles)






//НЕ УДАЛЯТЬ!!!!!
// const toggles = document.querySelectorAll('.faq-toggle');
// toggles.forEach(toggle => {
// 	toggle.addEventListener('click', () => {
// 		toggle.parentNode.classList.toggle('active');
// 	});
// });
//НЕ УДАЛЯТЬ!!!!!