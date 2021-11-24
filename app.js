const burger = document.querySelector(".burger-box");
const menu = document.querySelector(".menu");
const mail = document.querySelector(".email").textContent;

function showMenu() {
        burger.style.visibility = "hidden";
        TweenMax.fromTo([menu], {right: -500}, {right: 0, visibility: "visible"});
}

function closeMenu() {
        burger.style.visibility = "visible";
        TweenMax.fromTo([menu], {right: 0}, {right: -800, duration: 1});
}
function copyToClip() {
        console.log(mail);
        navigator.clipboard.writeText(mail);
        alert("An email has been copied to clipboard");
}
