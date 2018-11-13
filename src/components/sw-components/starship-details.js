import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
import {withSwapiService} from '../hoc-helpers/with-swapi-service'

const StarShipDetails = ({id}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarShip, getStarShipImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};

export default StarShipDetails;