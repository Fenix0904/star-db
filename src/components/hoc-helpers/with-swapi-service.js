import React from "react";
import {SwapiConsumer} from "../swapi-service-context/context";

const withSwapiService = (Wrapped) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapiService) => {
                        return (
                            <Wrapped {...props} swapiService={swapiService}/>
                        )
                    }
                }
            </SwapiConsumer>
        )
    };
};

export default withSwapiService;