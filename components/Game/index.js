import React from 'react';
import Dom from 'react-dom';
import CSS from '~/assets/styles/game.css';


export default class Game extends React.Component {
    constructor(props){
        super()
        this.state ={
            currentGuess: null,
            pastGuesses: [],
            numberToGuess: this.getRandomInt(props.min,props.max),
            input: null,
            feedback: "",
            reset: false
        };

        this.feedbackMap = {
            hot: {min:1, max: 10,closer:"hotter", further: "cooler"},
            warm: {min: 11, max: 50, closer: "warmer", further: "cooler"},
            cold: {min:51, max: props.max-2, closer: "warmer", further: "colder"},
            win: {min: 0, max: 0}
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        this.getCurrentGuess = this.getCurrentGuess.bind(this);
        this.setCurrentGuess = this.setCurrentGuess.bind(this);
        this.setPastGuesses = this.setPastGuesses.bind(this);
        this.getFeedback = this.getFeedback.bind(this);
        this.getRelativeFeedback = this.getRelativeFeedback.bind(this);
        this.setFeedback = this.setFeedback.bind(this);
        this.endGame = this.endGame.bind(this)
    }

    componentWillReceiveProps (props){
        this.setState({reset: props.reset});
    }

    resetGame(e,) {
        this.endGame()
        this.setState({rese})
    }

    onSubmit (e) {
        e.preventDefault();

        let currentGuess = this.getCurrentGuess(e);
        this.setCurrentGuess(currentGuess);
        this.refs.input.value = "";
        this.setPastGuesses(currentGuess);
        let feedback = this.getFeedback(currentGuess);
        if (this.state.pastGuesses.length > 1 && feedback !== "win") {
            console.log(this.state.pastGuesses[0],this.state.pastGuesses[1]);
            let relativeFeedback = this.getRelativeFeedback(currentGuess, this.state.pastGuesses[1], feedback);
            this.setFeedback(relativeFeedback);
        } else {
            this.setFeedback(feedback);
        }
    }

    getRelativeFeedback (currentGuess, lastGuess, feedback) {
        let currentGuessDelta = Math.abs(currentGuess - this.state.numberToGuess);
        let lastGuessDelta = Math.abs(lastGuess - this.state.numberToGuess);
        if (currentGuessDelta > lastGuessDelta)
            return this.feedbackMap[feedback].further;
        else if (currentGuessDelta < lastGuessDelta) {
            return this.feedbackMap[feedback].closer;
        }
        else {
            return `same, ${feedback}`;
        }
    }

    getFeedback (guess) {
        let delta = Math.abs(guess - this.state.numberToGuess);

        return Object.keys(this.feedbackMap).filter((feedback)=>{
            return (delta >= this.feedbackMap[feedback].min && delta <= this.feedbackMap[feedback].max)
        })[0];
    }

    endGame () {
        this.setState({
            currentGuess: null,
            pastGuesses: [],
            numberToGuess: this.getRandomInt(this.props.min,this.props.max),
            input: null,
            feedback: ""
        });
    }

    setFeedback (feedback){
        this.setState({feedback:feedback});
    }

    setPastGuesses(guess) {
        this.state.pastGuesses.unshift(guess);
        this.setState({pastGuesses: this.state.pastGuesses});
    }

    getCurrentGuess(e) {
        let currentGuess = $('form').serializeArray();
        console.log("current guess: ",currentGuess[0].value);
        return currentGuess[0].value;
    }

    setCurrentGuess(guess){
        this.setState({currentGuess:guess});

    }

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    render(){

        return (
            <div>                  
                <div className="container">
                    <div className="background-color-crimson feedback-div game-width">
                        <p className="feedback-text">{this.state.feedback}</p>
                    </div>
                    <div className="background-color-darkblue game-width form-div">
                        {
                            (()=>{

                                if (this.state.feedback !=="win" && this.state.pastGuesses.length < 20) {
                                    return (
                                        <form onSubmit={this.onSubmit}>
                                           <div className="form-group">
                                             <label htmlFor="Guess"></label>
                                             <input  ref="input" defaultValue={this.state.input} type="number" min={this.props.min} max={this.props.max-1} name="guess" required className="form-control" placeholder="Enter your Guess in numbers only"></input>
                                           </div>
                                           <button  type="submit" className="btn btn-default playingButton">Guess</button>
                                         </form>
                                    )
                                } else if (this.state.feedback !=="win" && this.state.pastGuesses.length === 20) {
                                        return (
                                             <div className="endGame">
                                                <p>You lost. :(<br />Wanna play a new game? Try, try, again!</p>
                                                <button onClick={this.endGame} className="btn btn-default lostButton">New Game</button>
                                            </div> 
                                        )
                                }   
                                else {
                                        return (
                                            <div className="endGame">
                                                <p>You won!<br />Wanna play a new game?</p>
                                                <button onClick={this.endGame} className="btn btn-default playAgainButton">New Game</button>
                                            </div>  
                                    )
                                }
                            })()
                        }
                        <p className="guess-count">Guess #<span className="guess-span">{this.state.pastGuesses.length}</span> of {this.props.allowedGuesses}!</p>
                    </div>
                    <div className="background-color-lightseagreen game-width guess-div">
                        <ul className="guess-list">
                            {
                               this.state.pastGuesses.map((pastGuess,index)=>{
                                    return <li key={index}>{pastGuess}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }   
    
}