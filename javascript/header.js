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