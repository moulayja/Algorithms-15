
/*
Write a function that swaps the first pair (1st and 2nd characters) with the second pair (3rd and 4th characters) for every quadruplet substring.

Examples
swapTwo("ABCDEFGH") ➞ "CDABGHEF"

swapTwo("AABBCCDDEEFF") ➞ "BBAADDCCFFEE"

swapTwo("munchkins") ➞ "ncmuinhks"

swapTwo("FFGGHHI") ➞ "GGFFHHI
*/

function swapTwo(s) {
	const patt = /\w{4}/g;
	return (s.match(patt)||[]).map(el => el.slice(2,4) + el.slice(0,2)).join`` +
				 s.split(patt).slice(-1);
}

Swapping Two by Two
