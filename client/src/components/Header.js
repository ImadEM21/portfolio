import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Header = (props) => {
    
    return (
        <section id="header" className="container-fluid p-md-5 py-5 m-0 gradient-header">
            <div className="row mt-4 mx-auto">
                <div className="col-12 d-block">
                    <FontAwesomeIcon icon={faCloud} size="5x" style={{color: "white"}}/>
                </div>
            </div>
            <div className="row mx-auto mt-4 w-50">
                <div className="col-12 d-block">
                    <h1 className="text-white">
                        Bonjour, je m'appelle <strong>Imad Elmahrad</strong>, et vous êtes
                        sur mon portfolio.
                    </h1>
                </div>
            </div>
            <div className="row mx-auto mt-2 w-50">
                <div className="col-12 d-block">
                    <p>
                        Vous trouverez ici une présentation, mes projets réalisés et les langages sur lesquels
                        j'ai travaillé. 
                    </p>
                </div>
            </div>
            <div className="row mb-4 mx-auto mt-2 w-50">
                <div className="col-12 d-block">
                    <button type="button" className="btn btn-outline-light btn-block rounded-0 liaison">
                        <Link activeClass="active" to="presentation" spy={true} smooth={true}>Découvrir</Link>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Header;
