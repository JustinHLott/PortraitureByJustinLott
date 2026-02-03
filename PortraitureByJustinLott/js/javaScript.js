import {loadComponent} from "./functions.js";

document.addEventListener("DOMContentLoaded", async () => {
    // load header and footer components
    await loadComponent("headerComponent", "components/header.html");
    await loadComponent("footerComponent", "components/footer.html");

    // mark current nav link based on current page
    const navLinks = document.querySelectorAll('#headerComponent nav a, nav a');
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(a => {
        const href = a.getAttribute('href');
        if (href === currentFile || (href === '' && currentFile === 'index.html')) {
            a.classList.add('active');
            a.setAttribute('aria-current', 'page');
        }
    });
});




    

