# JMBG is small utility tool for Unique Master Citizen Number

It works for every ID of the citizens of ex-yu.

Bosnia, Croatia, Serbia, Slovenia, Montenegro, Northern Macedonia

```js
const jmbg = require('jmbg');

jmbg.isValid('2206978816007') //true

jmbg.decode('2206978816007') 
/*{
    err: null, 
    data { 
        year: 1978, 
        month: 06, 
        day: 22, 
        gender: 'Female', 
        region: 'Vojvodina', 
        place: 'Sombor' 
    }
}*/

jmbg.generate() // '2005006982505' (generates random valid JMBG)

jmbg.controlNumber('200500698250') // 5
```