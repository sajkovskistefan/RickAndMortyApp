import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getCharacter } from '../../Services/RestAPI';

import './character.css'

const Character = () => {
    const [character, setCharacter] = useState();
    const cat = 'character';
    const location = useLocation();
    const id = location.state.id

    console.log(character)

    useEffect(() => {
        getCharacter(cat,id)
        .then(data => setCharacter(data))
    },[]);

    return (
        <div className="character-page-container">
            {character ? 
                <div className="character-container">
                    <div className="image-div">
                        <img className="character-image" src={character.image} alt="character image" />
                    </div>
                    <div className="character-info">
                        <span>{character.gender}</span>
                        <span>{character.location.name}</span>
                        <span>{character.origin.name}</span>                    
                        <span>{character.species}</span>                    
                        <span>{character.status}</span>
                        <span>{character.type}</span>
                    </div>
                </div>
            :null}
        </div>
    );
};

export default Character;
