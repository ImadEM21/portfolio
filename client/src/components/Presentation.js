import React from 'react';
import photo from '../images/presentation-1.png';

const Presentation = props => {
    return (
        <section id="one" className="container-fluid bg-white p-5">
            <div className="row my-5">
                <div className="col-12 col-md-6">
                    <header className="major">
                        <h2>
                            Passionné de développement web et de technologie en général
                        </h2>
                    </header>
                    <p>
                        Mon but étant de faire de ma passion mon métier, mon objectif est de passer d'un développeur 
                        no-stack à full-stack. Et aujourd'hui je suis en mesure de créer un site de A à Z comme celui-ci.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <span className="m-auto p-0"><img src={photo} alt="" className="w-100 h-100"/></span>
                </div>
            </div>
        </section>
    );
};

export default Presentation;