const regions = [
  {
    label: 'Stranci bez državljanstva.',
    regions: {
      '01': 'BiH',
      '02': 'Crna Gora',
      '03': 'Hrvatska',
      '04': 'Makedonija',
      '05': 'Slovenija',
      '07': 'Srbija',
      '08': 'Vojvodina',
      '09': 'KiM',
    },
  },
  {
    label: 'Bosna i Hercegovina',
    regions: {
      10: 'Banja Luka',
      11: 'Bihać',
      12: 'Doboj',
      13: 'Goražde',
      14: 'Livno',
      15: 'Mostar',
      16: 'Prijedor',
      17: 'Sarajevo',
      18: 'Tuzla',
      19: 'Zenica',
    },
  },
  {
    label: 'Crna Gora',
    regions: {
      21: 'Podgorica',
      26: 'Nikšić',
      29: 'Pljevlja',
    },
  },
  {
    label: 'Hrvatska',
    regions: {
      30: 'Osijek, Slavonija region',
      31: 'Bjelovar, Virovitica, Koprivnica, Pakrac, Podravina region',
      32: 'Varaždin, Međumurje region',
      33: 'Zagreb',
      34: 'Karlovac',
      35: 'Gospić, Lika region',
      36: 'Rijeka, Pula, Istra and Primorje region',
      37: 'Sisak, Banovina region',
      38: 'Split, Zadar, Dubrovnik, Dalmacija region',
    },
  },
  {
    label: 'Makedonija',
    regions: {
      41: 'Bitola',
      42: 'Kumanovo',
      43: 'Ohrid',
      44: 'Prilep',
      45: 'Skopje',
      46: 'Strumica',
      47: 'Tetovo',
      48: 'Veles',
      49: 'Štip',
    },
  },
  {
    label: 'Slovenija',
  },
  {
    label: 'Nepoznato',
  },
  {
    label: 'Centralna Srbija',
    regions: {
      71: 'Beograd',
      72: 'Šumadija',
      73: 'Niš',
      74: 'Južna Morava',
      75: 'Zaječar',
      76: 'Podunavlje',
      77: 'Podrinje i Kolubara',
      78: 'Kraljevo',
      79: 'Užice',
    },
  },
  {
    label: 'Vojvodina',
    regions: {
      80: 'Novi Sad',
      81: 'Sombor',
      82: 'Subotica',
      85: 'Zrenjanin',
      86: 'Pančevo',
      87: 'Kikinda',
      88: 'Ruma',
      89: 'Sremska Mitrovica',
    },
  },
  {
    label: 'Kosovo i Metohija',
    regions: {
      91: 'Priština',
      92: 'Kosovska Mitrovica',
      93: 'Peć',
      94: 'Đakovica',
      95: 'Prizren',
      96: 'Kosovsko Pomoravski okrug',
    },
  },
];

const INVALID_JMBG_ERROR = new Error('Invalid JMBG');

function getDate(jmbg) {
  const s = jmbg.split('').map((e) => parseInt(e, 10));
  const year = parseInt((s[4] === 9 ? '1' : '2') + s[4] + s[5] + s[6], 10);
  const month = parseInt(jmbg[2] + jmbg[3], 10) - 1;
  const day = parseInt(jmbg[0] + jmbg[1], 10);
  return {
    year, month, day, s,
  };
}

function getControlNmb(jmbg) {
  const s = jmbg.split('').map((e) => parseInt(e, 10));
  // eslint-disable-next-line max-len
  const controlModulo = 11 - ((7 * (s[0] + s[6]) + 6 * (s[1] + s[7]) + 5 * (s[2] + s[8]) + 4 * (s[3] + s[9]) + 3 * (s[4] + s[10]) + 2 * (s[5] + s[11])) % 11);
  return controlModulo > 9 ? 0 : controlModulo;
}

/**
 * @typedef PersonData
 * @type {object}
 * @property {number} year year of birth
 * @property {number} month month of birth
 * @property {number} day day of birth
 * @property {string} region region of birth
 * @property {string} place place of birth
 * @property {string} gender persons gender
 */

window.jmbg = {
  /**
   * Decodes the JMBG into birth date, region, place and gender.
   * @param {string} jmbg JMBG of the individual
   * @throws Will throw an error if JMBG is invalid.
   * @returns {PersonData} Object containing parsed data.
   */
  decode(jmbg) {
    if (this.isValid(jmbg)) {
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
        place: region.regions[pr],
        gender,
      };
    }
    throw INVALID_JMBG_ERROR;
  },
  /**
   * Checks if JMBG is valid.
   * @param {string} jmbg JMBG of the individual
   * @returns {boolean}
   */
  isValid(jmbg) {
    if (!/^\d{13}$/.test(jmbg)) return false;
    if (getControlNmb(jmbg) !== parseInt(jmbg.charAt(jmbg.length - 1), 10)) return false;
    const { year, month, day } = getDate(jmbg);
    const date = new Date(year, month, day);
    const now = new Date();
    return date < now;
  },
  /**
   * Generates a random JMBG.
   * @returns {string}
   */
  generateRandom() {
    const from = new Date(1950, 0, 1);
    const to = new Date();
    const randomDate = new Date(from.getTime() + Math.random() * (to.getTime() - from.getTime()));
    const year = randomDate.getFullYear();
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const day = (randomDate.getDate()).toString().padStart(2, '0');
    const rndRegion = Math.floor(Math.random() * 29) + 70; // serbia only
    const jmbgWHControl = day + month + year.toString().substring(1) + rndRegion + (Math.floor(Math.random() * 999)).toString().padStart(3, '0');
    const jmbg = jmbgWHControl + getControlNmb(jmbgWHControl);
    return jmbg;
  },
  /**
   * Get the control number for JMBG
   * @param {string} jmbg JMBG of the individual
   * @throws Throws an error if JMBG is invalid
   * @returns {number}
   */
  controlNumber(jmbg) {
    if (!/^\d{12,13}$/.test(jmbg)) throw INVALID_JMBG_ERROR;
    return getControlNmb(jmbg);
  },
};
