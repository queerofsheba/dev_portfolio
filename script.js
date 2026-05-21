document.querySelectorAll(".project-card").forEach((card) => {
    projectImage = card.querySelector(".project-img")
    expandButton = card.querySelector(".expand-btn")
    card.addEventListener("mouseenter", (e) => {
        projectImage.style.opacity = "1"
    })
    card.addEventListener("mouseleave", (e) =>{
        projectImage.style.opacity = "0"
    })
    card.addEventListener("mousemove", (e) => {
        projectImage.style.left = `${e.clientX + 15}px`
        projectImage.style.top = `${e.clientY - projectImage.offsetHeight}px`
    })
    expandButton.addEventListener("click", (e) => {
        card.classList.toggle("open")
    })
})