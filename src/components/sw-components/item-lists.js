import React from "react";
import SwapiService from "../../services/SwapiService";
import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";

const swapiService = new SwapiService();

const PersonList = withData(ItemList, swapiService.getAllPeople);
const PlanetList = withData(ItemList, swapiService.getAllPlanets);
const StarshipList = withData(ItemList, swapiService.getAllStarShips);

export {
    PersonList,
    PlanetList,
    StarshipList
};