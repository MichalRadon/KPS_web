!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}({5:function(t,e){function n(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,u=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return u=t.done,t},e:function(t){i=!0,c=t},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw c}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var r,a,c,u;console.log("summary");document.querySelector(".data-in--js"),document.querySelector(".data-out--js"),document.querySelector(".duration--js"),document.querySelector(".diet--js");var i=localStorage.getItem("dateIn"),l=localStorage.getItem("dateOut"),s=localStorage.getItem("time"),d=localStorage.getItem("diet");r=localStorage.getItem("currencyTag");fetch("http://api.nbp.pl/api/exchangerates/tables/a/").then((function(t){return t.json()})).then((function(t){var e,o=n(t);try{for(o.s();!(e=o.n()).done;){var p=e.value;console.log(p);var f=p.effectiveDate,y=p.rates;c=f;var m,g=n(y);try{for(g.s();!(m=g.n()).done;){var b=m.value,j=b.code,v=b.mid;if(j==r){u=(a=v)*d;var S=' <p class="data-in data-in--js">Pobyt od : '.concat(i,'</p>\n          <p class="data-out data-out--js">Pobyt do : ').concat(l,'</p>\n          <p class="duration duration--js">Długość pobytu : ').concat(s,'</p>\n          <p class="diet-pl diet-pl--js">Wysokość diety : ').concat(d," ").concat(r,'</p>\n          <p class="diet-pl diet-pl--js">Wysokość diety po przeliczeniu: ').concat(u,' PLN </p>\n          <p class="rate rate--js">Kurs: ').concat(a,"  ").concat(r," z dnia ").concat(c,"</p>");document.querySelector(".main-summary").innerHTML=S}console.log(j+" "+v)}}catch(t){g.e(t)}finally{g.f()}}}catch(t){o.e(t)}finally{o.f()}}));if("pl"==localStorage.getItem("tag")){r="PLN";var p=' <p class="data-in data-in--js">Pobyt od : '.concat(i,' </p>\n<p class="data-out data-out--js">Pobyt do : ').concat(l,' </p>\n<p class="duration duration--js">Długość pobytu : ').concat(s,'</p>\n<p class="diet diet--js">Wysokość diety : ').concat(d," ").concat(r,"</p>");document.querySelector(".main-summary").innerHTML=p}if("world"==localStorage.getItem("tag")){var f=' <p class="data-in data-in--js">Pobyt od : '.concat(i,'</p>\n<p class="data-out data-out--js">Pobyt do : ').concat(l,'</p>\n<p class="duration duration--js">Długość pobytu : ').concat(s,'</p>\n<p class="diet-pl diet-pl--js">Wysokość diety : ').concat(d," ").concat(r,'</p>\n<p class="diet-pl diet-pl--js">Wysokość diety po przeliczeniu: </p>\n<p class="rate rate--js">Kurs: ').concat(a,"  ").concat(r,"</p>");document.querySelector(".main-summary").innerHTML=f}}});