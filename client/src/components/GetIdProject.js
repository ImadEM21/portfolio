import React from 'react';
import { useParams } from 'react-router-dom';
import GetProject from './GetProject';

const GetIdProject = (props) => {
    let { id } = useParams();
    return ( 
        <GetProject id={id} deleteProject={props.deleteProject.bind(this, id)} isLogged={props.isLogged}/>
     );
}
 
export default GetIdProject;