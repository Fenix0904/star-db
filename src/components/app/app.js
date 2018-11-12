import React from "react";
import Header from "../header/header";

import "./app.css";
import ErrorBoundary from "../error-boundary/error-boundary";
import Row from "../row/row";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/SwapiService";
import RandomPlanet from "../random-planet/random-planet";
import PeoplePage from "../people-page/people-page";

export default class App extends React.Component {

    swapiService = new SwapiService();

    render() {

        const starshipDetails = (
            <ItemDetails
                getData={this.swapiService.getStarShip}
                getImageUrl={this.swapiService.getStarShipImage}
                itemId={5}>
                <Record field="model" label="Model:"/>
                <Record field="length" label="Length:"/>
                <Record field="costInCredits" label="Cost:"/>
            </ItemDetails>
        );

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