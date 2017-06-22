import React from 'react';
import Dom from 'react-dom';

export default class NavigationBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){

        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li><a href="#">What?</a></li>
                            <li><a href="#" >+New Game</a></li>
                        </ul>
                    </div>
                </nav>
            )
    }
}
