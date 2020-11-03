import React from 'react';
import {characters, friends} from "../utils/Constants";
import Friend from "./Friend";

const DreamTeam = props => {
    return (
        <section className="float-right w-50 row no-gutters border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends
                .filter(item => item !== props.charName)
                .map((item, index) =>
                    <Friend picture={characters[item].img} key={index} pos={index + 1}
                                charName={item}
                                />
                    )
            }
        </section>
    );
};

export default DreamTeam;
