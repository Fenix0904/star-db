import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";
import withSwapiService from '../hoc-helpers/with-swapi-service'

const PersonDetails = ({id, swapiService}) => {
    const {getPerson, getPersonImage} = swapiService;
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
export default withSwapiService(PersonDetails);