import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
    return ( 
        <section id="NotFoundPage" className="container-fluid p-0 gradient-header h-100 w-100">
            <div className="row h-100 w-100 m-0">
                <div className="col-12 my-auto">
                    <h2 className="mb-3 text-white">Oops! Page introuvable</h2>
                    <h1 className="not-found m-3">404</h1>
                    <p className="text-light my-3">La page que vous avez demandé est introuvable.</p>
                    <Link to='/' className="btn btn-outline-light rounded-0">Revenir à la page d'acceuil</Link>
                </div>
            </div>
        </section>
     );
}
 
export default NotFoundPage;