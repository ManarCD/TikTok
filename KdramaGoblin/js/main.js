var showNav =document.getElementsByClassName("icon-menu")[0];
var nav=document.querySelector("nav");

showNav.addEventListener("click",()=>{
        nav.classList.toggle("showNav"); 
        showNav.classList.toggle("color"); 
       
})