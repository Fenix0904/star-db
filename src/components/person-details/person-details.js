import React from 'react';

import './person-details.css';
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PersonDetails extends React.Component {

    _swapiService = new SwapiService();

    state = {
        person: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.setState({loading: true});
            this.updatePerson();
        }
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updatePerson = () => {
        const {personId} = this.props;
        if (!personId) {
            this.setState({loading: false});
            return;
        }

        this._swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                });
            })
            .catch(this.onError);
    };

    render() {
        const {person, loading, error} = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const notification = !(person || error || loading) ? <span>Select a person from a list</span> : null;
        const spinner = loading && !notification ? <Spinner/> : null;
        const content = hasData ?  <PersonView person={person}/> : null;
        return (
            <div className="person-details card">
                {errorMessage}
                {spinner}
                {notification}
                {content}
            </div>
        )
    }
}

const PersonView = ({person}) => {
    if (!person) {
        return null;
    }
    const {id, name, gender, birthYear, eyeColor} = person;
    return (
        <React.Fragment>
            <img className="person-image"
                 alt="person"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};