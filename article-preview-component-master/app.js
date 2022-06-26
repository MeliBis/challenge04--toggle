const shareBtn = document.querySelector('.card__content__botton');

const socialIcons = document.querySelector('.card__content__social-icons');

shareBtn.addEventListener('click', () =>{
    socialIcons.classList.toggle('show');
    shareBtn.classList.toggle('rotate');
}); 
/* https://www.youtube.com/watch?v=ej6fYg1f5eA */