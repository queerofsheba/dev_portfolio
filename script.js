document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
        projectImage = card.querySelector(".project-img")
        projectImage.style.opacity = "1"
    })
    card.addEventListener("mouseleave", (e) =>{
        projectImage = card.querySelector(".project-img")
        projectImage.style.opacity = "0"
    })
    card.addEventListener("mousemove", (e) => {
        projectImage = card.querySelector(".project-img")
        projectImage.style.left = `${e.clientX + 15}px`
        projectImage.style.top = `${e.clientY - projectImage.offsetHeight}px`
    })
})