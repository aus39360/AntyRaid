const menuBtn = document.querySelector('.menu-btn');
const menuBtnTest = document.querySelector('.button_test');
let menuOpen =false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtnTest.classList.remove('button-test');
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtnTest.classList.add('button-test');
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

