import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJs, faNodeJs, faHtml5, faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';

const Body = (props) => {
    return (
        <section id="technologies" className="container-fluid bg-secondary p-md-5 py-5">
            <div className="row mt-4 mb-5">
                <div className="col-12 col-md-6">
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
                <div className="col-12 col-md-6 mt-4">
                    <header className="major">
                        <h2>
                            La stack technique.
                        </h2>
                    </header>
                    <p>
                        Contrairement aux parcours classiques, je n'ai pas tout de suite commencé par le 
                        HTML/CSS, mais par le langage C. J'ai décidé de commencer par le C pour vraiment apprendre 
                        la programmation avec un langage bas niveau et toucher à tous les concepts basiques de la 
                        programmation. Après avoir suivi le cours sur 
                        <a href="https://openclassrooms.com/fr/courses/19980-apprenez-a-programmer-en-c" className="mx-1 link-body">Openclassrooms</a> 
                        et fait quelques petits jeux, j'ai décidé de m'attaquer au JavaScript pour apprendre à faire 
                        des sites web dynamiques.
                    </p>
                    <p>
                        Apprendre la syntaxe du JavaScript a été plutôt rapide car elle est proche du C mais on peut écrire 
                        moins de code pour plus de résultats. Une fois la syntaxe de JavaScript maîtrisée j'ai appris le 
                        HTML/CSS pour revenir à nouveau au JavaScript pour faire des sites vraiment dynamiques avec la 
                        manipulation du DOM et des appels AJAX.
                    </p>
                    <p>
                        Après avoir manipulé la partie visible par les utilisateurs je me suis un peu intéressé à la partie 
                        serveur. Et parmi toutes les technos pour faire du backend, j'ai choisi NodeJS car c'est toujours du 
                        JavaScript mais il s'agit aussi d'une techno qui est de plus en plus demandé et qui 
                        permet de créer des applications vraiment rapides. Associé à une base de données MongoDB et au framework 
                        Express de NodeJS, on peut faire tous types de sites web. Avec cette combinaison j'ai réalisé mon premier 
                        site web<a href="https://www.chillingbook.fr/" className="ml-1 link-body">ChillingBook</a>. 
                    </p>
                    <p>
                        Pour compléter ma stack technique, j'ai choisi un framework frontend, mon choix a été de partir 
                        sur React. Pour ça j'ai suivi quelques cours et une formation certifiante avec l'école 
                        <a href="https://formadis.fr/" className="ml-1 link-body">FORMADIS</a>.
                        Après ma formation, j'ai réalisé des petites applications avec React, pour finalement faire mon site avec React, 
                        NodeJS et MongoDB pour le rendre le plus dynamique possible et rendre l'expérience utilisateur agréable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Body;