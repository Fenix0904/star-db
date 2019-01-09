import React from "react";
import Header from "../header/header";

import "./app.css";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiService from "../../services/SwapiService";
import {SwapiProvider} from "../swapi-service-context/context";
import TestSwapiService from "../../services/TestSwapiService";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import RandomPlanet from "../sw-components/random-planet";

export default class App extends React.Component {

    state = {
        swapiService: new SwapiService()
    };

    onChangeService = () => {
        this.setState((state) => {
            const Service = state.swapiService instanceof SwapiService ? TestSwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        });
    };

    render() {
        return (
            <ErrorBoundary>
                <SwapiProvider value={this.state.swapiService}>
                    <Header onChangeService={this.onChangeService}/>
                    <RandomPlanet className="rndpl"/>
                    <div className="body">
                        <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/>
                    </div>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
}