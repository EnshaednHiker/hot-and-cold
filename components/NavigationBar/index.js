import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { newGame,infoModal } from '~/actions'

export class NavigationBar extends React.Component {
    constructor(props){
        super(props)

<<<<<<< HEAD
        this.newGame = this.newGame.bind(this);
        this.infoModal = this.infoModal.bind(this);
    }

    infoModal() {
        this.props.dispatch(infoModal(true));
    }

    newGame () {
        this.props.dispatch(newGame());
=======
        }
        this.newGame = this.newGame.bind(this);
        this.about = this.about.bind(this);
    }

    newGame(e) {
        this.props.onClick(e,"NEW_GAME")
    }

    about(e) {
        this.props.onClick(e,"ABOUT")
>>>>>>> master
    }

    render(){

        return (
<<<<<<< HEAD
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li><a onClick={this.infoModal} className="btn">About</a></li>
                                <li><a onClick={this.newGame} className="btn" role="button" >+New Game</a></li>
                            </ul>
                        </div>
                    </nav>
=======
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li><a onClick={this.newGame} className="btn" role="button" >+New Game</a></li>
                            <li><a onClick={this.about} className="btn" role="button" >About</a></li>
                        </ul>
                    </div>
                </nav>
>>>>>>> master
            )
    }
}

const mapDispatchToProps = dispatch => {
   return ({
        newGame: () => {dispatch(newGame())},
        infoModal: (boolean) => {dispatch(infoModal(boolean))}
   })
};
export default connect(mapDispatchToProps)(NavigationBar);
