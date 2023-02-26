// ========================
//      Scroll
// ========================
window.addEventListener('scroll', () => {
    
    var Projects = document.querySelector("#Projects")
    if (window.scrollY >= Projects.offsetTop-200)  {
        var header=document.querySelector("header")
            header.classList.add("hederFixed")
    }else{

        var header=document.querySelector("header");
        header.classList.remove("hederFixed");
    
    
    }
    
    var Education = document.querySelector("#Educations")
    if (window.scrollY >= Education.offsetTop-200) {
        
        var EducationsSpans = document.querySelectorAll(".span")
        EducationsSpans.forEach((element) => {
            element.style.width=element.dataset.width
        });
          
        var header=document.querySelector("header")
        header.classList.add("hederFixed")
    }else{
        var EducationsSpans = document.querySelectorAll(".span")
        EducationsSpans.forEach((element) => {
            element.style.width=0
        });
   
    }
    var Contact = document.querySelector("#Contact")
    if (window.scrollY >= Contact.offsetTop-100)  {
        var header=document.querySelector("header")
       header.classList.add("hederFixed")
    }
    
})
// ========================
//      Dark
// ========================
var btn = document.querySelector(".icon-star-half")
var bdy = document.getElementById("body")


btn.addEventListener("click", () => {
    bdy.classList.toggle("darkMode")
   
})
// ========================
//      slider
// ========================
let divSlider = document.querySelectorAll(".sliderDiv")
let leftClick = document.getElementsByClassName("icon-arrow-left2")[0]
let rightClick = document.getElementsByClassName("icon-arrow-right2")[0]

divSlider[0].style.display = "block"
var index = 0
rightClick.addEventListener("click", () => {
    index = index + 1
    if (index < divSlider.length) {
     
        divSlider[index - 1].style.display = "none"
        divSlider[index].style.display = "block"
    }
    else {
        divSlider[index - 1].style.display = "none"
        index = 0;
        divSlider[index].style.display = "block"
    }
})
leftClick.addEventListener("click", () => {
    index = index - 1
    if (index >= 0) {
      
        divSlider[index + 1].style.display = "none"
        divSlider[index].style.display = "block"
    }
    else {
        divSlider[index + 1].style.display = "none"
        index = divSlider.length - 1
        divSlider[index].style.display = "block"
    }
})
// ========================
//      p
// ========================
let H=document.getElementById("h")
var i = 0 , text= 'eb developer'
function textM (){
       if(i<text.length){
           document.getElementsByClassName("h")[0].innerHTML += text.charAt(i);
           i++;
           setTimeout(textM,200)
       }
       else{
           i=0
          document.getElementsByClassName("h")[0].innerHTML="W";
        }
    }
setInterval(textM,1500)

// ========================
//header Small ecran
// ========================

var showHedear =document.getElementsByClassName("icon-menu")[0];
var header=document.querySelector("nav");

showHedear.addEventListener("click",()=>{
        header.classList.toggle("showHeader");  
})




