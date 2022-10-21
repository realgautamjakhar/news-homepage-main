const menuBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
const menu = document.querySelector(".menu")
menuBtn.addEventListener("click",showMenu)
closeBtn.addEventListener("click",closeMenu)

function showMenu(){
    menu.style.width= "80%";
    // menu.style.height= "100%";
    menu.style.transition= "all ease-in-out 1s"
}
function closeMenu(){
    menu.style.width= "0";
    // menu.style.height= "0";
    menu.style.transition= "all ease-in-out 1s"
}