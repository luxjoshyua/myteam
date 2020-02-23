import style from "./sass/index.scss";

// check form has been completed 
const form = document.getElementsByTagName('form');
console.log(form);
const formInputs = form.elements;
console.log(formInputs);
const submitBtn = document.querySelector('.submit-btn');
console.log(submitBtn);

const checkForm = () => {
   
    const canSubmit = true;

    for (let i = 0; i < formInputs.length; i++) {
        if (formInputs[i].value.length === 0) {
            canSubmit = false;
            formInputs[i].style.color = '#F67E7E';
            formInputs[i].innerHTML = 'this field is required';
        }
    }
    if (canSubmit) {
        submitBtn.disabled = false; 
    }
}

checkForm();