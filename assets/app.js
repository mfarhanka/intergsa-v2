const year = document.getElementById('year');
const navLinks = document.querySelectorAll('.navbar .nav-link');
const navbarCollapse = document.getElementById('mainNav');

if (year) {
    year.textContent = new Date().getFullYear();
}

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');

        if (window.innerWidth < 992 && navbarCollapse && window.bootstrap) {
            const collapse = window.bootstrap.Collapse.getInstance(navbarCollapse);
            if (collapse) {
                collapse.hide();
            }
        }
    });
});