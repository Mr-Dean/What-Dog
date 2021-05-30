import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa3'>
            <input
                className='pa3 mb5'
                type='search'
                placeholder='Search Dogs'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;