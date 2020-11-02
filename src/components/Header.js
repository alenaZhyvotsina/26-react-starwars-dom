import React from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/Constants";

const Header = props => {
    return (
        <header>
            <Navigation charName={props.charName}/>
            <h1 className="text-center py-3">{characters[props.charName].name}</h1>
        </header>
    );
};

export default Header;