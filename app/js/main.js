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

let mediaButtons = document.querySelectorAll('.form-media__button');

for(let mediaButton of mediaButtons){
  mediaButton.addEventListener('click', () =>{
    mediaButtons.forEach(i=> i.classList.remove('form-media__button--active'))
    mediaButton.classList.add('form-media__button--active');
  });
  
}