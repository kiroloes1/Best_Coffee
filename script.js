let menu =document.querySelector(".visible");
let navbar=document.querySelector(".navbar");


function toggleMenu(){
    if(menu.classList.item(3)==="fa-bars"){
        console.log(1)
         menu.classList.remove("fa-bars")
         menu.classList.add("fa-x")
         navbar.classList.remove("toggle")
         
    }
 
    else{
        menu.classList.add("fa-bars")
         menu.classList.remove("fa-x")
         navbar.classList.add("toggle");
    }
   
}