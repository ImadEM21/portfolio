import React from 'react';
import apis from '../api/index';
import SingleUpdateProject from './SingleUpdateProject';



class GetProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            project: apis.getProject(props.id)
                    .then(project => {
                        return project.data.project;
                    })
                    .catch(err => console.error(err))
        };
    }

    componentDidMount = () => {
        this.getProject(this.state.id);
    };

    componentWillUnmount = () => {
        document.title = 'Imad Elmahrad';
    }


    getProject = async id => {
        await apis.getProject(id)
        .then(project => {
            this.setState({
                project: project.data.project
                
            });
            document.title = `Imad Elmahrad - ${project.data.project.title}`;
        })
        .catch(err => console.error(err));
    };

    deleteProject = (id) => {
        this.props.deleteProject(id);
    };


    render () { 
        return (
            <>
                <SingleUpdateProject project={this.state.project} deleteProject={this.deleteProject.bind(this)}
                isLogged={this.props.isLogged}/>
            </>
        );
    };
}
 
export default GetProject;