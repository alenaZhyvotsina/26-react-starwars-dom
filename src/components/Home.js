import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";
import {friends, defaultHero} from "../utils/Constants";
import {Redirect} from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            existHero: true,
            hero: defaultHero
        }
        this.heroP = defaultHero;
    }


    getHero = () => {
        let existHero = true;
        //let hero = this.props.match.params.hero || this.props.charName;
        this.heroP = this.props.match.params.hero || this.props.charName;
        /*
        if(!friends.includes(hero)) {
            hero = defaultHero;
            existHero = false;
        }
        this.setState({existHero: existHero, hero: hero});
         */
        if(!friends.includes(this.heroP)) {
            this.heroP = defaultHero;
            existHero = false;
        }
        this.setState({existHero: existHero, hero: this.heroP});
        console.log('getHero', this.props.match.params.hero, this.state.hero, this.heroP);
    }

    componentDidMount() {
        this.getHero();
        //this.props.changeCharacter(this.state.hero);
        this.props.changeCharacter(this.heroP);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.hero !== prevProps.match.params.hero){
            this.getHero();
            console.log('update', this.props.match.params.hero, this.state.hero, this.heroP);
            //this.props.changeCharacter(this.state.hero);
            this.props.changeCharacter(this.heroP);
        }
    }

    render() {
        if(this.state.existHero){
            return (
                <div>
                    <main className="clearfix">
                        <Hero charName={this.heroP}/>
                        <DreamTeam charName={this.heroP}/>
                        <FarGalaxy/>
                    </main>
                </div>
            );
        } else {
            return <Redirect to={`/error`}/>
        }
    }

};

export default Home;