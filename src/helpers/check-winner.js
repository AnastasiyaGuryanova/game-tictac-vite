import { WIN_PATTERNS } from "@constants";

export const checkWinner = (field) => {
	return WIN_PATTERNS.some((pattern) => {
		const [a, b, c] = pattern;
		return field[a] && field[a] === field[b] && field[a] === field[c];
	});
};
