import React from "react";
import ReactDOM from "react-dom";
import "./item-list.css";

export default class ItemList extends React.Component {
    render() {
        return (
            <div>
                <ul className="item-list list-group">
                    <li className="list-group-item">
                        Luke
                    </li>
                    <li className="list-group-item">
                        Vader
                    </li>
                    <li className="list-group-item">
                        R2-D2
                    </li>
                </ul>
            </div>
        );
    }
}