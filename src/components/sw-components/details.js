import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiConsumer} from "../swapi-service-context/context";

const PersonDetails = ({itemId}) => {
    return (
        <SwapiConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            getData={swapiService.getPerson}
                            getImageUrl={swapiService.getPersonImage}
                            itemId={itemId}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiConsumer>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            getData={swapiService.getPlanet}
                            getImageUrl={swapiService.getPlanetImage}
                            itemId={itemId}>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="Diameter"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiConsumer>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <SwapiConsumer>
            {
                (swapiService) => {
                    return (
                        <ItemDetails
                            getData={swapiService.getStarShip}
                            getImageUrl={swapiService.getStarShipImage}
                            itemId={itemId}>
                            <Record field="model" label="Model:"/>
                            <Record field="length" label="Length:"/>
                            <Record field="costInCredits" label="Cost:"/>
                        </ItemDetails>
                    );
                }
            }
        </SwapiConsumer>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};