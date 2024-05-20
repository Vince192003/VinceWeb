

document.addEventListener("DOMContentLoaded", function() {
    // Scroll to the home section
    document.getElementById("home").scrollIntoView({
        behavior: 'smooth'
    });
});
/*effects sa akong MenuIconkong wla ni dli mo gana ang active*/
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
/*pag click kay naay bagis */
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            navbar.classList.remove('active'); 
        });
    });
});

/*effects inig click kay fullscreen ang pic*/
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.clickable');
    elems.forEach(function(elem) {
        elem.addEventListener('click', function() {
            this.classList.toggle('fullscreen');
        });
    });

    var closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.parentNode.classList.remove('fullscreen');
        });
    });
});
   
