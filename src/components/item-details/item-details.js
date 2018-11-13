import React from 'react';

import './item-details.css';
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ItemDetails extends React.Component {

    state = {
        item: null,
        loading: true,
        error: false,
        image: null
    };
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };
    updatePerson = () => {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            this.setState({loading: false});
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                });
            })
            .catch(this.onError);
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({loading: true});
            this.updatePerson();
        }
    }

    render() {
        const {item, loading, error, image} = this.state;

        const fields = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {item});
        });

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const notification = !(item || error || loading) ? <span>Select a person from a list</span> : null;
        const spinner = loading && !notification ? <Spinner/> : null;
        const content = hasData ?  <ItemView item={item} image={image} fields={fields}/> : null;
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

const ItemView = ({item, image, fields}) => {
    if (!item) {
        return null;
    }
    const {name} = item;
    return (
        <React.Fragment>
            <img className="person-image"
                 alt="person"
                 src={image}/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {fields}
                </ul>
            </div>
        </React.Fragment>
    )
};

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};

export {
    Record
}