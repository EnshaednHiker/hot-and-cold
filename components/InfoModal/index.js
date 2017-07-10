import React from 'react';
import Dom from 'react-dom';
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
                                <h4 className="modal-title text-center" id="myModalLabel">About: How to Play Hot or Cold</h4>
                            </div>
                            <div className="modal-body">
                              <h3>Rules Go Here</h3>
                              <p>More rules</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.onClick} className="btn btn-default">Close</button>
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

