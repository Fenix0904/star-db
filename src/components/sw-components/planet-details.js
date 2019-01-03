import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiConsumer} from "../swapi-service-context/context";

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

export default {
    PlanetDetails,
};