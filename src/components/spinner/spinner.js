import React from 'react';
import ReactDOM from 'react-dom';

import './spinner.css';

const Spinner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-double-ring">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;