export const GUESS = "GUESS";
export const guess = guess => ({
    type: GUESS,
    guess
});

export const NEW_GAME = "NEW_GAME";
export const newGame = () => ({
    type: NEW_GAME
});