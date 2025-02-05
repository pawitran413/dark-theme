const button = document.getElementById('tombol-navbar-hp');
const navbar = document.getElementById('container-navbar-hp')
const garisSatu = document.getElementById('line1');
const garisDua = document.getElementById('line2');
const garisTiga = document.getElementById('line3');
const listNavbarHp = document.getElementsByClassName('list-navbar-hp');
const beranda = document.getElementById('beranda');
const berita = document.getElementById('berita');
const emagz = document.getElementById('emagz');

// const menuButton = document.getElementById('menuButton');
// const navbar = document.getElementById('navbar');

button.addEventListener('click', () => {
    if (navbar.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        navbar.style.width = '0vw';
        garisSatu.style.transform = 'rotate(0deg)';
        garisDua.style.opacity = '100';
        garisTiga.style.transform = 'rotate(0deg)';
        beranda.style.opacity = '100%';
        beranda.style.transition = '0.5s';
    } else {
        navbar.classList.add('hidden');
        navbar.style.width = '50vw';
        navbar.style.transition = 'all 0.4s ease-in-out';
        garisSatu.style.transform = 'rotate(-45deg) translate(-5px, 5px)';
        garisDua.style.opacity = '0';
        garisTiga.style.transform = 'rotate(45deg) translate(-5px, -5px)';
        beranda.style.opacity = '20%';
        beranda.style.transition = '0.5s';
    }
});

listNavbarHp.addEventListener('click', () => {
    if( navbar.classList.contains('hidden') ) {
        navbar.classList.remove('hidden');
        navbar.style.width = '0vw';
        garisSatu.style.transform = 'rotate(0deg)';
        garisDua.style.opacity = '100';
        garisTiga.style.transform = 'rotate(0deg)';
    } else {
        navbar.classList.add('hidden');
        navbar.style.width = '50vw';
        navbar.style.transition = 'all 0.4s ease-in-out';
        garisSatu.style.transform = 'rotate(-45deg) translate(-5px, 5px)';
        garisDua.style.opacity = '0';
        garisTiga.style.transform = 'rotate(45deg) translate(-5px, -5px)';
    }
});