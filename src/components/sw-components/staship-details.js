import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiConsumer} from "../swapi-service-context/context";

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

export default {
    StarshipDetails
};