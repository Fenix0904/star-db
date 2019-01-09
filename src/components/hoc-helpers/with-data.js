import React from "react";
import Spinner from "../spinner/spinner";

const withData = (View) => {
    return class extends React.Component {

        state = {
            data: null,
            loading: true
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.setState({loading: true});
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data: data,
                        loading: false
                    })
                });
        }

        render() {
            const {data, loading} = this.state;
            if (!data || loading) {
                return (
                    <ul className="item-list list-group">
                        <Spinner/>
                    </ul>)
            }
            return <View {...this.props} data={data}/>
        }
    };
};

export default withData;