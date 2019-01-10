import React from 'react';
import Row from ".././row/row"
import ErrorBoundary from "../error-boundary/error-boundary"
import {PersonList} from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";

export default class PeoplePage extends React.Component {

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
            <PersonDetails itemId={this.state.selectedPerson}/>
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