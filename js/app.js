let buttonShare = document.querySelector("#button--share");
let cardFooter = document.querySelector(".card__footer");
let cardSocial = document.querySelector(".card__footer--data");
let link = document.querySelector(".social__links");
let imgShare = document.querySelector(".button__share--img");

buttonShare.addEventListener("click", function(){
    cardFooter.classList.toggle("active--share");
    cardSocial.classList.toggle("out");
    link.classList.toggle("links--active");
    imgShare.classList.toggle("active--button")

 }); 
