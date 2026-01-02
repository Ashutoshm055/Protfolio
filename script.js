const insta = document.querySelector("#insta");
const linkedin = document.querySelector("#linkedin");
const yt = document.querySelector("#yt");
const email = document.querySelector("#email");
const github = document.querySelector("#github");
const ab = document.querySelector("#AB");
const mainWrapper = document.querySelector("#main-wrapper");
const menu = document.querySelector(".menu-icon");
const clickable = document.querySelectorAll(".click");

insta.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/theashutosh_mohapatra/";
});

linkedin.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/ashutosh-mohapatra-5451a52a5";
});

yt.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/@AshutoshMohapatra16810";
});

email.addEventListener("click", () => {
    window.location.href = "mailto: ashutosh.mohapatra055@gmail.com";
});

github.addEventListener("click", () => {
    window.location.href = "https://github.com/Ashutoshm055";
});

ab.addEventListener("click", () => {
    window.location.href = "./About_me/about.html";
});


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
  
