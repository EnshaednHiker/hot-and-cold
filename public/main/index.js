import React from 'react';
import Dom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import NavigationBar from '~/components/NavigationBar/index.js'
import Game from '~/components/Game/index.js'
import styles from '~/assets/styles/main.css';


class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            title: 'HOT or COLD' 
        }
    }

    render() {
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
                <div style={style}>
                    <NavigationBar  />
                    <h1 className="text-center text-white">{this.state.title}</h1>
                    <Provider store={store}>
                        <Game min="1" max="101" allowedGuesses="20" />
                    </Provider>
                </div>
            )
    } 
}
 
export default function (next) {
    Dom.render(<Main />, document.getElementById('root'));
} 