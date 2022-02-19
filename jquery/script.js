let burger = document.querySelector('.menu-btn')
let topMenu = document.querySelector('.top-menu')

burger.addEventListener('click' , (e) => {
    e.preventDefault()
    burger.classList.toggle("show-menu")
    topMenu.classList.toggle("show")
})

document.querySelectorAll(".top-menu a").forEach((oneLink) => {
    oneLink.addEventListener('click' , () => {
        document.querySelector('.top-menu').classList.toggle('show')
        document.querySelector('.menu-btn').classList.toggle('show')
    })
})