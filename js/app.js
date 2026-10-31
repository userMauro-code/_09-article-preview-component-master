let buttonShare = document.querySelector("#button--share");
let cardFooter = document.querySelector(".card__footer");
let cardSocial = document.querySelector(".card__footer--data");
let link = document.querySelector(".social__links");
let data = document.querySelector(".data");

buttonShare.addEventListener("click", function(){
    cardFooter.classList.add("active--share");
    cardSocial.classList.add("out");
    link.classList.add("links--active")

    buttonShare.addEventListener("click",function(){
        cardFooter.classList.toggle("active--share");
        cardSocial.classList.toggle("out")
        link.classList.toggle("links--active")
    })
 });