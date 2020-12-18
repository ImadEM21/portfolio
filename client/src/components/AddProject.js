import React, { Component } from 'react';
import apis from '../api/index';

class AddProject extends Component {
   constructor(props) {
       super(props)
       this.state = {
           image: null,
           techno: '',
           stack: []
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

    handleKeyPress = e => {
        if (e.charCode === 32) {
            this.state.stack.push(this.state.techno);
            this.setState({
                techno: ''
            });
        }
    }

    handleChange = e => {
        this.setState({
            techno: e.target.value
        })
    }
    
    addProject = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', e.target.title.value);
        data.append('description', e.target.description.value);
        data.append('repoGithub', e.target.repoGithub.value);
        data.append('url', e.target.url.value);
        data.append('image', this.state.image);
        data.append('stack', this.state.stack);

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
                    <label htmlFor="stack">Technologies</label>
                    <input type="text" className="form-control" id="stack" multiple list="techno" 
                    onKeyPress={this.handleKeyPress} 
                    value={this.state.techno}
                    onChange={this.handleChange}/>
                    <datalist id="techno">
                        <option value="JavaScript" />
                        <option value="NodeJS" />
                        <option value="MongoDB" />
                        <option value="HTML" />
                        <option value="CSS" />
                        <option value="ReactJS" />
                        <option value="PHP" />
                        <option value="MySQL" />
                        <option value="Symfony" />
                        <option value="VueJS" />
                        <option value="Bootstrap" />
                    </datalist>
                    {this.state.stack.map((techno, i) => {
                        return <span key={i +1} className="border mx-1"> {techno} </span>
                    })}
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
