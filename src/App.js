import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: 'luke'
        }
    }

    changeCharacter = character => {
        this.setState({character});
    }

    render() {
        return (
            <div className='container-fluid'>
                <Header charName={this.state.character}/>
                <Main charName={this.state.character} changeCharacter={this.changeCharacter}/>
                <Footer/>
            </div>
        );
    }

}

export default App;
