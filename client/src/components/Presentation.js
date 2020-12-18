import React from 'react';
import photo from '../images/image.jpeg';

const Presentation = props => {
    return (
        <section id="presentation" className="container-fluid bg-white p-md-5 py-5">
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <header className="major">
                        <h2>
                            Développement web
                        </h2>
                    </header>
                    <p style={{fontSize: 'larger'}} className="text-justify">
                        Comme vous vous en doutez le développement web c'est quelque chose que j'apprécie 
                        particulièrement. C'est donc pour ça que j'ai décidé d'en faire mon métier et participer à 
                        des projets bien plus grands.<br /><br /> 
                        Pas encore convaincu ? Alors n'hésitez pas à lire la suite, 
                        vous avez peut être trouvé le développeur web qu'il vous faut !
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={photo} alt="" className="w-100 h-100"/>
                </div>
            </div>
        </section>
    );
};

export default Presentation;