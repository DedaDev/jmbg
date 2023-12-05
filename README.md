# JMBG is small utility tool for Unique Master Citizen Number

It works for every ID of the citizens of ex-yu:

Bosnia, Croatia, Serbia, Slovenia, Montenegro, Northern Macedonia

## Usage

### Node.js

```js
const jmbg = require('jmbg');

jmbg.isValid('2206978816007') //true

jmbg.decode('2206978816007') 
/*
{ 
    year: 1978,
    month: 6,
    day: 22,
    gender: 'Female',
    region: 'Vojvodina',
    place: 'Sombor'
}
*/

jmbg.generateRandom() // '2005006982505' (generates random valid JMBG)

jmbg.controlNumber('200500698250') // 5
```

## Contribution

For testing, use `npm run test` or `yarn test`.