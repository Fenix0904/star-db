import React from 'react';
import "./people-page.css"
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/SwapiService";
import Row from ".././row/row"
import ErrorBoundary from "../error-boundary/error-boundary"
import {PersonDetails, PersonList, PlanetList} from "../sw-components";

export default class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    render() {

        const personDetails = (
            <PersonDetails id={this.state.selectedPerson}/>
        );

        const itemList = (
            <PersonList onItemSelected={this.onPersonSelected}/>
        );

        return (
            <ErrorBoundary>
                <Row
                    left={itemList}
                    right={personDetails}
                />
            </ErrorBoundary>
        );
    }
}