

/*

Create a function that determines whether or not a player is holding a Full House in their hand. A hand is represented as an array of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind.

To illustrate: ["A", "A", "A", "K", "K"] would be a Full House, since the player holds 3 aces and 2 kings.

Examples
isFullHouse(["A", "A", "A", "K", "K"]) ➞ true

isFullHouse(["3", "J", "J", "3", "3"]) ➞ true

isFullHouse(["10", "J", "10", "10", "10"]) ➞ false

isFullHouse(["7", "J", "3", "4", "2"]) ➞ false

*/

function isFullHouse(hand) {
	const sortedHand = hand.sort();
	if (hand[0] == hand[1] && hand[1] == hand[2] && hand[3] == hand[4]) {
		return true
	}
	return false
}