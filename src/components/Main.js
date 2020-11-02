import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/Constants";
import ErrorPage from "./ErrorPage";
import {Route, Switch} from 'react-router-dom';

const Main = props => {
    return (
        <Switch>
            <Route path={['/', `/${homePage}`, `/${homePage}/:hero`]}
                   exact
                   render={({match}) => <Home charName={props.charName}
                                              changeCharacter={props.changeCharacter}
                                              match={match} />
                          }
                   />
            <Route
                path={[`/${aboutMePage}`,`/${aboutMePage}/:hero`]}
                exact
                render={(routerProps) => <AboutMe charName={props.charName}
                                                  changeCharacter={props.changeCharacter}
                                                  match={routerProps.match} />}
            />
            <Route path={`/${starWarsPage}`} exact component={StarWars}/>
            <Route path={`/${contactPage}`} exact={true}><Contact/></Route>
            <Route component={ErrorPage}/>
        </Switch>
    )

};

export default Main;