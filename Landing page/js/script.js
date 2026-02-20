document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const mobileMenu = document.querySelector('#mobile-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Change Navbar Color on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        
        // Optional: Animate Hamburger to X
        mobileMenu.classList.toggle('is-active');
    });

    // 3. Close Mobile Menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            mobileMenu.classList.remove('is-active');
        });
    });
});