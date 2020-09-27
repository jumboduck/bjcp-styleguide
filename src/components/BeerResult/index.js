import React from "react";
import getColorFromSrm from "./../../helpers/getColorFromSrm.js";
import getStatAvg from "./../../helpers/getStatAvg.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

const BeerResult = (props) => {
    const beerColor = getStatAvg("srm", props);

    return (
        <>
            <FontAwesomeIcon
                icon={faBeer}
                style={{ color: getColorFromSrm(beerColor) }}
                className="beer-icon"
            />

            <strong>{props.name}</strong>
            <div>
                ABV:{" "}
                {props.stats.abv.flexible === "false"
                    ? props.stats.abv.low + "% to " + props.stats.abv.high + "%"
                    : "flexible"}
            </div>
            <div>
                IBU:{" "}
                {props.stats.ibu.flexible === "false"
                    ? props.stats.ibu.low +
                      " to " +
                      props.stats.ibu.high +
                      "IBU"
                    : "flexible"}
            </div>
        </>
    );
};

export default BeerResult;
