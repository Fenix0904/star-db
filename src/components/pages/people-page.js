import React from 'react';
import Row from ".././row/row"
import ErrorBoundary from "../error-boundary/error-boundary"
import {PersonList} from "../sw-components/item-lists";
import PersonDetails from "../sw-components/person-details";
import {withRouter} from "react-router-dom";

const PeoplePage = ({match, history}) => {
    return (
        <ErrorBoundary>
            <Row
                left={<PersonList onItemSelected={(id) => history.push(id)}/>}
                right={<PersonDetails itemId={match.params.id}/>}
            />
        </ErrorBoundary>
    );
};

export default withRouter(PeoplePage);