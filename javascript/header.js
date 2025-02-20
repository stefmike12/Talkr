window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shrunk');
    } else {
        header.classList.remove('shrunk');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header nav ul');
    if (window.scrollY > 100) {
        header.classList.add('shrunk');
    } else {
        header.classList.remove('shrunk');
    }
});


window.addEventListener('scroll', function() {
    const headerSection = document.querySelector('.header-section');
    if (window.scrollY > 150) {
        headerSection.classList.add('shrunk');
    } else {
        headerSection.classList.remove('shrunk');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('header nav ul');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('header nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
