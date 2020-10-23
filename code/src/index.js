let hamburgerOpen = document.querySelector('.nav--hamburger-open');
let hamburgerClose = document.querySelector('.nav--hamburger-close');
let menu = document.querySelector('.menu');

hamburgerOpen.addEventListener('click', e => {
  console.log(hamburgerOpen)
  hamburgerOpen.style.display = "none";
  hamburgerClose.style.display = "flex";
  menu.style.display = "flex"
});

hamburgerClose.addEventListener('click', e => {
  console.log(hamburgerOpen)
  hamburgerClose.style.display = "none";
  hamburgerOpen.style.display = "block";
  menu.style.display = "none";
})