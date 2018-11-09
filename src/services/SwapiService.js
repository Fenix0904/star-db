export default class SwapiService {

    _apiBase = `https://swapi.co/api`;

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getStarShip(id) {
        const starShip = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starShip);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformPerson(person) {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        };
    }

    _transformStarship(sratShip) {
        return {
            id: this._extractId(sratShip),
            name: sratShip.name,
            model: sratShip.model,
            manufacturer: sratShip.manufacturer,
            costInCredits: sratShip.costInCredits,
            length: sratShip.length,
            crew: sratShip.crew,
            passengers: sratShip.passengers,
            cargoCapacity: sratShip.cargoCapacity
        };
    }
}