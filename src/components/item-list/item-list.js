import React from "react";
import "./item-list.css";
import SwapiService from "../../services/SwapiService";
import Spinner from "../spinner/spinner";

export default class ItemList extends React.Component {

    _swapiService = new SwapiService();

    state = {
        peopleList: null
    };


    componentDidMount() {
        this._swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            });
    }

    render() {
        const {peopleList} = this.state;
        if (!peopleList) {
            return <Spinner/>
        }

        const items = this.renderItems(peopleList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
           return (
               <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                   {name}
               </li>
           )
        });
    }
}