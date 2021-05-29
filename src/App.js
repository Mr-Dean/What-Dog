import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { dogs } from './dogs';


class App extends React.Component{
    constructor() {
        super()
        this.state = {
            dogs: dogs,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const filteredDogs = this.state.dogs.filter(dogs => {
            return dogs.breed.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>What Dog?</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList dogs={filteredDogs} />
            </div>
        );
    }
}


export default App;