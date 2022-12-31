let toggle = document.querySelector('.hamburger'),
    toggleMenu = document.querySelector('.four__hamburger'),
    close = document.querySelector('.close'),
    headerLogo = document.querySelector('.header__logo'),
    modal = document.querySelector('.form'),
    btnModal = document.querySelector('#btn-modal'),
    closeModal = document.querySelector('.close-form span')
function toggleFunc(e) {
    e.classList.toggle("change");
    document.getElementById("btn-toggle")
        .classList
        .toggle("show");
}
const header = document.querySelector('.header.container');

toggle.addEventListener('click', () => {
    toggleMenu.style.left = '20%'
    document.body.style.overflow = 'hidden'
});

close.addEventListener('click', () => {
    toggleMenu.style.left = '100%'
    document.body.style.overflow = ''
})

btnModal.addEventListener('click', () => {
    modal.style.cssText = `
    transform: translateX(0%);
    transition: 0.9s ease-in;
    opacity: 1;
    `
    document.body.style.overflow = 'hidden'
})
closeModal.addEventListener('click', () => {
    modal.style.cssText = `
    transform: translateX(100%);
    transition: 0.9s ease-in;
    opacity: 0;
    `
    document.body.style.overflow = ''
})

// let i = e.target.getAttribute('href').replace('#','')

