import {regions} from "./regions";

const INVALID_JMBG_ERROR = new Error('Invalid JMBG');

/**
 * Checks if JMBG is valid.
 * @param {string} jmbg JMBG of the individual
 */
export const isValidJMBG = (jmbg: string) => {
  if (!/^\d{13}$/.test(jmbg)) return false;
  if (getControlNmb(jmbg) !== parseInt(jmbg.charAt(jmbg.length - 1), 10)) return false;
  const { year, month, day } = getDate(jmbg);
  const date = new Date(year, month, day);
  const now = new Date();
  return date < now;
}

interface PersonData {
  year: number;
  month: number;
  day: number;
  region: string;
  place?: string;
  gender: string;
}

/**
 * Decodes the JMBG into birthdate, region, place and gender.
 * @param {string} jmbg JMBG of the individual
 * @throws Will throw an error if JMBG is invalid.
 * @returns {PersonData} Object containing parsed data.
 */
export const decodeJMBG = (jmbg: string): PersonData => {
  if (isValidJMBG(jmbg)) {
    const {
      year, month, day, s,
    } = getDate(jmbg);
    const region = regions[s[7]];
    const pr = jmbg[7] + jmbg[8];
    const genderNmb = parseInt(jmbg[9] + jmbg[10] + jmbg[11], 10);
    const gender = genderNmb < 500 ? 'Male' : 'Female';
    return {
      year,
      month: month + 1,
      day,
      region: region.label,
      gender,
    };
  }
  throw INVALID_JMBG_ERROR;
}
    /**
     * Generates a random JMBG.
     */
export const generateRandomJMBG = () => {
  const from = new Date(1950, 0, 1);
  const to = new Date();
  const randomDate = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
  const year = randomDate.getFullYear();
  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
  const day = (randomDate.getDate()).toString().padStart(2, '0');
  const rndRegion = Math.floor(Math.random() * 29) + 70; // serbia only
  const jmbgWHControl = day + month + year.toString().substring(1) + rndRegion + (Math.floor(Math.random() * 999)).toString().padStart(3, '0');
  return jmbgWHControl + getControlNmb(jmbgWHControl);
}


/**
 * Get the control number for JMBG
 * @param {string} jmbg JMBG of the individual
 * @throws Throws an error if JMBG is invalid
 */
export const  controlNumber = (jmbg: string) => {
  if (!/^\d{12,13}$/.test(jmbg)) throw INVALID_JMBG_ERROR;
  return getControlNmb(jmbg);
}


function getDate(jmbg: string) {
  const s = jmbg.split('').map((e) => parseInt(e, 10));
  const year = parseInt((s[4] === 9 ? '1' : '2') + s[4] + s[5] + s[6], 10);
  const month = parseInt(jmbg[2] + jmbg[3], 10) - 1;
  const day = parseInt(jmbg[0] + jmbg[1], 10);
  return {
    year, month, day, s,
  };
}

function getControlNmb(jmbg: string) {
  const s = jmbg.split('').map((e) => parseInt(e, 10));
  // eslint-disable-next-line max-len
  const controlModulo = 11 - ((7 * (s[0] + s[6]) + 6 * (s[1] + s[7]) + 5 * (s[2] + s[8]) + 4 * (s[3] + s[9]) + 3 * (s[4] + s[10]) + 2 * (s[5] + s[11])) % 11);
  return controlModulo > 9 ? 0 : controlModulo;
}
