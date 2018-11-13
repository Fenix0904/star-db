import React from 'react';
import SwapiService from "../../services/SwapiService";
import WithData from '../hoc-helper/with-data';
import ItemList from "../item-list/item-list";

const {
    getAllPlanets,
    getAllPeople,
    getAllStarShips
} = new SwapiService();


const PersonList = WithData(ItemList, getAllPeople);

const PlanetList = WithData(ItemList, getAllPlanets);

const StarShipList = WithData(ItemList, getAllStarShips);

export {
    PersonList,
    PlanetList,
    StarShipList
};