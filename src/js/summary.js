console.log("summary");
let tag;
let rate;
let date;
let dietInPLN;
const dateIn = document.querySelector(".data-in--js");
const dateOut = document.querySelector(".data-out--js");
const duration = document.querySelector(".duration--js");
const diet = document.querySelector(".diet--js");

const $dateIn = localStorage.getItem("dateIn");
const $dateOut = localStorage.getItem("dateOut");
const $duration = localStorage.getItem("time");
const $diet = localStorage.getItem("diet");
tag = localStorage.getItem("currencyTag");

const fetchApi = fetch("https://api.nbp.pl/api/exchangerates/tables/a/")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    for (const element of data) {
      console.log(element);
      const { effectiveDate, rates } = element;

      date = effectiveDate;

      for (const element of rates) {
        let { code, mid } = element;
        if (code == tag) {
          rate = mid;
          dietInPLN = rate * $diet;
          let template = ` <p class="data-in data-in--js">Pobyt od : ${$dateIn}</p>
          <p class="data-out data-out--js">Pobyt do : ${$dateOut}</p>
          <p class="duration duration--js">Długość pobytu : ${$duration}</p>
          <p class="diet-pl diet-pl--js">Wysokość diety : ${$diet} ${tag}</p>
          <p class="diet-pl diet-pl--js">Wysokość diety po przeliczeniu: ${dietInPLN} PLN </p>
          <p class="rate rate--js">Kurs: ${rate}  ${tag} z dnia ${date}</p>`;
          let summaryHtml = document.querySelector(".main-summary");
          summaryHtml.innerHTML = template;
        }

        console.log(code + " " + mid);
      }
    }
  });

if (localStorage.getItem("tag") == "pl") {
  tag = "PLN";
  let template = ` <p class="data-in data-in--js">Pobyt od : ${$dateIn} </p>
<p class="data-out data-out--js">Pobyt do : ${$dateOut} </p>
<p class="duration duration--js">Długość pobytu : ${$duration}</p>
<p class="diet diet--js">Wysokość diety : ${$diet} ${tag}</p>`;
  let summaryHtml = document.querySelector(".main-summary");
  summaryHtml.innerHTML = template;
}
if (localStorage.getItem("tag") == "world") {
  let template = ` <p class="data-in data-in--js">Pobyt od : ${$dateIn}</p>
<p class="data-out data-out--js">Pobyt do : ${$dateOut}</p>
<p class="duration duration--js">Długość pobytu : ${$duration}</p>
<p class="diet-pl diet-pl--js">Wysokość diety : ${$diet} ${tag}</p>
<p class="diet-pl diet-pl--js">Wysokość diety po przeliczeniu: </p>
<p class="rate rate--js">Kurs: ${rate}  ${tag}</p>`;
  let summaryHtml = document.querySelector(".main-summary");
  summaryHtml.innerHTML = template;
}

/*console.log(dateIn);
dateIn.innerHTML = "Pobyt od: " + $dateIn;
dateOut.innerHTML = "Pobyt do: " + $dateOut;
duration.innerHTML = "Długość pobytu: " + $duration;
diet.innerHTML = "Wyskokść diety: " + $diet + tag;*/
