import React from "react";
import {SwapiConsumer} from "../swapi-service-context/context";

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {
                    (swapiService) => {
                        const dataSource = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped {...props} {...dataSource}/>
                        )
                    }
                }
            </SwapiConsumer>
        )
    };
};

export default withSwapiService;