import React, { Component } from 'react';
import apis from '../api/index';

class UpdateProject extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: null,

         }
    }


    handleImageChange = files => {
        this.setState({
            image: files[0]
        })
    }

    updateProject = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', e.target.title.value);
        data.append('description', e.target.description.value);
        data.append('repoGithub', e.target.repoGithub.value);
        data.append('url', e.target.url.value);
        if (this.state.image !== null) {
            data.append('image', this.state.image);
        }

        await apis.updateProject(this.props.project._id, data)
        .then(() => window.location.reload())
        .catch(err => console.error(err));
    }

    render() { 
        return ( 
            <form onSubmit={this.updateProject.bind(this)} className="mt-5">
                <div className="form-group">
                    <label htmlFor="title">Titre: </label>
                    <input type="text" id="title" className="form-control" required
                    defaultValue={this.props.project.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <textarea id="description" className="form-control" required
                    defaultValue={this.props.project.description}/>
                </div>
                <div className="form-group">
                    <label htmlFor="repoGithub">Repo GitHub: </label>
                    <input type="url" id="repoGithub" className="form-control" required
                    defaultValue={this.props.project.repoGithub}/>
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url: </label>
                    <input type="url" id="url" className="form-control" name="url"
                    defaultValue={this.props.project.url}/>
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image: </label>
                    <input type="file" id="image" className="form-control" 
                    onInput={(e) => this.handleImageChange(e.target.files)}
                    />
                    <img src={this.props.project.image} alt='' className="m-3 w-50 rounded-0"/>
                </div>
                <button type="submit" className="btn btn-outline-light rounded-0 btn-block">
                    Modifier le projet
                </button>
            </form>
        );
    }
}
 
export default UpdateProject;