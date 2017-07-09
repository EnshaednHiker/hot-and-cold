import React from 'react';
import Dom from 'react-dom';

export default class NavigationBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.newGame = this.newGame.bind(this);
        this.about = this.about.bind(this);
    }

    newGame(e) {
        this.props.onClick(e,"NEW_GAME")
    }

    about(e) {
        this.props.onClick(e,"ABOUT")
    }

    render(){

        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li><a onClick={this.newGame} className="btn" role="button" >+New Game</a></li>
                            <li><a onClick={this.about} className="btn" role="button" >About</a></li>
                        </ul>
                    </div>
                </nav>
            )
    }
}
