import React from 'react';
import Dom from 'react-dom';


class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            title: 'title' 
        }
    }
    render() {
        return (<h1>{this.state.title}</h1>)
    } 
}
 
export default function (next) {
    Dom.render(<Main />, document.getElementById('root'));
    next();
} 