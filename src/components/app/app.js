import React from "react";
import Header from "../header/header";

import "./app.css";
import ErrorBoundary from "../error-boundary/error-boundary";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import {PlanetDetails} from "../sw-components";
import SwapiService from "../../services/SwapiService";

export default class App extends React.Component {

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService}>
                    <Header/>
                    <RandomPlanet className="rndpl"/>
                    <div className="body">
                        <PeoplePage/>
                        <PlanetDetails id={6}/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}