const mainWrapper = document.querySelector("#main-wrapper");
const menu = document.querySelector(".menu-icon");
const clickable = document.querySelectorAll(".click");

// menu icon
menu.addEventListener("click", function(){
    this.classList.toggle('active');
    mainWrapper.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// close the menu icon when a option is clicked
clickable.forEach(item => {
    item.addEventListener("click", function(){
        this.classList.toggle('active');
        menu.classList.toggle('active');
        mainWrapper.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});