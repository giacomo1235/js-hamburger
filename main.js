let hamburger = document.querySelector('.hamburger-menu');
let hamburgerBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', function() {

    hamburger.style.display = "block";

});

closeBtn.addEventListener('click', function() {

    hamburger.style.display = "none";

});