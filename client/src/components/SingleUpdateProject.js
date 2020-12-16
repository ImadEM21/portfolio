import React from 'react';
import UpdateProject from './UpdateProject';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SingleUpdateProject = (props) => {
    return ( 
        <>
        <section className="container-fluid p-5 gradient-header">
            <div className="row mb-5">
                <div className="col-12">
                    <Link to='/' className="btn btn-outline-light rounded-0">Revenir à la page d'acceuil</Link>
                </div>
            </div>
        </section>
        <section className="container-fluid bg-white p-5">
            <div className="row m-3">
                <div className="col-12">
                    <article className="text-center">
                        <h2 className="mb-4">{props.project.title}</h2>
                        <div className="d-md-flex justify-content-md-between mt-5">
                            <img src={props.project.image} alt={props.project.title} className="rounded-0 w-50 h-25 mb-5" />
                            <p className="align-self-center mx-md-5">{props.project.description}</p>
                        </div>
                        {props.project.url ?
                        <a href={props.project.url} className="btn btn-outline-success m-2 rounded-0">Accèder au site</a>
                        : null}
                        <a href={props.project.repoGithub} className="btn btn-outline-info m-2 rounded-0">Code source</a>
                        {props.isLogged ? 
                        <button type="button" className="btn btn-outline-danger m-2 rounded-0" onClick={props.deleteProject.bind(this, props.project._id)}>
                            Supprimer
                        </button> : null }
                    </article>
                </div>
            </div>
        </section>
        {props.isLogged ? 
        <section className="container-fluid bg-secondary p-5">
            <div className="row my-5">
                <div className="col-12 my-3">
                    <h2 className="mb-3">Modifier le projet</h2>
                    <UpdateProject project={props.project}/>
                </div>
            </div>
        </section> : null }
        <Footer />
        </>
     );
}
 
export default SingleUpdateProject;