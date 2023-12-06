import {isValidJMBG, decodeJMBG, getControlNumber, generateRandomJMBG} from "../src";
import {JMBG} from "../src/type";

test("checks if jmbg is valid", () => {
    expect(isValidJMBG("2206978816007")).toBe(true);
    expect(isValidJMBG("22069788160sd" as JMBG)).toBe(false);
    expect(isValidJMBG("220697881600")).toBe(false);
    expect(isValidJMBG("2299978816007")).toBe(false);
});

test("decodes jmbg", () => {
    expect(decodeJMBG("2206978816007")).toStrictEqual({
        "country": "Serbia",
        "dateOfBirth": new Date("1978-06-21T23:00:00.000Z"),
        "region": "Apatin, Odžaci i Sombor.",
        "gender": "Female"
    });

    function testInvalidJMBG() {
        decodeJMBG("22069788160");
    }
    expect(testInvalidJMBG).toThrowError();
});

test("gets control number", () => {
    expect(getControlNumber("200500698250")).toBe(5);

    function testInvalidJMBG() {
        getControlNumber("20050069825");
    }
    expect(testInvalidJMBG).toThrowError();
});

test("gets random valid JMBG", () => {
    expect(isValidJMBG(generateRandomJMBG() as JMBG)).toBe(true);
});
