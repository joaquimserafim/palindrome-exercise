import { isPalindrome } from "./index";

//
//
//

describe("testing isPalindrome", () => {
	test("should return true", () => {
		expect.hasAssertions();
		expect(isPalindrome("racecar")).toBe(true);
	});

	test("should return true", () => {
		expect.hasAssertions();
		expect(isPalindrome("A man, a plan, a canal, Panama!")).toBe(true);
	});

	test("should return false", () => {
		expect.hasAssertions();
		expect(isPalindrome("hello")).toBe(false);
	});
});
