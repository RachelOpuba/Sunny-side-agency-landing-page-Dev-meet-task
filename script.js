
const toggleBotton = document.getElementsByClassName('hamburger')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]

toggleBotton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')  
})
