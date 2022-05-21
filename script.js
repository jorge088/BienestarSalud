const servicesSection = document.querySelector('#services');
const mainSection = document.querySelector('#main');
const aboutUsSection = document.querySelector('#aboutUs');
const contactSection = document.querySelector('#contact')

const navServices = document.querySelector('#navServices');
const navAboutUs = document.querySelector('#navAboutUs');
const navContact = document.querySelector('#navContact');

navServices.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollTo(0,servicesSection.offsetTop - 80);
});

navAboutUs.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollTo(0,aboutUsSection.offsetTop - 80);
});
navContact.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollTo(0,contactSection.offsetTop - 80);
});