import React from 'react';
import styles from '../css_modules/hero.module.css';
import {characters} from "../utils/Constants";

const Hero = props => {
    return (
        <section className="float-left w-25 mr-2 row">
            <img className={`${styles.hero} col`} src={characters[props.charName].img} alt={characters[props.charName].name}/>
        </section>
    );
};

export default Hero;