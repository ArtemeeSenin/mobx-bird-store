import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const bird = this.bird.value;

        this.props.BirdStore.addBird(bird);
        this.bird.value = '';
    };

    render() {
        const {BirdStore} = this.props;
        return (
            <div className="App">
                <h2>You have {BirdStore.birdCount} birds</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>Bird's name
                        <input type="text" placeholder="Bird's name" ref={input => this.bird = input}/>
                    </label>
                    <button type="submit">Add bird</button>
                </form>

                <ul>
                    { BirdStore.birds.map( bird => (
                        <li key={bird}>{ bird }</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
