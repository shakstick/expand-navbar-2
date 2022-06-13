const hamburger = document.querySelector(".hamburger"),
navList = document.querySelector(".nav-list"),
navItem = document.querySelectorAll(".nav-item");

hamburger.addEventListener("click" , function(){
    hamburger.classList.toggle("active")
    navList.classList.toggle("active")
})

for(const item of navItem){
    item.addEventListener("click",function(){
        hamburger.classList.remove("active")
        navList.classList.remove("active")
    })
}




