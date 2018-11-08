import React from "react";
import ReactDOM from "react-dom";
import Header from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details"
import RandomPlanet from "../random-planet/random-planet"

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        )
    }
}