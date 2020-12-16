import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = (props) => {
    return ( 
        <div className="col-12 col-md-4 mb-3">
            <div className="card rounded-0 h-100">
                <img src={props.project.image} alt={props.project.title} className="card-img-top rounded-0" />
                <div className="card-body">
                    <h3 className="card-title">{props.project.title}</h3>
                    <p className="card-text">
                        {props.project.description}
                    </p>
                    {props.project.url ? 
                    <a href={props.project.url} className="btn btn-outline-success m-2 rounded-0">Accèder au site</a> 
                    : null }
                    <a href={props.project.repoGithub} className="btn btn-outline-info m-2 rounded-0">Code source</a>
                    {props.isLogged ?
                    <button type="button" className="btn btn-outline-danger m-2 rounded-0" onClick={props.deleteProject.bind(this, props.project._id)}>
                        Supprimer
                    </button> : null}
                    <Link to={`/project/${props.project._id}`} className="btn btn-outline-dark m-2 rounded-0">En savoir plus</Link>
                </div>
            </div>
        </div>
    );
}
 
export default SingleProject;