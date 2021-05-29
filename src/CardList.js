import React from 'react';
import Card from './Card';

//creates an array of Card elements.

const CardList = ({ dogs }) => {
    const cardComponent = dogs.map((dog, i) => {
        return <Card img={dogs[i].img} breed={dogs[i].breed} size={dogs[i].size} shedding={dogs[i].shedding} character={dogs[i].character}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;