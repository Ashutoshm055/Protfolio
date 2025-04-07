const insta = document.querySelector("#insta");
const linkedin = document.querySelector("#linkedin");
const yt = document.querySelector("#yt");
const discord = document.querySelector("#discord");
const github = document.querySelector("#github");
const cv = document.querySelector("#cv");

insta.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/theashutosh_mohapatra/";
});

linkedin.addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/ashutosh-mohapatra-5451a52a5";
});

yt.addEventListener("click", () => {
    window.location.href = "https://www.youtube.com/@AshutoshMohapatra16810";
});

discord.addEventListener("click", () => {
    window.location.href = "";
});

github.addEventListener("click", () => {
    window.location.href = "https://github.com/Ashutoshm055";
});

cv.addEventListener("click", () => {
    window.open("./PDFs/Ashutosh Resume.pdf", "_blank");
});


  
