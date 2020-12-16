import React, { Component } from 'react';
import apis from '../api/index';

class AddProject extends Component {
   constructor(props) {
       super(props)
       this.state = {
           image: null
       }
   }

    updateProjects = () => {
        this.props.updateProjects();
    };

    handleImage = (files) => {
        const file = files[0];
        this.setState({
            image: file
        });
    };
    
    addProject = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', e.target.title.value);
        data.append('description', e.target.description.value);
        data.append('repoGithub', e.target.repoGithub.value);
        data.append('url', e.target.url.value);
        data.append('image', this.state.image);

        await apis.createProject(data)
        .then(res => {
            window.alert('Projet ajouté avec succès');
            this.updateProjects();
        })
        .catch(error => console.error(error));
    };

    render() { 
        return ( 
            <form onSubmit={this.addProject.bind(this)} id="form">
                <div className="form-group">
                    <label htmlFor="title">Titre: </label>
                    <input type="text" id="title" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" className="form-control" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="repoGithub">Repo GitHub: </label>
                    <input type="url" id="repoGithub" className="form-control" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url: </label>
                    <input type="url" id="url" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image: </label>
                    <input type="file" id="image" className="form-control" required 
                    onInput={(e) => this.handleImage(e.target.files)}/>
                </div>
                <button type="submit" className="btn btn-outline-dark rounded-0 btn-block">Ajouter le projet</button>
            </form>
         );
    }
}
 
export default AddProject;
