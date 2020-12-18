import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
   
    render() { 
        return ( 
            <section id="footer" className="container-fluid gradient-footer p-md-5 py-5">
                <div className="row mt-2">
                    <div className="col-12 mb-2">
                        <ul className="list-group d-flex flex-row justify-content-center mt-4">
                            <li className="mx-4">
                                <a href="https://twitter.com/Imadpirlo21" className="icon-hover">
                                    <FontAwesomeIcon icon={faTwitter} size="2x"/>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="https://github.com/ImadEM21" className="icon-hover">
                                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="mailto:contact@imadelmahrad.com" className="icon-hover">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                                </a>
                            </li>
                            <li className="mx-4">
                                <a href="https://www.linkedin.com/in/imad-elmahrad-61a3861aa" className="icon-hover">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-12 mb-4">
                        <ul className="list-group d-flex flex-row justify-content-center mb-4">
                            <li className="border-right pr-2 py-0">&copy; Imad Elmahrad</li>
                            <li className="pl-2 py-0">Design: <a href="http://html5up.net" className="text-white">HTML5 UP</a></li>
                        </ul>
                    </div>
                </div>
            </section>
         );
    }
}
 
export default Footer;