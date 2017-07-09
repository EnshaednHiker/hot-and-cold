import React from 'react';
import Dom from 'react-dom';
import '~/assets/styles/modal.css';

export default class InfoModal extends React.Component {
    constructor(props){
        super()
        this.state = {
            isActive: props.active
        }
        console.log(this);
    }

    componentWillReceiveProps (props){
        this.setState({isActive: props.active});
    }

    infoModalClose(){
        this.setState({isActive:false}, ()=>{
            this.props.onClose(this.state);
        });
    }

    render(){

        if (this.state.isActive===true){
            return (
                <div className="info-modal">
                    <div className="info-modal-background">
                    </div>
                    <div className="info-modal-container container">
                        <button className="btn btn-default info-modal-close-button" onClick={this.infoModalClose.bind(this)}>x</button>
                        {this.props.content}
                    </div>   
                </div>
            )
        }
        else
            return (
                <span></span>
            )
    }
}

<button className="btn btn-default" type="submit">Got It!</button>