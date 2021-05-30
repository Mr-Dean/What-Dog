import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { dogs } from './dogs';
import './App.css';


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
                <h1 className='title mb1 mt1'>What Dog?</h1>
                <p className='tagline mt1'>Find the breed thats right for you...</p>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList dogs={filteredDogs} />
                </Scroll>
            </div>
        );
    }
}


export default App;