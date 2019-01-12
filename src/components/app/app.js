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

import {BrowserRouter as Router, Route} from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";

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
                    <Router>
                        <React.Fragment>
                            <Header onChangeService={this.onChangeService}/>
                            <RandomPlanet className="rndpl"/>
                            <div className="body">
                                <Route path="/"
                                       exact
                                       render={() => <h2>Welcome!</h2>}/>
                                <Route path="/people" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetPage}/>
                                <Route path="/starships" exact component={StarshipPage}/>
                                <Route path="/starships/:id"
                                       render={({match}) => {
                                           return <StarshipDetails itemId={match.params.id}/>
                                       }}/>
                            </div>
                        </React.Fragment>
                    </Router>
                </SwapiProvider>
            </ErrorBoundary>
        )
    }
}