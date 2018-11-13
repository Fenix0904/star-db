import React from 'react';
import SwapiService from "../../services/SwapiService";
import withData from '../hoc-helper/with-data';
import ItemDetails, {Record} from "../item-details/item-details";

const {
    getPerson,
    getPlanet,
    getStarShip,
    getPersonImage,
    getPlanetImage,
    getStarShipImage
} = new SwapiService();

const PersonDetails = ({id}) => {
    return (
        <ItemDetails
            getData={getPerson}
            getImageUrl={getPersonImage}
            itemId={id}>
            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
};

const PlanetDetails = ({id}) => {
    return (
        <ItemDetails
            getData={getPlanet}
            getImageUrl={getPlanetImage}
            itemId={id}>
            <Record field="population" label="Population:"/>
            <Record field="rotationPeriod" label="Rotation Period:"/>
            <Record field="diameter" label="Diameter:"/>
        </ItemDetails>
    )
};

const StarShipDetails = ({id}) => {
    return (
        <ItemDetails
            getData={getStarShip}
            getImageUrl={getStarShipImage}
            itemId={id}>
            <Record field="model" label="Model:"/>
            <Record field="length" label="Length:"/>
            <Record field="costInCredits" label="Cost:"/>
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarShipDetails
};