export const GUESS = "GUESS";
export const guess = guess => ({
    type: GUESS,
    guess
});

export const NEW_GAME = "NEW_GAME";
export const newGame = (boolean) => ({
    type: NEW_GAME
});