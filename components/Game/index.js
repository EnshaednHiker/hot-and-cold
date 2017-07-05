import React from 'react';
import Dom from 'react-dom';
import CSS from '~/assets/styles/game.css';
import { connect } from 'react-redux';
import { guess,newGame } from '~/actions'



export class Game extends React.Component {
    constructor (props){
        super(props)
    this.onSubmit = this.onSubmit.bind(this);
    this.getCurrentGuess = this.getCurrentGuess.bind(this);
    }
    
    onSubmit (e) {
        e.preventDefault();
        let currentGuess = this.getCurrentGuess(e);
        this.props.dispatch(guess(currentGuess));
        this.refs.input.value = "";
    }

    newGame () {
        this.props.dispatch(newGame());
    }

    getCurrentGuess(e) {
        let currentGuess = $('form').serializeArray();
        console.log("current guess: ",currentGuess[0].value);
        return currentGuess[0].value;
    }

    render(){
        
        return (
            <div>                  
                <div className="container">
                    <div className="background-color-crimson feedback-div game-width">
                        <p className="feedback-text">{this.props.feedback}</p>
                    </div>
                    <div className="background-color-darkblue game-width form-div">
                        {
                            (()=>{
                                if (this.props.feedback !=="win" && this.props.pastGuesses.length < 20) {
                                    return (
                                        <form onSubmit={this.onSubmit}>
                                           <div className="form-group">
                                             <label htmlFor="Guess"></label>
                                             <input  ref="input" defaultValue={this.props.input} type="number" min={this.props.min} max={this.props.max-1} name="guess" required className="form-control" placeholder="Enter your Guess in numbers only"></input>
                                           </div>
                                           <button  type="submit" className="btn btn-default playingButton">Guess</button>
                                         </form>
                                    )
                                } else if (this.props.feedback !=="win" && this.props.pastGuesses.length === 20) {
                                        return (
                                             <div className="endGame">
                                                <p>You lost. :(<br />Wanna play a new game? Try, try, again!</p>
                                                <button onClick={this.newGame} className="btn btn-default lostButton">New Game</button>
                                            </div> 
                                        )
                                }   else {
                                        return (
                                            <div className="endGame">
                                                <p>You won!<br />Wanna play a new game?</p>
                                                <button onClick={this.newGame} className="btn btn-default playAgainButton">New Game</button>
                                            </div>  
                                    )
                                }
                            })()
                        }
                        <p className="guess-count">Guess #<span className="guess-span">{this.props.pastGuesses.length}</span> of {this.props.allowedGuesses}!</p>
                    </div>
                    <div className="background-color-lightseagreen game-width guess-div">
                        <ul className="guess-list">
                            {
                               this.props.pastGuesses.map((pastGuess,index)=>{
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

const mapStateToProps = state => {
   return {
    currentGuess: state.currentGuess,
    pastGuesses: state.pastGuesses,
    numberToGuess: state.numberToGuess,
    input: state.input,
    feedback: state.feedback
   }
};

export default connect(mapStateToProps)(Game);