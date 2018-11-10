import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet"
import PeoplePage from "../people-page/people-page";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/SwapiService";

export default class App extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    };

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllPlanets}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}