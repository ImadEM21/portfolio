import React, { Component } from 'react';
import apis from '../api/index';

class UpdateProject extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image: null,
            techno: '',
            stack: []
         }
    }

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
        data.append('stack', this.state.stack)
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
                    <input type="url" id="url" className="form-control"
                    defaultValue={this.props.project.url}/>
                </div>
                <div className="form-group">
                    <label htmlFor="stack">Technologies: </label>
                    <input type="text" id="stack" className="form-control" multiple list="updateStack"
                    onKeyPress={this.handleKeyPress}
                    onChange={this.handleChange}
                    value={this.state.techno}/>
                    <datalist id="updateStack">
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