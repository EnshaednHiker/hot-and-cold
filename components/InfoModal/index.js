import React from 'react';
import Dom from 'react-dom';
import { connect } from 'react-redux';
import { infoModal } from '~/actions'


export class InfoModal extends React.Component {
        constructor(props){
        super(props)
        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        this.props.dispatch(infoModal(false));
    }

    render() {
        if (this.props.infoModal === true) {
            return (
                <div style={{display:"block"}} className="modal fade" id="myModal" tabIndex="-1" role="dialog" data-ariaLabelledBy="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" onClick={this.onClick} className="close" data-dismiss="modal" data-ariaLabel="Close"><span data-ariaHidden="true">&times;</span></button>
                                <h4 className="modal-title text-center" id="myModalLabel">About</h4>
                            </div>
                            <div className="modal-body">
                              <h3>Rules Go Here</h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.onClick} className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }    
    }
}

// const mapDispatchToProps = dispatch => {
//    return ({
//         infoModal: (boolean) => {dispatch(infoModal(boolean))}
//    })
// };

const mapStateToProps = state => {
    return ({
        infoModal: state.infoModal
    })
}

export default connect(mapStateToProps)(InfoModal);
