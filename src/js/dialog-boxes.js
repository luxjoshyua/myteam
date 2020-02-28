// show dialogue boxes
const showBoxes = [...document.querySelectorAll(".expand")];
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');

showBoxes.forEach(box => {
    if (box !== null) {
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
    }
})
