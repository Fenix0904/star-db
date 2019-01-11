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
        const { children: renderLabel } = this.props;
        return arr.map((item) => {
            const {id} = item;
            const label = renderLabel(item);
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

ItemList.defaultProps = {
    onItemSelected: () => {}
};

export default ItemList;