import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {friends} from "../utils/Constants";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const hero = this.props.match.params.hero || this.props.charName || 'luke';
        if(friends.indexOf(hero) >= 0) {
            this.setState({hero});
            this.props.changeCharacter(hero);
        }
    }

    render() {
        return (
            <div>
                {(this.state.hero) &&
                <main className="clearfix">
                    <Hero charName={this.state.hero}/>
                    <DreamTeam charName={this.state.hero}/>
                    <FarGalaxy/>
                </main>
                }
            </div>
        );
    }

};

export default Home;