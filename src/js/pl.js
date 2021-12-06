console.log("pl page");
const buttonCalculatePL = document.querySelector(
  ".form-pl__calculate__button--js"
);

buttonCalculatePL.addEventListener("click", calculatePl);

let daysOnTrip;
let hoursOnTrip;
let minutesOnTrip;
let diet;
let date1;
let date2;
let dietAmount;
let dateIn;
let timeIn;
let dateOut;
let timeOut;
let breakfast;
let dinner;
let supper;

function calculatePl() {
  dateIn = document.querySelector(".form-pl__date-in--js").value;
  timeIn = document.querySelector(".form-pl__time-in--js").value;
  dateOut = document.querySelector(".form-pl__date-out--js").value;
  timeOut = document.querySelector(".form-pl__time-out--js").value;
  dietAmount = parseInt(
    document.querySelector(".form-pl__label-diet__placeholder__input--js").value
  );
  breakfast = parseInt(
    document.querySelector(".form-pl__grid__input-breakfast--js").value
  );
  dinner = parseInt(
    document.querySelector(".form-pl__grid__input-dinner--js").value
  );
  supper = parseInt(
    document.querySelector(".form-pl__grid__input-super--js").value
  );
  validation();
}
function validation() {
  if (dietAmount < 0) dietAmount = 0;
  if (breakfast < 0) breakfast = 0;
  if (dinner < 0) dinner = 0;
  if (supper < 0) supper = 0;
  date1 = new Date(dateIn + "T" + timeIn);
  date2 = new Date(dateOut + "T" + timeOut);

  if (!(date2 > date1)) {
    window.alert(
      "Data i czas przyjazdu nie może być wcześniej niż wyjazdu. Zmień daty!"
    );
  } else {
    dietCalculation();
  }
}
function dateDiffrence(start, stop) {
  let diffrnece = stop - start;
  return diffrnece;
}
function dietCalculation() {
  let milisecond = dateDiffrence(date1, date2);
  let days = milisecond / (1000 * 60 * 60 * 24);
  let hours = milisecond / (1000 * 60 * 60);
  let minutes = milisecond / (1000 * 60);

  daysOnTrip = Math.floor(days);
  hoursOnTrip = Math.floor((minutes - daysOnTrip * 24 * 60) / 60);
  minutesOnTrip = minutes - daysOnTrip * 24 * 60 - hoursOnTrip * 60;

  if (daysOnTrip < 1) {
    if (
      (hoursOnTrip >= 8 && hoursOnTrip < 12) ||
      (hoursOnTrip == 12 && minutesOnTrip == 0)
    ) {
      diet = dietAmount / 2;
      console.log("1war");
    }
    if ((hoursOnTrip == 12 && minutesOnTrip > 0) || hoursOnTrip > 12) {
      diet = dietAmount;
      console.log("2war");
    }

    if (hoursOnTrip < 8) {
      diet = 0;
      console.log("3war");
    }
  }

  if (daysOnTrip >= 1) {
    if (hoursOnTrip < 8) {
      diet = dietAmount * daysOnTrip + dietAmount / 2;
      console.log("4war");
    }

    if (hoursOnTrip >= 8) {
      diet = dietAmount * daysOnTrip + dietAmount;
    }
  }

  diet -= breakfast * (dietAmount * 0.25);
  diet -= dinner * (dietAmount * 0.5);
  diet -= supper * (dietAmount * 0.25);

  console.log(
    "dni: " + daysOnTrip + " hours: " + hoursOnTrip + " min: " + minutesOnTrip
  );
  console.log("stawka: " + dietAmount);
  console.log(
    "sniadanie: " + breakfast + " obiad: " + dinner + " kolacje : " + supper
  );
  console.log("wartość diety: " + diet);

  localStorage.setItem("dateIn", dateIn + ", " + timeIn);
  localStorage.setItem("dateOut", dateOut + ", " + timeOut);
  localStorage.setItem(
    "time",
    daysOnTrip + " dni " + hoursOnTrip + " godz " + minutesOnTrip + " minut"
  );
  localStorage.setItem("diet", diet);
  localStorage.setItem("tag", "pl");

  window.location.href = "./summary.html";
}
