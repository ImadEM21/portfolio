import React from 'react';

const SingleMessage = (props) => {
    let time = new Date(props.message.createdAt);
    return ( 
        <div className="row">
            <div className="col-12 p-3">
                <div className="card rounded-0 mx-3">
                    <div className="card-body">
                        <h4 className="card-title">{props.message.name} - {props.message.company}</h4>
                        <h6 className="card-subtitle text-muted">Envoyé le {time.toLocaleDateString()}</h6>
                        <div className="text-muted">Email: {props.message.email}</div>
                        <p className="card-text">{props.message.message}</p>
                        <button type="button" className="btn btn-outline-danger rounded-0" 
                        onClick={props.deleteMessage.bind(this, props.message._id)}>
                            Supprimer
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SingleMessage;