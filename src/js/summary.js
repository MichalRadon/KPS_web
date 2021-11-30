console.log("summary");
const dateIn = document.querySelector(".data-in--js");
const dateOut = document.querySelector(".data-out--js");
const duration = document.querySelector(".duration--js");
const diet = document.querySelector(".diet--js");

const $dateIn = localStorage.getItem("dateIn");
const $dateOut = localStorage.getItem("dateOut");
const $duration = localStorage.getItem("time");
const $diet = localStorage.getItem("diet");

console.log(dateIn);
dateIn.innerHTML = "Pobyt od: " + $dateIn;
dateOut.innerHTML = "Pobyt do: " + $dateOut;
duration.innerHTML = "Długość pobytu: " + $duration;
diet.innerHTML = "Wyskokść diety: " + $diet + " PLN";
