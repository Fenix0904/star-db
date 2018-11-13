import React from 'react';
import SwapiService from "../../services/SwapiService";
import withData from '../hoc-helpers/with-data';
import ItemList from "../item-list/item-list";

const {
    getAllPlanets,
    getAllPeople,
    getAllStarShips
} = new SwapiService();

const withChildFunction = (WrappedComponent, fn) => {
    return (props) => {
        return (<WrappedComponent {...props} renderItem={fn}/>)
    }
};

const renderName = ({name}) => <span>{name}</span>;

const PersonList = withData(withChildFunction(ItemList, renderName), getAllPeople);

const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);

const StarShipList = withData(withChildFunction(ItemList, renderName), getAllStarShips);

export {
    PersonList,
    PlanetList,
    StarShipList
};