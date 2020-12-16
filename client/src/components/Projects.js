import React from 'react';
import apis from '../api/index.js'
import AddProject from './AddProject';
import SingleProject from './SingleProject';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            isAddProjectShow: false
        }
    }


    componentDidMount = () => {
        this.updateProjects();
    };

    componentDidUpdate = () => {
        this.updateProjects();
    }


    updateProjects = async () => {
        await apis.getAllProjects()
        .then(projects => {
            this.setState({
                projects: projects.data.projects,
            });
        })
        .catch(error => console.log(error));
    };


    deleteProject = async id => {
        await apis.deleteProject(id)
        .then(() => {
            this.updateProjects();
        })
        .catch(error => console.error(error));
    }


    renderList = () => {
        return this.state.projects.map(project => {
            return <SingleProject 
            key={project._id} 
            project={project} 
            deleteProject={this.deleteProject.bind(this)}
            isLogged={this.props.isLogged}/>
        })
    }


    handleClick = () => {
        this.setState({
            isAddProjectShow: !this.state.isAddProjectShow
        })
    }
    

    render() { 
        return ( 
            <section id="three" className="container-fluid bg-white p-5">
                <div className="row mt-5">
                    <div className="col-12 ">
                        <header className="major">
                            <h2>Voici mes projets</h2>
                        </header>
                        <p>
                            Vous trouverez ci dessous les différents projets que j'ai pu réaliser.
                        </p>
                    </div>
                </div>
                {this.props.isLogged ?
                <div className="row my-3">
                    <div className="col-12">
                        <button type="button" className="btn btn-outline-info btn-block rounded-0 my-2" onClick={this.handleClick}>
                            {this.state.isAddProjectShow ? "Masquer le formulaire" : "Ajouter un projet"}
                        </button>
                        {this.state.isAddProjectShow &&
                            <AddProject updateProjects={this.updateProjects.bind(this)} />
                        }
                    </div>
                </div>
                : null}
                
                <div className="row mt-4">
                    {this.renderList()}
                </div>
            </section>
         );
    }
}
 
export default Projects;