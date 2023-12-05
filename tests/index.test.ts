import {isValidJMBG, decodeJMBG, controlNumber, generateRandomJMBG} from '../src'

test('checks if jmbg is valid', () => {
  expect(isValidJMBG('2206978816007')).toBe(true);
  expect(isValidJMBG('22069788160sd')).toBe(false);
  expect(isValidJMBG('220697881600')).toBe(false);
  expect(isValidJMBG('2299978816007')).toBe(false);
});

test('decodes jmbg', () => {
  expect(decodeJMBG('2206978816007')).toStrictEqual({
    year: 1978,
    month: 6,
    day: 22,
    gender: 'Female',
    region: 'Vojvodina',
  });

  function testInvalidJMBG() {
    decodeJMBG('22069788160');
  }
  expect(testInvalidJMBG).toThrowError();
});

test('gets control number', () => {
  expect(controlNumber('200500698250')).toBe(5);

  function testInvalidJMBG() {
    controlNumber('20050069825');
  }
  expect(testInvalidJMBG).toThrowError();
});

test('gets random valid JMBG', () => {
  expect(isValidJMBG(generateRandomJMBG())).toBe(true);
});
