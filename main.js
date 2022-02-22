let hamburger = document.querySelector('.hamburger-menu');
let hamburgerBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', function() {

    document.querySelector('.hamburger-menu').style.display = "block";

});

closeBtn.addEventListener('click', function() {

      document.querySelector('.hamburger-menu').style.display = "none";

})