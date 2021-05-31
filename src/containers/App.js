import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { dogs } from '../dogs';
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
                    <ErrorBoundary>
                        <CardList dogs={filteredDogs} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}


export default App;