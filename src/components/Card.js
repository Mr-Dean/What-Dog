import React from 'react';
import './card.css';


const Card = ({ img, breed, size, shedding, character }) => {
    
    return (
            <div className='dib br3 pa3 ma2 grow bw2 shadow-5 tc bg-white card'>
            <img alt={breed} src={img} />
            <div>
                <h2>{breed}</h2>
                <p><strong>Height: </strong>{size}</p>
                <p><strong>Shedding: </strong>{shedding}</p>
                <p><strong>Character: </strong>{character}</p>
            </div>
        </div>

    );
}

export default Card;