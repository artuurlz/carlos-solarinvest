// animação do menu quando clicar
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

// animação pra aparecer o botão de subir a página e a sombra do header
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const scrollUp = () =>{
	const scrollUp = document.getElementById('pageUp')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// tirar o menu quando clicar no link
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// simulação de envio de mensagem

const btnSubmit = document.querySelector('#contact-form-button');

if(btnSubmit.addEventListener('click', () => {
    var nomeUser = document.querySelector('#name').value;
    var emailUser = document.querySelector('#email').value;
    var msgUser = document.querySelector('#msg').value;

    limparInput = () =>{
        document.querySelector('#name').value={};
        document.querySelector('#email').value={};
        document.querySelector('#msg').value={};
    };

    if(nomeUser !== '' && emailUser !== '' && msgUser !== ''){
        alert(`Olá ${nomeUser}, sua mensagem foi enviada com sucesso! Em breve entraremos em contato.`);
    } else if (nomeUser === ''){
        alert(`Dados incompletos, por favor coloque um nome válido!`);
    } else if (emailUser === ''){
        alert(`Dados incompletos, por favor coloque um e-mail válido!`);
    } else if (msgUser === ''){
        alert(`Dados incompletos, por favor coloque uma mensagem válida!`);
    } else {
        alert('Dados incompletos, por favor coloque todos os dados para o envio!');
    };
}));