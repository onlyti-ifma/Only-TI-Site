
let subtitulo = document.querySelectorAll(".sub-tittle") 
subtitulo.forEach((subtitulo)=>{
    console.log(subtitulo.className.split(" ")[1])
    subtitulo.style.transform=`translateY(${10*Number(subtitulo.className.split(" ")[1])}vh)`
}) 