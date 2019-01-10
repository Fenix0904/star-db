import React from 'react';
import Row from ".././row/row"
import ErrorBoundary from "../error-boundary/error-boundary"
import {PlanetList} from "../sw-components/item-lists";
import PlanetDetails from "../sw-components/planet-details";

export default class PlanetPage extends React.Component {

    state = {
        selectedPlanet: null,
    };

    onPlanetSelected = (id) => {
        this.setState({
            selectedPlanet: id
        });
    };

    render() {
        const planetDetails = (
            <PlanetDetails itemId={this.state.selectedPlanet}/>
        );

        const itemList = (
            <PlanetList onItemSelected={this.onPlanetSelected}/>
        );
        return (
            <ErrorBoundary>
                <Row
                    left={itemList}
                    right={planetDetails}
                />
            </ErrorBoundary>
        );
    }
}