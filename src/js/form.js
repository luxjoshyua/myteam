// check form has been completed 
const form = document.querySelector("form");
if (form !== null) {
    const formInputs = form.elements;
    const submitBtn = document.querySelector('.submit-btn');

    const checkForm = () => {
        let canSubmit = true;
        for (let index = 0; index < formInputs.length; index++) {
            const element = formInputs[index];
            if (element.value.length === 0) {
                element.classList.add('error');
                canSubmit = false;
            } else if (element.value.length > 0) {
                element.nextElementSibling.style.display = "none";
                element.classList.remove('error');
            }
        }
        if (canSubmit) {
            // ! means not
            submitBtn.disabled = !canSubmit;
        }
    }

    // if keydown on form, run the checkForm function
    form.addEventListener('keydown', (e) => {
        checkForm();
    });
}