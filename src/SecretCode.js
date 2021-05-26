import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reponse';
import './Titre.css'


function SecretCode(props) {
    const [code, setCode] = useState("")
    
      
    function handleChange(e) {
        setCode(e.target.value.toUpperCase());
      }

    return (
        <div className="content-secret">
            <div className="introduction">
            <br /><p>Mariage de <strong>Noémie</strong> <span>&</span> <strong>Damien</strong></p><br />
            <p>Nous vous convions à notre cérémonie de mariage.</p>
        </div>
        <div className="footer-div">
            <p className="labelParagraphe"> Vous avez un code secret ?</p>
            <form>
                <label>
                   Insérez ici votre code...
                    <input  type="text" placeholder="Code Secret" value={code} onChange={handleChange} />
                </label>
                {code ==="DAMIEN" ? <button><Link to='/Reponse' className="btn">Envoyer !</Link></button> : <button className="btn-mauvais">Mauvais code !</button>}
            </form>
        </div>
        </div>
        );
}

export default SecretCode;
 
