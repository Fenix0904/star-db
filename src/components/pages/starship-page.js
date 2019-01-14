import React from 'react';
import {StarShipList} from "../sw-components/item-lists";
import {withRouter} from 'react-router-dom';

const StarshipPage = ({history}) => {
    return (
        <StarShipList onItemSelected={(itemId) => {
            const newPath = `/starships/${itemId}`;
            history.push(newPath);
        }}/>
    );
};

export default withRouter(StarshipPage);