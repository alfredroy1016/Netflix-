document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    const menu = document.querySelector('.header nav div');

    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    
    nav.insertBefore(navToggle, menu);

    navToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
        }
    });
});
