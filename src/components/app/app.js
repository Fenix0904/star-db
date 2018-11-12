import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet"
import PeoplePage from "../people-page/people-page";

import "./app.css";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <RandomPlanet className="rndpl"/>
                <div className="body">
                    <PeoplePage/>
                </div>
            </div>
        )
    }
}