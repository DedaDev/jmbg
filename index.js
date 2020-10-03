const regions = require('./regions.json')
 
function getDate(jmbg) {
  const s = jmbg.split('').map(e=>Number(e))
  const year = Number((s[4] === 9 ? '1' : '2') + s[4] + s[5] + s[6])
  const month = Number(String(s[2]) + s[3]) - 1
  const day = Number(String(s[0]) + s[1])
  return {year, month, day}
}

function getControlNmb(jmbg) {
  const s = jmbg.split('').map(e=>Number(e))
  const controlModulo = 11 - (( 7*(s[0]+s[6]) + 6*(s[1]+s[7]) + 5*(s[2]+s[8]) + 4*(s[3]+s[9]) + 3*(s[4]+s[10]) + 2*(s[5]+s[11]) ) % 11)
  return controlModulo > 9 ? 0 : controlModulo
}

module.exports = {
  decode: function(jmbg) {
    if(this.isValid(jmbg)){
      const {year, month, day} = getDate(jmbg)
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
    throw new Error('Invalid JMBG')
  },
  isValid: function(jmbg) {
    if(jmbg.length !== 13) return false
    if(getControlNmb(jmbg) !== Number(jmbg.charAt(jmbg.length-1))) return false
    const {year, month, day} = getDate(jmbg)
    const date = new Date(year, month, day)
    const now = new Date()
    return date < now
  },
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
  controlNumber: function(jmbg) {
    if(jmbg.length >= 12 && jmbg.length <= 13) throw new Error('Invalid JMBG')
    return getControlNmb(jmbg)
  }
}
