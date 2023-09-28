let contact_button= document.querySelector(".contact-button"); 

contact_button.addEventListener("click",()=>{ 
    contact_button.style.transition="0.08s" 
    contact_button.style.right="20.4%" 
    contact_button.style.bottom="15.5%"  
    contact_button.style.boxShadow="-6px 6px 4px rgba(0, 0, 0, 0.524)"
    setTimeout(()=>{
    contact_button.style.right="20%" 
    contact_button.style.bottom="16%"  
    contact_button.style.transition="0.3s"  
    contact_button.style.boxShadow="-10px 10px 5px rgba(0, 0, 0, 0.524)"
},100)
})  

let subtitulo = document.querySelectorAll(".sub-tittle") 
subtitulo.forEach((subtitulo)=>{
    console.log(subtitulo.className.split(" ")[1])
    subtitulo.style.transform=`translateY(${10*Number(subtitulo.className.split(" ")[1])}vh)`
}) 

