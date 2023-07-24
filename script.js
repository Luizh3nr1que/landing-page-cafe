const menuMobile = document.querySelector('.menuMobile');
const menuContainerMobile = document.querySelector('.menuContainerMobile');

menuMobile.addEventListener('click', () => {
    menuContainerMobile.classList.add("abrirMenu");
    menuContainerMobile.style.display = "block";
})


const fecharMenu = document.querySelector(".fecharMenu");

fecharMenu.addEventListener('click', () => {
    menuContainerMobile.style.display = "none";
})



const links = document.querySelectorAll('.links');

links.forEach(link => {
    link.addEventListener('click', () => {
        menuContainerMobile.style.display = "none";
    });
});