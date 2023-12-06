# JMBG

JMBG is a tiny utility tool for managing Unique Master Citizen Number for citizens of Bosnia, Serbia, Slovenia and North Macedonia.

It supports ESM, CommonJS, and it has typescript types included.

## Installation

```
npm install jmbg
```

## Usage

```ts
import { isValidJMBG, decodeJMBG, generateRandomJMBG } from "jmbg";

isValidJMBG('2206978816007') // true

decodeJMBG('2206978816007')
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
generateRandomJMBG() // '2005006982505' (generates random valid JMBG)
```

or using CommonJS

```js
const jmbg = require('jmbg');

jmbg.isValidJMBG('2206978816007')
jmbg.decodeJMBG('2206978816007')
jmbg.generateRandomJMBG()

```

## Sources


- Bosnia and Herzegovina: https://advokat-prnjavorac.com/zakoni/Zakon-o-JMB-BiH.pdf 
- Slovenia: http://www.pisrs.si/Pis.web/pregledPredpisa?id=ZAKO1708
- Serbia: https://www.paragraf.rs/propisi/zakon-o-jedinstvenom-maticnom-broju-gradjana.html
- Macedonia: https://mvr.gov.mk/Upload/Documents/Zakon%20za%20maticen%20broj%20precisten.doc

## Contribution

Feel free to contribute!

Fork the project, make your own branch with a new feature, after it's done create a PR on this repo.

For testing, use `npm run test` or `yarn test`.