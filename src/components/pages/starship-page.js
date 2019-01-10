import React from 'react';
import Row from ".././row/row"
import ErrorBoundary from "../error-boundary/error-boundary"
import {StarshipList} from "../sw-components/item-lists";
import StarshipDetails from "../sw-components/staship-details";

export default class StarshipPage extends React.Component {

    state = {
        selectedStarShip: null,
    };

    onStarShipSelected = (id) => {
        this.setState({
            selectedStarShip: id
        });
    };

    render() {
        const starShipDetails = (
            <StarshipDetails itemId={this.state.selectedStarShip}/>
        );

        const itemList = (
            <StarshipList onItemSelected={this.onStarShipSelected}/>
        );
        return (
            <ErrorBoundary>
                <Row
                    left={itemList}
                    right={starShipDetails}
                />
            </ErrorBoundary>
        );
    }
}