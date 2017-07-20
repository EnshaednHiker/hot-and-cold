import React from 'react';
import Dom from 'react-dom';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { infoModal } from '~/actions';

export class InfoModal extends React.Component {
        constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.props.dispatch(infoModal(false));
    }

    render() {
        const stylesOuterModal = {
            zIndex: 1200,
            display: "block",
            backgroundColor: "rgba(0,0,0,0.60)"
        }
        const stylesInnerModal = {
            backgroundColor: "#DB153D",
            color: "white"
        }
        if (this.props.infoModal === true) {
            
            return (
                <div style={stylesOuterModal} className="modal" id="myModal" tabIndex="-1" role="dialog" >
                    <div  className="modal-dialog" role="document">
                        <div className="modal-content" style={stylesInnerModal}>
                            <div className="modal-header">
                                <h4 className="modal-title text-center" id="myModalLabel">About: How to Play 'Hot or Cold'</h4>
                            </div>
                            <div className="modal-body">
							    <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
							    <ul>
							    	<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							    	<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							    	<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
							    	<li>4. You will also receive <strong>relative feedback</strong> so you know whether you're moving in the right direction.</li>
							    </ul>
							    
                            </div>
                            <div className="modal-footer">
                                <p>So, are you ready?</p>
                                <button type="button" onClick={this.onClick} className="btn btn-default">Got it!</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <span></span>
            )
        }    
    }
}

const mapStateToProps = state => {
    return ({
        infoModal: state.infoModal
    })
}

const mapDispatchToProps = dispatch => {
    return ({
       infoModal : this.props.dispatch(infoModal(false))
    })
}

export default connect(mapStateToProps)(InfoModal);

=======
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
>>>>>>> master
