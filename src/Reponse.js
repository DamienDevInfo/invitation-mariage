import React from 'react';
import { Link } from 'react-router-dom';
import './Reponse.css';

const Reponse = () => {
    return (
        <div className="bodyReponse">
            <button><Link to='/' className="btnAccueil">Retour à L'accueil</Link></button>
           <div className="content-reponse">
                <h1>INVITATION :</h1>
                <h2>BIENVENUE VOICI LES INFORMATIONS </h2>
                <p>test test test</p>
           </div>
        </div>
    );
};

export default Reponse;