const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function changeSlide(n) {
  slides[currentSlide].style.opacity = 0;
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.opacity = 1;
}

prev.addEventListener('click', () => {
  changeSlide(currentSlide - 1);
});

next.addEventListener('click', () => {
  changeSlide(currentSlide + 1);
});

changeSlide(currentSlide);



let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let Namefield = document.querySelector('.namefield');
let title = document.querySelector('.tit');
let underLine = document.querySelector('.underline');

signInBtn.addEventListener('click',()=>{
  Namefield.style.maxHeight = '0';
  title.innerHTML = 'Sign In';
  signUpBtn.classList.add('dis');
  signInBtn.classList.remove('dis');
  underLine.style.transform = 'translateX(30px)';
});


signUpBtn.addEventListener('click',()=>{
  Namefield.style.maxHeight = '60px';
  title.innerHTML = 'Sign Up';
  signUpBtn.classList.remove('dis');
  signInBtn.classList.add('dis');
  underLine.style.transform = 'translateX(0)';
});