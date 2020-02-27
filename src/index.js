import style from "./sass/index.scss";

import "./js/content-fade";

// check form has been completed 
const form = document.querySelector("form");
const formInputs = form.elements;
const submitBtn = document.querySelector('.submit-btn');
const formErrorMessage = document.querySelectorAll('.error-message');

const checkForm = () => {

    let canSubmit = true;

    for (let index = 0; index < formInputs.length; index++) {

        const element = formInputs[index];
       

        if (element.value.length === 0) {

            console.log("It's an empty field")

            element.style.border = "1px solid pink";

            // formErrorMessage.style.display = "block";
            
            canSubmit = false;

        } else if (element.value.length > 0) {
            console.log("User has entered text into the field");
            element.style.border = "none";
        }
    }

    if (canSubmit) {
        // ! means not
        submitBtn.disabled = !canSubmit;
    }

}

checkForm();








// show dialogue boxes
// const showBoxes = [...document.querySelectorAll(".expand")];
// const plus = document.querySelector('.plus');
// const minus = document.querySelector('.minus');

// showBoxes.forEach(box => {

//     box.addEventListener('click', (e) => {

//         box.parentElement.querySelector('.popup-box').classList.toggle('show');

//         if (box.parentElement.querySelector('.popup-box').classList.contains('show')) {
//             box.style.backgroundColor = "#79C8C7";
//             minus.style.display = "block";
//             plus.style.display = "none";
//         } else {
//             box.style.backgroundColor = "#F67E7E";
//             plus.style.display = "block";
//             minus.style.display = "none";

//         }
//     })
// })

// const hamburger = document.querySelector('.hamburger');
// const mobileNav = document.querySelector('.mobile-nav-open');
// const mobileClose = document.querySelector('.close-icon');

// hamburger.addEventListener('click', (e) => {
//     mobileNav.classList.toggle('mobile-show');
//     mobileNav.classList.remove('mobile-close');
// })

// mobileClose.addEventListener('click', (e) => {
//     mobileNav.classList.toggle('mobile-close'); 
//     mobileNav.classList.remove('mobile-show');
// })