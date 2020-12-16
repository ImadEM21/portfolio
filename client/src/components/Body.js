import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs, faNodeJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';

const Body = (props) => {
    return (
        <section id="two" className="container-fluid bg-secondary p-5">
            <div className="row mt-4 mb-5">
                <div className="col-12 col-md-6 mt-3">
                    <ul className="list-group border-0 mt-3 h-100 d-flex justify-content-center align-items-center flex-column d-md-flex justify-content-md-between row">
                        <li className="list-group-item no-bg border-0 d-block icon-height col-md-4 col-6">
                            <FontAwesomeIcon icon={faHtml5} size="4x" className="m-auto icon-html"/>
                        </li>
                        <li className="list-group-item no-bg border-0 d-block icon-height col-md-4 col-6">
                            <FontAwesomeIcon icon={faReact} size="4x" className="m-auto icon-react"/>
                        </li>
                        <li className="list-group-item no-bg border-0 d-block icon-height col-md-4 col-6">
                            <FontAwesomeIcon icon={faCss3Alt} size="4x" className="m-auto icon-css"/>
                        </li>
                        <li className="list-group-item no-bg border-0 d-block icon-height col-md-4 col-6">
                            <FontAwesomeIcon icon={faNodeJs} size="4x" className="m-auto icon-nodejs"/>
                        </li>
                        <li className="list-group-item no-bg border-0 d-block icon-height col-md-4 col-6">
                            <FontAwesomeIcon icon={faJs} size="4x" className="m-auto icon-js"/>
                        </li>
                        <li className="list-group-item no-bg border-0 d-block icon-height col-md-4 col-6">
                            <FontAwesomeIcon icon={faDatabase} size="4x" className="m-auto icon-database"/>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 mt-3">
                    <header className="mt-3 major">
                        <h2>
                            Avant tout un passionné du développement web.
                        </h2>
                    </header>
                    <p>
                        Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. 
                        A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. 
                        Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.
                    </p>
                    <p>
                        Blandit faucibus proin. Ac aliquam integer adipiscing enim non praesent vis commodo 
                        nunc phasellus cubilia ac risus accumsan. Accumsan blandit. 
                        Lobortis phasellus non lobortis dit varius mi varius accumsan lobortis. 
                        Blandit ante aliquam lacinia lorem lobortis semper morbi col faucibus vitae integer 
                        placerat accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing curae 
                        consequat feugiat etiam dolore.
                    </p>
                    <p>
                        Adipiscing a commodo ante nunc accumsan interdum mi ante adipiscing. 
                        A nunc lobortis non nisl amet vis volutpat aclacus nascetur ac non. 
                        Lorem curae eu ante amet sapien in tempus ac. Adipiscing id accumsan adipiscing ipsum.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Body;