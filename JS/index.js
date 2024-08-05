// script.js
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Change 50 to the scroll position you want
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});