import style from "./sass/index.scss";

// check form has been completed 
// const form = document.getElementsByTagName('form');
// console.log(form);
// const formInputs = form.elements;
// console.log(formInputs);
// const submitBtn = document.querySelector('.submit-btn');
// console.log(submitBtn);

// const checkForm = () => {

//     const canSubmit = true;

//     for (let i = 0; i < formInputs.length; i++) {
//         if (formInputs[i].value.length === 0) {
//             canSubmit = false;
//             formInputs[i].style.color = '#F67E7E';
//             formInputs[i].innerHTML = 'this field is required';
//         }
//     }
//     if (canSubmit) {
//         submitBtn.disabled = false; 
//     }
// }

// checkForm();


// show dialogue boxes
const showBoxes = [...document.querySelectorAll(".expand")];
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

showBoxes.forEach(box => {

    box.addEventListener('click', (e) => {

        box.parentElement.querySelector('.popup-box').classList.toggle('show');

        if (box.parentElement.querySelector('.popup-box').classList.contains('show')) {
            box.style.backgroundColor = "#79C8C7";
            minus.style.display = "block";
            plus.style.display = "none";
        } else {
            box.style.backgroundColor = "#F67E7E";
            plus.style.display = "block";
            minus.style.display = "none";

        }
    })
})