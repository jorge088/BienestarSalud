const servicesSection = document.querySelector('#services');
const mainSection = document.querySelector('#main');
const aboutUsSection = document.querySelector('#aboutUs');
const contactSection = document.querySelector('#contact')

const navLinks = document.querySelector('.nav__categorias');
const navServices = document.querySelector('#navServices');
const navAboutUs = document.querySelector('#navAboutUs');
const navContact = document.querySelector('#navContact');

const responsiveBtnNav = document.querySelector('.nav__responsiveButton');

navServices.addEventListener('click',(e)=>{
    e.preventDefault();
    if (navLinks.classList.contains('showNav')) navLinks.classList.toggle('showNav');
    scrollTo(0,servicesSection.offsetTop - 80);
});

navAboutUs.addEventListener('click',(e)=>{
    e.preventDefault();
    if (navLinks.classList.contains('showNav')) navLinks.classList.toggle('showNav');
    scrollTo(0,aboutUsSection.offsetTop - 80);
});
navContact.addEventListener('click',(e)=>{
    e.preventDefault();
    if (navLinks.classList.contains('showNav')) navLinks.classList.toggle('showNav');
    scrollTo(0,contactSection.offsetTop - 80);
});

responsiveBtnNav.addEventListener('click', ()=>{    
    navLinks.classList.toggle('showNav');
})