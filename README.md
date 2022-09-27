# Fantasy Memory Game

Play the game [here](https://fantasy-memory-game.netlify.app/)

As a fun side project, I created a memory game using React, Typescript and Styled components.

I wanted to challenge myself to design and implement the logic myself without any tutorials and I'm really happy with the way it turned out. It was also a great way to continue learning, as I had only spent a day with using Typescript previously and never used styled components before. This proved challenging at times, but I found the official docs for both really helpful and concise.

## Reflections

- Writing games/game logic in React is different to doing so in vanilla JS - I found that I had to useEffects to almost act as event listeners instead of conditional statements in a main game loop e.g. a useEffect is fired when 2 cards have been selected that fires a function that checks if the cards are a match or not. I tried to implement this without a useEffect (as the offical React docs recommend that useEffects aren't used in this way) but unfortunately I could not find a viable alternative.

- The introduction of types via typescript helps with squashing bugs and making the code predictable, but really slowed down my development. Part of this is due to me not using Typescript much before, so there was a steep learning curve, but I found myself spending a lot more time adding type/interface definitions, and debugging my code to make typescript happy then I would have liked. However, I can see that the benefits are really...beneficial! As with anything, I think it is a trade off - and that actually sometime like a game (where you really don't want bugs) suits it's use.

- Styled components are neat and fun to use! At first I thought having my styling within my JS file would be messy, but actually I found it very readable and neat. Being able to add dynamic styling based on props is also super useful. I will definitely be exploring this more in the future.

## Next Steps

If I were to continue this project further, my next steps would be:

- to add animations to the cards to further increase the user engagement,
- add a timer to the game as an extra challenge
- make the app fully responsive
- add some unit tests to the individual components and functions using Jest
- migrate the audio to using the Web Audio API, to give me more control in how the sounds are loaded and played back.

A big stretch goal would be to implement multiplayer via something like socket.io and also create a backend so I could host leaderboards.
