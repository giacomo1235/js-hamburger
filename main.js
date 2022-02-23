let hamburger = document.querySelector('.hamburger-menu');
let hamburgerBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', function() {

    hamburger.classList.add('active')

});

closeBtn.addEventListener('click', function() {

    hamburger.classList.remove('active')

});