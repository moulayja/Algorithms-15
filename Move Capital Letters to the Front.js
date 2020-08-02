

/*

Create a function that moves all capital letters to the front of a word.

Examples
capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"

*/

function capToFront(s) {
	let upper ='';
	let lower ='';
	for(let letter of s){
		letter.toUpperCase() == letter ? upper += letter : lower+= letter;
	}
	return upper+lower
}

