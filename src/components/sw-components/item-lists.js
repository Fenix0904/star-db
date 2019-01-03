import React from "react";
import SwapiService from "../../services/SwapiService";
import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";

const swapiService = new SwapiService();

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    };
};
const renderName = ({name}) => <span>{name}</span>;

const PersonList = withData(
                            withChildFunction(ItemList, renderName),
                            swapiService.getAllPeople);
const PlanetList = withData(
                            withChildFunction(ItemList, renderName),
                            swapiService.getAllPlanets);
const StarshipList = withData(
                            withChildFunction(ItemList, renderName),
                            swapiService.getAllStarShips);

export {
    PersonList,
    PlanetList,
    StarshipList
};