const animatedTags = document.querySelectorAll("h1, h2, p, h6");

// fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function () {

    let delay = 0.2

    animatedTags.forEach(tag => {
        // the () runs it
        const tagTop = tag.getBoundingClientRect().top
        const tagBottom = tag.getBoundingClientRect().bottom

        if (tagTop < window.innerHeight && tagBottom > 0) {
            // keep the s because we want it to be a second
            tag.style.animation = `fadeIn 1s ${delay}s both`
            // delay = delay + 0.25
            delay = delay + 0.05
        } else {
            tag.style.opacity = 0
            tag.style.animation = ""
        }
    })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
    fadeIn()
})

window.addEventListener("resize", function () {
    fadeIn()
})