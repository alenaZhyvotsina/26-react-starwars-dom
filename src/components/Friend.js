import React from 'react';
import style from '../css_modules/friend.module.css';
import {homePage} from "../utils/Constants";
import {Link} from "react-router-dom";

const Friend = props => {
    let styles = 'w-100 p-1 '; // + style.pointerFriend;
    if (props.pos === 7) {
        styles += style.bottomLeft;
    }
    if (props.pos === 9) {
        styles += style.bottomRight;
    }

    return (
        <Link to={`/${homePage}/${props.charName}`} className="col-4">
            <img className={styles} src={props.picture} alt={props.charName}/>
        </Link>
    );
};

export default Friend;