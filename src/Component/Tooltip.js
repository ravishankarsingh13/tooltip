import React from 'react';
// import the react tooltip 
import ReactTooltip from "react-tooltip";
// import css
import '../css/Tooltip.css';

function Tooltip({place}) {
    return (
        <div className="tooltip">
            {/* this is my button for function */}
            <button data-tip data-for="registerTip">
                Hover Me
            </button>
            {/* this is functionality of reacttooltip  */}
            <ReactTooltip id="registerTip" place={place} effect="solid">
                Tooltip {place}
            </ReactTooltip>
        </div>
    )
}

export default Tooltip
