import React from 'react';
import Info from './Info';
import FormContact from './FormContact';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleInfoClick = this.handleInfoClick.bind(this);
        this.handleFormClick = this.handleFormClick.bind(this);
        this.state = {
            isInfoShow: false,
            isFormShow: false
        }
    }

    handleInfoClick () {
        this.setState({
            isInfoShow: !this.state.isInfoShow
        });
    }

    handleFormClick () {
        this.setState({
            isFormShow: !this.state.isFormShow
        });
    }
    
    render() { 
        return ( 
            <section id="four" className="container-fluid bg-secondary p-md-5 py-5">
                <div className="row mt-5">
                    <div className="col-12">
                        <header className="major">
                            <h2>Besoin d'un développeur web ?</h2>
                        </header>
                        <p>N'hésitez pas à me joindre soit via formulaire ou alors via mes coordonnées directement.</p>
                    </div>
                </div>
                <div className="row mb-5 mt-3">
                    <div className="col-12 col-md-6">
                        <button type="button" onClick={this.handleInfoClick} className="btn btn-outline-light mb-2 mb-md-0 rounded-0">
                            {this.state.isInfoShow ? "Masquer les coordonnées" : "Afficher les coordonnées"}
                        </button>
                        {this.state.isInfoShow &&
                            <Info />
                        }
                    </div>
                    <div className="col-12 col-md-6">
                        <button type="button" onClick={this.handleFormClick} className="btn btn-outline-light rounded-0">
                            {this.state.isFormShow ? "Masquer le formulaire" : "Afficher le formulaire"}
                        </button>
                        {this.state.isFormShow &&
                            <FormContact />
                        }
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Contact;