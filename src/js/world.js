console.log("world page");
const $country = document.querySelector("#diet");
const countryNameArray = [];
const countryDietArray = [];
const countryCurrencyTagArray = [];
const xmlStrCountry =
  '<array name="panstwa"><item>Afganistan</item><item>Albania</item><item>Algieria</item><item>Andora</item><item>Angola</item><item>Arabia Saudyjska</item><item>Argentyna</item><item>Armenia</item><item>Australia</item><item>Austria</item><item>Azerbejdżan</item><item>Bangladesz</item><item>Belgia</item><item>Białoruś</item><item>Bośnia i Hercegowina</item><item>Brazylia</item><item>Bułgaria</item><item>Chile</item><item>Chiny</item><item>Chorwacja</item><item>Cypr</item><item>Czechy</item><item>Dania</item><item>Egipt</item><item>Ekwador</item><item>Estonia</item><item>Etiopia</item><item>Finlandia</item><item>Francja</item><item>Grecja</item><item>Gruzja</item><item>Hiszpania</item><item>Indie</item><item>Indonezja</item><item>Irak</item><item>Iran</item><item>Irlandia</item><item>Islandia</item><item>Izrael</item><item>Japonia</item><item>Jemen</item><item>Jordania</item><item>Kambodża</item><item>Kanada</item><item>Katar</item><item>Kazachstan</item><item>Kenia</item><item>Kirgistan</item><item>Kolumbia</item><item>Kongo, Demokratyczna Republika Konga</item><item>Korea Południowa</item><item>KoreańskaRepublikaLudowo-Demokratyczna</item><item>Kostaryka</item><item>Kuba</item><item>Kuwejt</item><item>Laos</item><item>Liban</item><item>Libia</item><item>Liechtenstein</item><item>Litwa</item><item>Luksemburg</item><item>Łotwa</item><item>Macedonia</item><item>Malezja</item><item>Malta</item><item>Maroko</item><item>Meksyk</item><item>Mołdowa</item><item>Monako</item><item>Mongolia</item><item>Niderlandy</item><item>Niemcy</item><item>Nigeria</item><item>Norwegia</item><item>Nowa Zelandia</item><item>Oman</item><item>Pakistan</item><item>Palestyńska Władza Narodowa</item><item>Panama</item><item>Peru</item><item>Portugalia</item><item>Republika Południowej Afryki</item><item>Rosja</item><item>Rumunia</item><item>SanMarino</item><item>Senegal</item><item>Republika Serbii i Republika Czarnogóry</item><item>Singapur</item><item>Słowacja</item><item>Słowenia</item><item>Stany Zjednoczone Ameryki</item><item>Syria</item><item>Szwajcaria</item><item>Szwecja</item><item>Tadżykistan</item><item>Tajlandia</item><item>Tanzania</item><item>Tunezja</item><item>Turcja</item><item>Turkmenistan</item><item>Ukraina</item><item>Urugwaj</item><item>Uzbekistan</item><item>Wenezuela</item><item>Węgry</item><item>WielkaBrytania</item><item>Wietnam</item><item>Włochy</item><item>Wybrzeże Kości Słoniowej</item><item>Zimbabwe</item><item>Zjednoczone Emiraty Arabskie</item></array>';
const xmlStrDietValue =
  '<array name="dietyPanstw"><item>47</item><item>41</item><item>50</item><item>50</item><item>61</item><item>45</item><item>50</item><item>42</item><item>88</item><item>52</item><item>43</item><item>50</item><item>48</item><item>42</item><item>41</item><item>43</item><item>40</item><item>60</item><item>55</item><item>42</item><item>43</item><item>41</item><item>406</item><item>55</item><item>44</item><item>41</item><item>55</item><item>48</item><item>50</item><item>48</item><item>43</item><item>50</item><item>38</item><item>41</item><item>60</item><item>41</item><item>52</item><item>56</item><item>50</item><item>7532</item><item>48</item><item>40</item><item>45</item><item>71</item><item>41</item><item>41</item><item>41</item><item>41</item><item>49</item><item>66</item><item>46</item><item>48</item><item>50</item><item>42</item><item>39</item><item>54</item><item>57</item><item>52</item><item>88</item><item>39</item><item>48</item><item>57</item><item>39</item><item>41</item><item>43</item><item>41</item><item>53</item><item>41</item><item>50</item><item>45</item><item>50</item><item>49</item><item>46</item><item>451</item><item>58</item><item>40</item><item>38</item><item>50</item><item>52</item><item>50</item><item>49</item><item>52</item><item>48</item><item>38</item><item>48</item><item>44</item><item>40</item><item>56</item><item>43</item><item>41</item><item>59</item><item>50</item><item>88</item><item>459</item><item>41</item><item>42</item><item>53</item><item>37</item><item>53</item><item>47</item><item>41</item><item>50</item><item>41</item><item>60</item><item>44</item><item>35</item><item>53</item><item>48</item><item>33</item><item>39</item><item>39</item></array>';
const xmlStrCurrencyTag =
  '<array name="waluty"><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>USD</item><item>EUR</item><item>AUD</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>DKK</item><item>USD</item><item>USD</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>JPY</item><item>USD</item><item>EUR</item><item>USD</item><item>CAD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>USD</item><item>USD</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>USD</item><item>USD</item><item>EUR</item><item>CHF</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>NOK</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>USD</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>USD</item><item>USD</item><item>CHF</item><item>SEK</item><item>EUR</item><item>USD</item><item>USD</item><item>EUR</item><item>USD</item><item>EUR</item><item>EUR</item><item>USD</item><item>EUR</item><item>USD</item><item>EUR</item><item>GBP</item><item>USD</item><item>EUR</item><item>EUR</item><item>EUR</item><item>EUR</item></array>';
const parser = new DOMParser();
const docCountry = parser.parseFromString(xmlStrCountry, "application/xml");
const docDiet = parser.parseFromString(xmlStrDietValue, "application/xml");
const docCurrency = parser.parseFromString(
  xmlStrCurrencyTag,
  "application/xml"
);
// print the name of the root element or error message
const errorNode = docCountry.querySelector("parsererror");
const errorNode1 = docDiet.querySelector("parsererror");
const errorNode2 = docCurrency.querySelector("parsererror");

if (errorNode || errorNode1) {
  console.log("error while parsing");
} else {
  // console.log(doc.documentElement.childNodes[0].textContent);
  for (const element of docCountry.documentElement.childNodes) {
    const country = element.textContent;
    countryNameArray.push(element.textContent);
    const countrHtml = `<option value="${country}">`;
    $country.innerHTML += countrHtml;
  }
  for (const element of docDiet.documentElement.childNodes) {
    countryDietArray.push(element.textContent);
  }
  for (const element of docCurrency.documentElement.childNodes) {
    countryCurrencyTagArray.push(element.textContent);
  }
}

class Country {
  constructor(name, dietValue, currencyTag) {
    this.name = name;
    this.dietValue = dietValue;
    this.currencyTag = currencyTag;
  }
}

const countryArray = [];

for (let i = 0; i < countryNameArray.length; i++) {
  let name = countryNameArray[i];
  let diet = countryDietArray[i];
  let currencyTag = countryCurrencyTagArray[i];
  countryArray.push(new Country(name, diet, currencyTag));
}

console.log(countryArray);
///////////////////////////////////////////////////////////
const buttonCalculateWorld = document.querySelector(
  ".form-world__calculate__button--js"
);

buttonCalculateWorld.addEventListener("click", calculatePl);

let daysOnTrip;
let hoursOnTrip;
let minutesOnTrip;
let diet;
let date1;
let date2;
let selectedCountry;
let countryName;
let currencyTag;
let dietValue;
let dateIn;
let timeIn;
let dateOut;
let timeOut;
let breakfast;
let dinner;
let supper;

function calculatePl() {
  let isCorrect;
  dateIn = document.querySelector(".form-world__date-in--js").value;
  timeIn = document.querySelector(".form-world__time-in--js").value;
  dateOut = document.querySelector(".form-world__date-out--js").value;
  timeOut = document.querySelector(".form-world__time-out--js").value;
  selectedCountry = document.querySelector("#diet-choice").value;

  breakfast = parseInt(
    document.querySelector(".form-world__grid__input-breakfast--js").value
  );
  dinner = parseInt(
    document.querySelector(".form-world__grid__input-dinner--js").value
  );
  supper = parseInt(
    document.querySelector(".form-world__grid__input-super--js").value
  );

  if (!selectedCountry) {
    window.alert("Wybierz kraj podróży");
  }
  if (selectedCountry) {
    for (const element of countryArray) {
      if (element.name == selectedCountry) {
        dietValue = parseInt(element.dietValue);
        currencyTag = element.currencyTag;
        console.log(element.dietValue);
        console.log(element.currencyTag);
        isCorrect = true;

        validation();
      }
    }
    if (!isCorrect) {
      window.alert("Nie poprawna nazwa kraju");
    }
  }
}

function validation() {
  if (dietValue < 0) dietValue = 0;
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

  if (hoursOnTrip > 12 && minutesOnTrip >= 0) {
    diet = dietValue * daysOnTrip + dietValue;
  }
  if (hoursOnTrip == 12 && minutesOnTrip >= 1) {
    diet = dietValue * daysOnTrip + dietValue;
  }
  if (hoursOnTrip == 12 && minutesOnTrip == 0) {
    diet = dietValue * daysOnTrip + dietValue / 2;
  }
  if (hoursOnTrip >= 9 && hoursOnTrip < 12) {
    diet = dietValue * daysOnTrip + dietValue / 2;
  }
  if (hoursOnTrip == 8 && minutesOnTrip > 0) {
    diet = dietValue * daysOnTrip + dietValue / 2;
  }
  if (hoursOnTrip == 8 && minutesOnTrip == 0) {
    diet = dietValue * daysOnTrip + dietValue / 3;
  }
  if (hoursOnTrip < 8 && hoursOnTrip > 0 && minutesOnTrip >= 0) {
    diet = dietValue * daysOnTrip + dietValue / 3;
  }
  if (hoursOnTrip < 8 && hoursOnTrip >= 0 && minutesOnTrip >= 1) {
    diet = dietValue * daysOnTrip + dietValue / 3;
  }
  if (hoursOnTrip == 0 && minutesOnTrip == 0) {
    diet = dietValue * daysOnTrip;
  }

  diet -= breakfast * (dietValue * 0.25);
  diet -= dinner * (dietValue * 0.5);
  diet -= supper * (dietValue * 0.25);

  console.log(
    "dni: " + daysOnTrip + " hours: " + hoursOnTrip + " min: " + minutesOnTrip
  );
  console.log("stawka: " + dietValue);
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
  localStorage.setItem("currencyTag", currencyTag);
  localStorage.setItem("tag", "world");

  window.location.href = "./summary.html";
}
