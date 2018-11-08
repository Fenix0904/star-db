import React from "react";
import ReactDOM from "react-dom";
import "./header.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#">
                        Star DB
                    </a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <a href="#">People</a>
                    </li>
                    <li>
                        <a href="#">Planets</a>
                    </li>
                    <li>
                        <a href="#">Starships</a>
                    </li>
                </ul>
            </div>
        );
    }
}