import React from 'react';
import apis from '../api/index';
import SingleMessage from './SingleMessage';
import { Link } from 'react-router-dom'; 


class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            messages: []
         }
    }

    componentDidMount = () => {
        this.getMessages();
    };
    

    getMessages = async () => {
        await apis.getMessages()
        .then(res => {
            this.setState({
                messages: res.data.messages
            });
        })
        .catch(error => console.error(error));
    };

    deleteMessage = async id => {
        await apis.deleteMessage(id)
        .then(res => {
            alert('Message supprimé avec succès');
            window.location.reload();
        })
        .catch(error => console.error(error));
    };

    renderList = () => {
        return this.state.messages.map(message => {
            return <SingleMessage 
            key={message._id}
            message={message}
            deleteMessage={this.deleteMessage.bind(this)}
            />
        })
    }

    render() { 
        return ( 
            <section id="messages" className="text-center gradient-header h-100">
                <div className="row mt-3">
                    <div className="col-12">
                        <Link to='/' className="btn btn-outline-light rounded-0">Revenir à la page d'acceuil</Link>
                    </div>
                </div>
                {this.renderList()}
            </section>
        );
    }
}
 
export default Messages;