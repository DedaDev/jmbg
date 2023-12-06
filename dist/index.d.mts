interface PersonData {
    dateOfBirth: Date;
    country: Countries;
    region: string | null;
    gender: Gender;
}
type JMBG = `${number}`;
declare enum Countries {
    Bosnia = "Bosnia and Herzegovina",
    NorthMacedonia = "North Macedonia",
    Slovenia = "Slovenia",
    Serbia = "Serbia",
    Unknown = "Unknown"
}
type Gender = "Male" | "Female";

/**
 * Generates a random JMBG.
 */
declare const generateRandomJMBG: () => string;
/**
 * Decodes the JMBG into birthdate, region, place and gender.
 * @param {string} jmbg JMBG of the individual
 * @throws Will throw an error if JMBG is invalid.
 * @returns {PersonData} Object containing parsed data.
 */
declare const decodeJMBG: (jmbg: JMBG) => PersonData;
/**
 * Checks if JMBG is valid.
 * @param {string} jmbg JMBG of the individual
 */
declare const isValidJMBG: (jmbg: JMBG) => boolean;
/**
 * Get the control number for JMBG
 * @param {string} jmbg JMBG of the individual
 * @throws Throws an error if JMBG is invalid
 */
declare function getBirthDate(jmbg: JMBG): Date;
/**
 * Get the control number for JMBG
 * @param {string} jmbg JMBG of the individual
 * @throws Throws an error if JMBG is invalid
 */
declare function getControlNumber(jmbg: string): number;

export { decodeJMBG, generateRandomJMBG, getBirthDate, getControlNumber, isValidJMBG };
