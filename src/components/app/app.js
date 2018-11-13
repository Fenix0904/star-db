import React from "react";
import Header from "../header/header";

import "./app.css";
import ErrorBoundary from "../error-boundary/error-boundary";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import {PlanetDetails} from "../sw-components";

export default class App extends React.Component {

    render() {

        return (
            <ErrorBoundary>
                <Header/>
                <RandomPlanet className="rndpl"/>
                <div className="body">
                    <PeoplePage/>
                    <PlanetDetails id={6}/>
                </div>
            </ErrorBoundary>
        )
    }
}