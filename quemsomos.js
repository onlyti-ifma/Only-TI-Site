
let subtitulo = document.querySelectorAll(".sub-title") 
subtitulo.forEach((subtitulo)=>{
    console.log(subtitulo.className.split(" ")[1])
    subtitulo.style.transform=`translateY(${18*Number(subtitulo.className.split(" ")[1])}vh)`
})  
let change = document.querySelector(".p1") 
change.addEventListener("click", ()=>{
    change.style.order="3"
})