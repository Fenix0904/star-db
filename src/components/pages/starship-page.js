import React from 'react';
import {StarShipList} from "../sw-components/item-lists";
import {withRouter} from 'react-router-dom';

const StarshipPage = ({history}) => {
    return (
        <StarShipList onItemSelected={(id) => history.push(id)}/>
    );
};

export default withRouter(StarshipPage);