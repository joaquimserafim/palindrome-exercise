//
//
//

export const isPalindrome = (str: string) => {
	const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

	const len = cleanStr.length;
	const middle = (len / 2) << 0;

	for (let i = 0; i < middle; i++) {
		if (cleanStr[i] !== cleanStr[len - 1 - i]) {
			return false;
		}
	}

	return true;
};
