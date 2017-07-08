import * as actions from '~/actions';

const gameStartConditionsMap = {
    min: 1,
    max: 101
}

const initialState = {
    currentGuess: null,
    pastGuesses: [],
    numberToGuess: getRandomInt(gameStartConditionsMap.min,gameStartConditionsMap.max),
    input: null,
    feedback: ""    
};

const feedbackMap = {
    hot: {min:1, max: 10,closer:"hotter", further: "cooler"},
    warm: {min: 11, max: 50, closer: "warmer", further: "cooler"},
    cold: {min:51, max: gameStartConditionsMap.max-2, closer: "warmer", further: "colder"},
    win: {min: 0, max: 0}
}

function onSubmit (currentGuess,pastGuesses,numberToGuess,feedback) {
    let tempState = {
        currentGuess: currentGuess,
        pastGuesses: pastGuesses,
        numberToGuess: numberToGuess,
        input: null,
        feedback: feedback
    }
    tempState.pastGuesses.unshift(tempState.currentGuess);
    let newFeedback = getFeedback(tempState.currentGuess, tempState.numberToGuess);
    
    if (tempState.pastGuesses.length > 1 && newFeedback !== "win") {
        
        let relativeFeedback = getRelativeFeedback(tempState.currentGuess, tempState.numberToGuess,tempState.pastGuesses[1], newFeedback);
        tempState.feedback = relativeFeedback;
    } else {
        tempState.feedback = newFeedback;
    }
    return tempState;
}
function getRelativeFeedback (currentGuess, numberToGuess, lastGuess, feedback) {
    let currentGuessDelta = Math.abs(currentGuess - numberToGuess);
    let lastGuessDelta = Math.abs(lastGuess - numberToGuess);
    if (currentGuessDelta > lastGuessDelta)
        return feedbackMap[feedback].further;
    else if (currentGuessDelta < lastGuessDelta) {
        return feedbackMap[feedback].closer;
    }
    else {
        return `same, ${feedback}`;
    }
}
function getFeedback (guess, numberToGuess) {
    let delta = Math.abs(guess - numberToGuess);
    return Object.keys(feedbackMap).filter((feedback)=>{
        return (delta >= feedbackMap[feedback].min && delta <= feedbackMap[feedback].max)
    })[0];
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export const gameReducer = (state = initialState, action) => {
        
    if (action.type === actions.GUESS) {
        let newState = onSubmit(action.guess,state.pastGuesses,state.numberToGuess,state.feedback);
        
        const reducerObject = Object.assign({}, state, {
            currentGuess: action.guess,
            pastGuesses: newState.pastGuesses,
            numberToGuess: state.numberToGuess,
            input: null,
            feedback: newState.feedback,
            nonce: Math.random().toString(32).substr(2,16)
        });
        
        return reducerObject;
    }
    else if (action.type === actions.NEW_GAME){
        return Object.assign({}, state,{
            currentGuess: null,
            pastGuesses: [],
            numberToGuess: getRandomInt(gameStartConditionsMap.min,gameStartConditionsMap.max),
            input: null,
            feedback: ""
        })
    }
    else return state;
};