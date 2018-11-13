import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
import {withSwapiService} from '../hoc-helpers/with-swapi-service'
import StarShipDetails from "./starship-details";

const PlanetDetails = ({id}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};

export default PlanetDetails;