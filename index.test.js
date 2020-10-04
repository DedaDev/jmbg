const { InvalidJMBGError } = require('.');
const jmbg = require('.');

test('checks if jmbg is valid', () => {
	expect(jmbg.isValid('2206978816007')).toBe(true)
	expect(jmbg.isValid('22069788160sd')).toBe(false)
	expect(jmbg.isValid('220697881600')).toBe(false)
	expect(jmbg.isValid('2299978816007')).toBe(false)
})

test('decodes jmbg', () => {
	expect(jmbg.decode('2206978816007')).toStrictEqual({
		year: 1978, 
		month: 6, 
		day: 22, 
		gender: 'Female', 
		region: 'Vojvodina', 
		place: 'Sombor' 
	})

	function testInvalidJMBG() {
		jmbg.decode('22069788160')
	}
	expect(testInvalidJMBG).toThrowError(InvalidJMBGError)
})

test('gets control number', () => {
	expect(jmbg.controlNumber('200500698250')).toBe(5)

	function testInvalidJMBG() {
		jmbg.controlNumber('20050069825')
	}
	expect(testInvalidJMBG).toThrowError(InvalidJMBGError)
})

test('gets random valid JMBG', () => {
	expect(jmbg.isValid(jmbg.random())).toBe(true)
})
