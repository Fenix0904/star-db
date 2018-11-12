import React from 'react';
import "./people-page.css"
import ItemList from "../item-list/item-list";
import ItemDetails, {Record} from "../item-details/item-details";
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

        const personDetails = (
            <ItemDetails
                getData={this.swapiService.getPerson}
                getImageUrl={this.swapiService.getPersonImage}
                itemId={this.state.selectedPerson}>
                <Record field="gender" label="Gender"/>
                <Record field="eyeColor" label="Eye Color"/>
            </ItemDetails>
        );

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={({name}) => name}
            />
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