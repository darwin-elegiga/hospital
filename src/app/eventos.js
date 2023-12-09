var ul=document.querySelector(".dropdown");
document.addEventListener("click", (e)=>{
  if(!e.target.matches(".dropdown") && !e.target.matches(".buscador_a")){
    ul.classList.remove("ul_visible");
  }
})
