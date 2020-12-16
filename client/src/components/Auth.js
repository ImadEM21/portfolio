import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import apis from '../api/index';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async e => {
        e.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        await apis.authUser(user)
        .then(res => {
            sessionStorage.setItem('token', res.data.token);
            window.location.replace('http://localhost:8000');
        })
        .catch(error => console.error(error));
    }

    render() { 
        return ( 
            <section className="container-fluid gradient-header p-5 text-center h-100">
                <form className="form-login" onSubmit={this.handleSubmit}>
                    <FontAwesomeIcon icon={faSignInAlt} size="5x" style={{color: 'white'}} className="mb-4"/>
                    <h1 className="h3 mb-3 font-weight-normal text-white">S'identifier</h1>
                    <label htmlFor="email" className="sr-only">Email:</label>
                    <input type="email" id="email" placeholder="Email:" required autoFocus 
                    className="form-control rounded-0" onChange={e => this.setState({email: e.target.value})}/>
                    <label htmlFor="password" className="sr-only">Mot de passe:</label>
                    <input type="password" id="password" placeholder="Mot de passe:" required 
                    className="form-control rounded-0" onChange={e => this.setState({password: e.target.value})}/>
                    <button type="submit" className="mt-5 btn btn-outline-light rounded-0 btn-block">Se connecter</button>
                </form>
            </section>
         );
    }
}
 
export default Auth;