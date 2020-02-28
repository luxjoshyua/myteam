// Show mobile navigation
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-content-hidden');
const mobileClose = document.querySelector('.close-icon');

if (hamburger !== null) {
    hamburger.addEventListener('click', (e) => {
        console.log(e);
        mobileNav.classList.toggle('mobile-show');
        mobileNav.classList.remove('mobile-close');
    })
}

if (mobileClose !== null) {
    mobileClose.addEventListener('click', (e) => {
        console.log(e);
        mobileNav.classList.toggle('mobile-close');
        mobileNav.classList.remove('mobile-show');
    })
}