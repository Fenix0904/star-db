import React from 'react';
import "./people-page.css"
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/SwapiService";
import Row from ".././row/row"
import ErrorBoundary from "../error-boundary/error-boundary"

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
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={({name, gender, birthYear}) =>
                          `${name} (${gender}, ${birthYear})`
                      }
            />
        );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
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