import React from 'react';
import apis from '../api/index';

class FormContact extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            company: '',
            email: '',
            message: ''
        }

    }
    
    handleInputChange = async e => {
        const target = e.target;
        const value = target.value;
        const name = target.name
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit (e) {
        e.preventDefault();
        
        const message = {
            name: this.state.name,
            company: this.state.company,
            email: this.state.email,
            message: this.state.message
        };

        apis.postMessage(message)
        .then(res => {
            alert('Votre message a bien été envoyé');
            this.setState({
                name: '',
                company: '',
                email: '',
                message: ''
            });
        })
        .catch(error => console.error(error));
    }
    
    render() {
        return (
            <form className="mt-3" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom:</label>
                    <input 
                        onChange={this.handleInputChange} 
                        value={this.state.name} 
                        type="text" 
                        className="form-control rounded-0" 
                        placeholder="Ex: Florian Dupont" 
                        aria-describedby="name" 
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Entreprise:</label>
                    <input 
                        onChange={this.handleInputChange} 
                        value={this.state.company} 
                        type="text" 
                        className="form-control rounded-0" 
                        placeholder="Votre entreprise..." 
                        aria-describedby="company" 
                        id="company" 
                        name="company"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        onChange={this.handleInputChange} 
                        value={this.state.email} 
                        type="email" 
                        className="form-control rounded-0" 
                        placeholder="exemple@email.com" 
                        aria-describedby="email" 
                        id="email" 
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        onChange={this.handleInputChange} 
                        value={this.state.message} 
                        className="form-control" 
                        id="message rounded-0" 
                        placeholder="Votre message ici..." 
                        name="message"
                    />
                </div>
                <button type="submit" className="btn btn-block btn-outline-light rounded-0">Envoyer</button>
            </form>
        )
    };
}
 
export default FormContact;