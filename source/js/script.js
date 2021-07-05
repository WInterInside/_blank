var menu = document.querySelector('.nav__menu');
var nav = document.querySelector('.nav__list');

nav.classList.add('nav__list--closed');

menu.addEventListener('click', function() {
    if (nav.classList.contains('nav__list--closed')) {
    nav.classList.remove('nav__list--closed');
    nav.classList.add('nav__list--opened');
  } else {
    nav.classList.remove('nav__list--opened');
    nav.classList.add('nav__list--closed');
  }
});
