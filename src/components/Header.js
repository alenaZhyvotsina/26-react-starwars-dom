import React from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/Constants";

const Header = props => {
    const characterName = characters[props.character].name;
    return (
        <header>
            <Navigation/>
            <h1 className="text-center py-3">{characterName}</h1>
        </header>
    );
};

export default Header;