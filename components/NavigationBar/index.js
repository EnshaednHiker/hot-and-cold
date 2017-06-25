import React from 'react';
import Dom from 'react-dom';

export default class NavigationBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        window.location.reload();
    }

    render(){

        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li><a onClick={this.onClick} className="btn" role="button" >+New Game</a></li>
                        </ul>
                    </div>
                </nav>
            )
    }
}
