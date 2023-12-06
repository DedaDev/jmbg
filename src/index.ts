import { regions } from "./regions";
import {Countries, Gender, JMBG, PersonData} from "./type";

const INVALID_JMBG_ERROR = new Error("Invalid JMBG provided!");

/**
 * Generates a random JMBG.
 */
export const generateRandomJMBG = () => {
    const randomDate = generateRandomDate();
    const year = randomDate.getFullYear();
    const month = (randomDate.getMonth() + 1).toString().padStart(2, "0");
    const day = (randomDate.getDate()).toString().padStart(2, "0");

    const randomRegionNumber = Math.floor(Math.random() * 10) + 89;
    const randomGenderNumber = (Math.floor(Math.random() * 999)).toString().padStart(3, "0");
    const jmbgWHControl = day + month + year.toString().substring(1) + randomRegionNumber + randomGenderNumber;
    return jmbgWHControl + getControlNumber(jmbgWHControl);
};

/**
 * Decodes the JMBG into birthdate, region, place and gender.
 * @param {string} jmbg JMBG of the individual
 * @throws Will throw an error if JMBG is invalid.
 * @returns {PersonData} Object containing parsed data.
 */
export const decodeJMBG = (jmbg: JMBG): PersonData => {
    if (!isValidJMBG(jmbg)) throw INVALID_JMBG_ERROR;
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
        gender,
    };
};


/**
 * Checks if JMBG is valid.
 * @param {string} jmbg JMBG of the individual
 */
export const isValidJMBG = (jmbg: JMBG): boolean => {
    if (!/^\d{13}$/.test(jmbg)) return false;
    const inputControlNumber = parseInt(jmbg.charAt(jmbg.length - 1), 10);
    const generatedControlNumber = getControlNumber(jmbg);
    if (generatedControlNumber !== inputControlNumber) return false;
    const birthDate = getBirthDate(jmbg);
    const now = new Date();
    return birthDate < now;
};


/**
 * Get the control number for JMBG
 * @param {string} jmbg JMBG of the individual
 * @throws Throws an error if JMBG is invalid
 */
export function getBirthDate(jmbg: JMBG): Date {
    formatValidation(jmbg);
    const year = parseInt((jmbg[4] === "9" ? "1" : "2") + jmbg[4] + jmbg[5] + jmbg[6], 10);
    const month = parseInt(jmbg[2] + jmbg[3], 10) - 1;
    const day = parseInt(jmbg[0] + jmbg[1], 10);
    return new Date(year, month, day);
}

/**
 * Get the control number for JMBG
 * @param {string} jmbg JMBG of the individual
 * @throws Throws an error if JMBG is invalid
 */
export function getControlNumber(jmbg: string): number {
    // this function can take scrap jmbg or full jmbg
    if (!/^\d{12,13}$/.test(jmbg)) throw INVALID_JMBG_ERROR;
    const s = jmbg.split("").map((e) => parseInt(e, 10));
    const controlModulo = 11 - ((7 * (s[0] + s[6]) + 6 * (s[1] + s[7]) + 5 * (s[2] + s[8]) + 4 * (s[3] + s[9]) + 3 * (s[4] + s[10]) + 2 * (s[5] + s[11])) % 11);
    return controlModulo > 9 ? 0 : controlModulo;
}


function formatValidation(jmbg: JMBG) {
    if (!/^\d{13}$/.test(jmbg)) throw INVALID_JMBG_ERROR;
}

function getCountry(regionNumber: number) {
    if(regionNumber >= 11 && regionNumber <= 19) return Countries.Bosnia;
    if(regionNumber >= 41 && regionNumber <= 49) return Countries.NorthMacedonia;
    if(regionNumber === 50) return Countries.Slovenia;
    if(regionNumber >= 71 && regionNumber <= 97) return Countries.Serbia;
    return Countries.Unknown;
}

function getRegion(regionNumber: number) {
    return regions[regionNumber] || null;
}

function getGender(genderNumber: number): Gender  {
    return genderNumber < 500 ? "Male" : "Female";
}

function generateRandomDate() {
    const from = new Date(1950, 0, 1);
    const to = new Date();
    return  new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
}