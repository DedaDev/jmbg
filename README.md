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

### Browser

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="../lib/bundle.js"></script>
        <title>JMBG</title>
    </head>
    <body>
        <h1 id="random"></h1>

        <script>
            const randomJMBG = jmbg.generateRandom()
            document.querySelector('#random').innerHTML = `Random JMBG: ${randomJMBG}`
        </script>
    </body>
    </html>
```

## Contribution

Please modify `index.js` for node package, and `standalone.js` for web version used directly into HTLM (without bundlers and common.js modules).
`standalone.js` should be identical to `index.js` except `module.export`, that equals to `window.jmbg` in the standalone version.


For testing, use `npm run test` or `yarn test`.

For building standalone library use `npm run build:standalone` or `yarn build:standalone`, targeted browsers are set in `babel.config.json`.