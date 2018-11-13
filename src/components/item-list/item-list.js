import React from "react";
import "./item-list.css";

class ItemList extends React.Component {

    render() {
        const {data} = this.props;
        const items = this.renderItems(data);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        });
    }
}

export default ItemList;