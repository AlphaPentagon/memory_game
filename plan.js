/* 

// create array of card objects ✅
// create new state for flipped cards ✅
// pass this state down as a prop to each card ✅
// when click on cards, add the object to new array ✅
	// limit this array to length of 2 ✅
// write logic that compares names of each card ✅
	// if card names match, then cards are left flipped ✅
	// if not they are turned back over ✅





4*4 grid

8 pairs of 2 matching cards

Each card would be an object - possibly a class?

E.g.

{
id: 1,
 name: "frog",
 flipped: "false,
 image_url: "frog.jpg",
 found: false,
}

When you click on the card it is loaded into a state and the flipped property set to true. Card is then turned over visually.

When you click on another card, the above is repeated for that card, but a check is made against the two - if the names of the two flipped cards match then their found properties are set to true, and they are shown on screen for the rest of the game.

If the names don't match then both cards have their flipped properties set back to false, and are visually turned over and loaded out of the state.

E.g. 

if (currentTurn[0].name === currentTurn[1].name) {

	currentTurn[0].found === true;
	currentTurn[1].found === true;
}

*/
