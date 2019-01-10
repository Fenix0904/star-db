import withSwapiService from "../hoc-helpers/with-swapi-service";
import RandomPlanet from "../random-planet/random-planet";

const mapMethodsToProps = (swapiService) => {
    return {
        getPlanet: swapiService.getPlanet,
    }
};

export default withSwapiService(RandomPlanet, mapMethodsToProps);