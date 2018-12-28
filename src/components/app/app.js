import React from "react";
import Header from "../header/header";

import "./app.css";
import ErrorBoundary from "../error-boundary/error-boundary";
import SwapiService from "../../services/SwapiService";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";

export default class App extends React.Component {

    swapiService = new SwapiService();

    render() {

        return (
            <ErrorBoundary>
                <Header/>
                <RandomPlanet className="rndpl"/>
                <div className="body">
                    <PeoplePage/>
                </div>
            </ErrorBoundary>
        )
    }
}