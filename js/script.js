const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const navList = document.querySelector('.nav-list');

openMenu.addEventListener('click', () => {
    navList.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    navList.classList.remove('active');
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});