const regions = require('./regions.json')

function getDate(jmbg) {
  const s = jmbg.split('').map(e=>Number(e))
  const year = Number((s[4] === 9 ? '1' : '2') + s[4] + s[5] + s[6])
  const month = Number(String(s[2]) + s[3]) - 1
  const day = Number(String(s[0]) + s[1])
  return {year, month, day, s}
}

function getControlNmb(jmbg) {
  const s = jmbg.split('').map(e=>Number(e))
  const controlModulo = 11 - (( 7*(s[0]+s[6]) + 6*(s[1]+s[7]) + 5*(s[2]+s[8]) + 4*(s[3]+s[9]) + 3*(s[4]+s[10]) + 2*(s[5]+s[11]) ) % 11)
  return controlModulo > 9 ? 0 : controlModulo
}

/**
 * @typedef PersonData
 * @type {object}
 * @property {number} year year of birth
 * @property {number} month month of birth
 * @property {number} day day of birth
 * @property {string} region region of birth
 * @property {string} place place of birth
 * @property {string} gender
 */

module.exports = {
  InvalidJMBGError: new Error('Invalid JMBG'),
  /**
   * Decodes the JMBG into birth date, region, place and gender.
   * @param {string} jmbg JMBG of the individual
   * @throws Will throw an error if JMBG is invalid.
   * @returns {PersonData} Object containing parsed data.
   */
  decode: function(jmbg) {
    if(this.isValid(jmbg)){
      const {year, month, day, s} = getDate(jmbg)
      const region = regions[s[7]]
      const pr = String(s[7]) + s[8]
      const genderNmb = Number(String(s[9]) + s[10] + s[11])
      const gender = genderNmb < 500 ? 'Male' : 'Female'
      return {
        year,
        month: month + 1,
        day,
        region: region.label,
        place: region.regions[pr],
        gender
      }
    }
    throw this.InvalidJMBGError
  },
  /**
   * Checks if JMBG is valid.
   * @param {string} jmbg JMBG of the individual
   * @returns {boolean}
   */
  isValid: function(jmbg) {
    if(!/^\d{13}$/.test(jmbg)) return false
    if(getControlNmb(jmbg) !== Number(jmbg.charAt(jmbg.length-1))) return false
    const {year, month, day} = getDate(jmbg)
    const date = new Date(year, month, day)
    const now = new Date()
    return date < now
  },
  /**
   * Generates a random JMBG.
   * @returns {string}
   */
  random: function() {
    const from = new Date(1950, 0, 1)
    const to = new Date()
    const randomDate = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
    const year = randomDate.getFullYear()
    const month = String(randomDate.getMonth() + 1).padStart(2, '0')
    const day = String(randomDate.getDate()).padStart(2, '0')
    const rndRegion = Math.floor(Math.random() * 29) + 70 // serbia only
    const jmbgWHControl = String(day) + month + String(year).substring(1) + rndRegion + String(Math.floor(Math.random() * 999)).padStart(3, '0')
    const jmbg = jmbgWHControl + getControlNmb(jmbgWHControl)
    return jmbg
  },
  /**
   * Get the control number for JMBG
   * @param {string} jmbg JMBG of the individual
   * @throws Throws an error if JMBG is invalid
   * @returns {number}
   */
  controlNumber: function(jmbg) {
    if(!/^\d{12,13}$/.test(jmbg)) throw this.InvalidJMBGError
    return getControlNmb(jmbg)
  }
}
