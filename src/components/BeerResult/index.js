import React from "react";
import getColorFromSrm from "./../../helpers/getColorFromSrm.js";
import getStatAvg from "./../../helpers/getStatAvg.js";

const BeerResult = (props) => {
    // Might be worth extracting that in a little `getBeerColor` function.
    const beerColor = getStatAvg("srm", props);

    return (
        <>
            <div
                className="beer-color"
                style={{
                    backgroundColor: getColorFromSrm(beerColor),
                }}
            ></div>
            <strong>{props.name}</strong>
        </>
    );
};

export default BeerResult;
