let button = document.getElementById("btn");
let card = document.getElementById("cards");
let navigation = document.getElementById("nav");
let showNav = document.getElementById("show");
let close = document.getElementById("close");





button.onclick = function(){
    showNav.style.display = "block"
    this.style.display = "none"
}
close.onclick = function(){
    showNav.style.display = "none"
    button.style.display = "block"
}