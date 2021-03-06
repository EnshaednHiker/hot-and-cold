import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import NavigationBar from '~/components/NavigationBar/index.js'
import Game from '~/components/Game/index.js';
import InfoModal from '~/components/InfoModal/index.js'
import styles from '~/assets/styles/main.css';
import About from  '~/components/About';

class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            title: 'HOT or COLD',
            isModalActive: false,
            newGame: false 
        }
        this.navigationClicked = this.navigationClicked.bind(this);
    }

    navigationClicked(e,navigationAction){
        if(navigationAction==="ABOUT"){
            this.setState({isModalActive: true});
        }
        else if (navigationAction === "NEW_GAME") {
            this.setState({newGame:true})
        }
    }

    render() {
        console.log(this.state);
        const style = {
            backgroundColor: '#1F253D',
            position: 'absolute',
            top: 0,
            paddingTop: '100px',
            bottom: '0%',
            left: 0,
            right: '0%',
            zIndex: 99,
            color: 'white'
        }



    
        return (
                <Provider store={store}>
                    <div style={style}>
                        <NavigationBar  />
                        <InfoModal content={()=>{}} active={this.state.isModalActive} />
                        <h1 className="text-center text-white">{this.state.title}</h1>
                        <Game min="1" max="101" allowedGuesses="20" />
                    </div>
                </Provider>
            )
    } 
}

export default function (next) {
    Dom.render(<Main />, document.getElementById('root'));
} 