import React from 'react';
import "./people-page.css"
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/SwapiService";
import Row from ".././row/row"

export default class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    };


    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch() {
        this.setState({hasError: true});
        console.log("error")
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        }
        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
        );
        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );
        return (
            <Row
                left={itemList}
                right={personDetails}
            />
        );
    }
}