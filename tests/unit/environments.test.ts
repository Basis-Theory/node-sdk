import { BasisTheoryEnvironment } from "../../src/environments";

describe("BasisTheoryEnvironment", () => {
    // Pins the host each environment resolves to. Us and Eu both resolved to the
    // compatibility host until the spec grew per-region servers, so the constants
    // existed but selected nothing. These assertions fail if a regeneration
    // collapses them back.
    const cases: [keyof typeof BasisTheoryEnvironment, string][] = [
        ["Default", "https://api.basistheory.com"],
        ["Us", "https://api.us.basistheory.com"],
        ["Eu", "https://api.eu.basistheory.com"],
        ["Test", "https://api.test.basistheory.com"],
    ];

    it.each(cases)("resolves %s to its host", (name, expected) => {
        expect(BasisTheoryEnvironment[name]).toBe(expected);
    });

    it("keeps an unconfigured client on the compatibility host", () => {
        expect(BasisTheoryEnvironment.Default).toBe("https://api.basistheory.com");
    });

    it("resolves every environment to a distinct host", () => {
        const urls = Object.values(BasisTheoryEnvironment);
        expect(new Set(urls).size).toBe(urls.length);
    });
});
