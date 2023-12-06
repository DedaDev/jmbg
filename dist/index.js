"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  decodeJMBG: () => decodeJMBG,
  generateRandomJMBG: () => generateRandomJMBG,
  getBirthDate: () => getBirthDate,
  getControlNumber: () => getControlNumber,
  isValidJMBG: () => isValidJMBG
});
module.exports = __toCommonJS(src_exports);

// src/regions.ts
var regions = {
  // bosnia
  11: "Banja Luka, \u010Celinac, Gradi\u0161ka, Isto\u010Dni Drvar, Jezero,Kne\u017Eevo, Kostajnica, Kotor Varo\u0161, Kozarska Dubica, Krupa na Uni, Kupres, Lakta\u0161i, Mrkonji\u0107 Grad, Novi Grad, O\u0161tra Luka, Petrovac, Prijedor, Prnjavor, Ribnik, Srbac i \u0160ipovo.",
  12: "Bijeljina, Brod, Derventa, Doboj, Donji \u017Dabar, Lopare, Modri\u010Da, Pelagi\u0107evo, Petrovo, Stanari, Tesli\u0107, Ugljevik, Vukosavlje i \u0160amac.",
  13: "Bile\u0107a, Berkovi\u0107i, Bratunac, \u010Cajni\u010De, Fo\u010Da, Gacko, Han Pijesak, Isto\u010Dna Ilid\u017Ea, Isto\u010Dni Mostar, Isto\u010Dni Stari grad, Isto\u010Dno Novo Sarajevo, Kalinovik, Ljubinje, Mili\u0107i, Nevesinje, Novo Gora\u017Ede, Osmaci, Pale, Rogatica, Rudo, Srebrenica, Sokolac, \u0160ekovi\u0107i, Trebinje, Trnovo, Vi\u0161egrad, Vlasenica i Zvornik.",
  14: "Br\u010Dko Distrikt",
  15: "\u010Capljina, \u010Citluk, Grude, Jablanica, Konjic, Ljubu\u0161ki, Mostar, Neum, Posu\u0161je, Prozor, Ravno, Stolac i \u0160iroki Brijeg.",
  16: "Biha\u0107, Bosanska Krupa, Bosanski Petrovac, Bosansko Grahovo, Bu\u017Eim, Cazin, Drvar, Glamo\u010D, Klju\u010D, Kupres, Livno, Sanski Most, Tomislavgrad i Velika Kladu\u0161a.",
  17: "Centar Sarajevo, Fo\u010Da, Gora\u017Ede, Had\u017Ei\u0107i, Ilid\u017Ea, Ilija\u0161, Novo Sarajevo, Pale, Sarajevo Novi grad, Sarajevo Stari grad, Trnovo i Vogo\u0161\u0107a",
  18: "Banovi\u0107i, \u010Celi\u0107, Doboj-Istok, Domaljevac-\u0160amac, Gra\u010Danica, Grada\u010Dac, Kalesija, Kladanj, Lukavac, Od\u017Eak, Ora\u0161je, Sapna, Srebrenik, Teo\u010Dak, Tuzla i \u017Divinice",
  19: "Bugojno, Breza, Busova\u010Da, Doboj-Jug, Dobreti\u0107i, Donji Vakuf, Fojnica, Gornji Vakuf, Jajce, Kakanj, Kiseljak, Kre\u0161evo, Maglaj, Novi Travnik, Olovo, Travnik, Te\u0161anj, Usora, Vare\u0161, Visoko, Vitez, Zavidovi\u0107i, Zenica i \u017Dep\u010De.",
  // macedonia
  41: "Bitola",
  42: "Kumanovo",
  43: "Ohrid",
  44: "Prilep",
  45: "Skopje",
  46: "Strumica",
  47: "Tetovo",
  48: "Veles",
  49: "\u0160tip",
  // slovenia
  50: "Slovenia",
  // serbia
  71: "Beograd",
  72: "Aran\u0111elovac, Bato\u010Dina, Despotovac, Jagodina, Kni\u0107, Kragujevac, Lapovo, Para\u0107in, Ra\u010Da, Rekovac, Svilajnac, Topola i \u0106uprija.",
  73: "Aleksinac, Babu\u0161nica, Bela Palanka, Blace, Dimitrovgrad, Doljevac, Gad\u017Ein Han, Kur\u0161umlija, Mero\u0161ina, Ni\u0161, Ni\u0161ka Banja, Pirot, Prokuplje, Ra\u017Eanj, Svrljig i \u017Ditora\u0111a.",
  74: "Bojnik, Bosilegrad, Bujanovac, Crna Trava, Lebane, Leskovac, Medve\u0111a, Pre\u0161evo, Surdulica, Trgovi\u0161te, Vladi\u010Din Han, Vlasotince i Vranje.",
  75: "Boljevac, Bor, Kladovo, Knja\u017Eevac, Majdanpek, Negotin, Soko Banja i Zaje\u010Dar.",
  76: "Golubac, Ku\u010Devo, Malo Crni\u0107e, Petrovac na Mlavi, Po\u017Earevac, Smederevo, Smederevska Palanka, Velika Plana, Veliko Gradi\u0161te, \u017Dabari i \u017Dagubica.",
  77: "Bogati\u0107, Koceljeva, Krupanj, Lajkovac, Loznica, Ljig, Ljubovija, Mali Zvornik, Mionica, Ose\u010Dina, Ub, Valjevo, Vladimirci i \u0160abac.",
  78: "Aleksandrovac, Brus, Gornji Milanovac, Kraljevo, Kru\u0161evac, Lu\u010Dani, Novi Pazar, Ra\u0161ka, Sjenica, Trstenik, Tutin, Varvarin, Vrnja\u010Dka Banja, \u0106i\u0107evac i \u010Ca\u010Dak.",
  79: "Arilje, Bajina Ba\u0161ta, Ivanjica, Kosjeri\u0107, Nova Varo\u0161, Po\u017Eega, Priboj, Prijepolje, U\u017Eice i \u010Cajetina.",
  80: "Ba\u010D, Ba\u010Dka Palanka, Ba\u010Dki Petrovac, Beo\u010Din, Novi Sad, Sremski Karlovci, Temerin, Titel i \u017Dabalj.",
  81: "Apatin, Od\u017Eaci i Sombor.",
  82: "Ada, Ba\u010Dka Topola, Kanji\u017Ea, Kula, Mali I\u0111o\u0161, Senta i Subotica.",
  83: "Be\u010Dej, Srbobran i Vrbas.",
  84: "Kikinda, Nova Crnja, Novi Kne\u017Eevac i \u010Coka.",
  85: "Novi Be\u010Dej, Se\u010Danj, Zrenjanin i \u017Diti\u0161te.",
  86: "Alibunar, Kova\u010Dica, Kovin, Opovo i Pan\u010Devo.",
  87: "Bela Crkva, Plandi\u0161te i Vr\u0161ac.",
  88: "In\u0111ija, Irig, Pe\u0107inci, Ruma i Stara Pazova.",
  89: "Sremska Mitrovica i \u0160id.",
  91: "Glogovac, Kosovo Polje, Lipljan, Novo Brdo, Obili\u0107, Podujevo i Pri\u0161tina.",
  92: "Kosovska Mitrovica, Leposavi\u0107, Srbica, Vu\u010Ditrn, Zubin Potok i Zve\u010Dan.",
  93: "De\u010Dani, Istok, Klina i Pe\u0107.",
  94: "\u0110akovica.",
  95: "Draga\u0161, Gora, Mali\u0161evo, Opolje, Orahovac, Prizren i Suva Reka.",
  96: "Ka\u010Danik, Uro\u0161evac, \u0160timlje i \u0160trpce.",
  97: "Gnjilane, Kosovska Kamenica i Vitina."
};

// src/index.ts
var INVALID_JMBG_ERROR = new Error("Invalid JMBG provided!");
var generateRandomJMBG = () => {
  const randomDate = generateRandomDate();
  const year = randomDate.getFullYear();
  const month = (randomDate.getMonth() + 1).toString().padStart(2, "0");
  const day = randomDate.getDate().toString().padStart(2, "0");
  const randomRegionNumber = Math.floor(Math.random() * 10) + 89;
  const randomGenderNumber = Math.floor(Math.random() * 999).toString().padStart(3, "0");
  const jmbgWHControl = day + month + year.toString().substring(1) + randomRegionNumber + randomGenderNumber;
  return jmbgWHControl + getControlNumber(jmbgWHControl);
};
var decodeJMBG = (jmbg) => {
  if (!isValidJMBG(jmbg))
    throw INVALID_JMBG_ERROR;
  const dateOfBirth = getBirthDate(jmbg);
  const regionNumber = parseInt(jmbg[7] + jmbg[8], 10);
  const genderNumber = parseInt(jmbg[9] + jmbg[10] + jmbg[11], 10);
  const region = getRegion(regionNumber);
  const gender = getGender(genderNumber);
  const country = getCountry(regionNumber);
  return {
    dateOfBirth,
    country,
    region,
    gender
  };
};
var isValidJMBG = (jmbg) => {
  if (!/^\d{13}$/.test(jmbg))
    return false;
  const inputControlNumber = parseInt(jmbg.charAt(jmbg.length - 1), 10);
  const generatedControlNumber = getControlNumber(jmbg);
  if (generatedControlNumber !== inputControlNumber)
    return false;
  const birthDate = getBirthDate(jmbg);
  const now = /* @__PURE__ */ new Date();
  return birthDate < now;
};
function getBirthDate(jmbg) {
  formatValidation(jmbg);
  const year = parseInt((jmbg[4] === "9" ? "1" : "2") + jmbg[4] + jmbg[5] + jmbg[6], 10);
  const month = parseInt(jmbg[2] + jmbg[3], 10) - 1;
  const day = parseInt(jmbg[0] + jmbg[1], 10);
  return new Date(year, month, day);
}
function getControlNumber(jmbg) {
  if (!/^\d{12,13}$/.test(jmbg))
    throw INVALID_JMBG_ERROR;
  const s = jmbg.split("").map((e) => parseInt(e, 10));
  const controlModulo = 11 - (7 * (s[0] + s[6]) + 6 * (s[1] + s[7]) + 5 * (s[2] + s[8]) + 4 * (s[3] + s[9]) + 3 * (s[4] + s[10]) + 2 * (s[5] + s[11])) % 11;
  return controlModulo > 9 ? 0 : controlModulo;
}
function formatValidation(jmbg) {
  if (!/^\d{13}$/.test(jmbg))
    throw INVALID_JMBG_ERROR;
}
function getCountry(regionNumber) {
  if (regionNumber >= 11 && regionNumber <= 19)
    return "Bosnia and Herzegovina" /* Bosnia */;
  if (regionNumber >= 41 && regionNumber <= 49)
    return "North Macedonia" /* NorthMacedonia */;
  if (regionNumber === 50)
    return "Slovenia" /* Slovenia */;
  if (regionNumber >= 71 && regionNumber <= 97)
    return "Serbia" /* Serbia */;
  return "Unknown" /* Unknown */;
}
function getRegion(regionNumber) {
  return regions[regionNumber] || null;
}
function getGender(genderNumber) {
  return genderNumber < 500 ? "Male" : "Female";
}
function generateRandomDate() {
  const from = new Date(1950, 0, 1);
  const to = /* @__PURE__ */ new Date();
  return new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  decodeJMBG,
  generateRandomJMBG,
  getBirthDate,
  getControlNumber,
  isValidJMBG
});
