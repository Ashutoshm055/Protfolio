const mainWrapper = document.querySelector("#main-wrapper");
const menu = document.querySelector(".menu-icon");


// menu icon
menu.addEventListener("click", function(){
    this.classList.toggle('active');
    mainWrapper.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});