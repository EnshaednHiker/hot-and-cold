import React from 'react';
import Dom from 'react-dom';
import CSS from '~/assets/styles/game.css';

export default class Game extends React.Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){

        return (
            <div>
                                    
                <div className="container">
                    <div className="background-color-crimson feedback-div game-width">
                        <p className="feedback-text">cold</p>
                    </div>
                    <div className="background-color-darkblue game-width form-div">
                       <form>
                          <div className="form-group">
                            <label htmlFor="Guess"></label>
                            <input type="number" required className="form-control" id="guess" placeholder="Enter your Guess in numbers only"></input>
                          </div>
                          <button type="submit" className="btn btn-default">Guess</button>
                        </form>
                        <p className="guess-count">Guess #<span className="guess-span">1</span></p>
                    </div>
                    <div className="background-color-lightseagreen game-width guess-div">
                        <ul className="guess-list">
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                            <li>14</li>
                            <li>33</li>
                            <li>2</li>
                        </ul>
                    </div>
                </div>
            </div>
            )
    }   
    
}