import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { newGame,infoModal } from '~/actions'

export class NavigationBar extends React.Component {
    constructor(props){
        super(props)

        this.newGame = this.newGame.bind(this);
        this.infoModal = this.infoModal.bind(this);
    }

    infoModal() {
        this.props.dispatch(infoModal(true));
    }

    newGame () {
        this.props.dispatch(newGame());
    }

    render(){

        return (
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li><a onClick={this.infoModal} className="btn">About</a></li>
                                <li><a onClick={this.newGame} className="btn" role="button" >+New Game</a></li>
                            </ul>
                        </div>
                    </nav>
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
