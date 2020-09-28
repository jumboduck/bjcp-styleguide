import React from "react";
import getColorFromSrm from "../../helpers/getColorFromSrm.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const BeerInfo = (props) => {
    const handleClose = () => {
        props.setDisplayedBeer(null);
        props.resetFilters();
    };

    const gradient =
        props.beer.stats.srm.flexible === "true"
            ? getColorFromSrm(6).toString() +
              "," +
              getColorFromSrm(7).toString()
            : getColorFromSrm(
                  Math.floor(parseFloat(props.beer.stats.srm.low))
              ).toString() +
              "," +
              getColorFromSrm(
                  Math.floor(parseFloat(props.beer.stats.srm.high))
              ).toString();

    return (
        <div className="beer-info ">
            <FontAwesomeIcon
                className="close-button"
                icon={faTimes}
                onClick={handleClose}
            />
            <h2>
                {props.beer.name}
                {/* <FontAwesomeIcon
                    icon={faBeer}
                    className="beer-icon"
                    style={{
                        background: "linear-gradient(" + gradient + ")",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                /> */}
            </h2>
            <dl>
                <dt>Aroma:</dt>
                <dd>{props.beer.aroma}</dd>
                <dt>Appearance:</dt>
                <dd>{props.beer.appearance}</dd>
                <dt>Flavor:</dt> <dd>{props.beer.flavor}</dd>
                <dt>Mouthfeel:</dt>
                <dd>{props.beer.mouthfeel}</dd>
                <dt>Impression:</dt>
                <dd>{props.beer.impression}</dd>
                <dt>Comments:</dt>
                <dd>{props.beer.comments}</dd>
                <dt>History:</dt>
                <dd>{props.beer.history}</dd>
                <dt>Ingredients:</dt>
                <dd>{props.beer.ingredients}</dd>
                <dt>Comparison:</dt>
                <dd>{props.beer.comparison}</dd>
                <dt>Examples:</dt>
                <dd>{props.beer.examples}</dd>
                <dt>Stats:</dt>
                <dd>
                    <table>
                        <tbody>
                            <tr>
                                <th>IBU:</th>
                                <td>
                                    {props.beer.stats.ibu.flexible === "true"
                                        ? "Flexible"
                                        : props.beer.stats.ibu.low +
                                          " to " +
                                          props.beer.stats.ibu.high}
                                </td>
                            </tr>
                            <tr>
                                <th>OG:</th>
                                <td>
                                    {props.beer.stats.og.flexible === "true"
                                        ? "Flexible"
                                        : props.beer.stats.og.low +
                                          " to " +
                                          props.beer.stats.og.high}
                                </td>
                            </tr>
                            <tr>
                                <th>FG:</th>
                                <td>
                                    {props.beer.stats.fg.flexible === "true"
                                        ? "Flexible"
                                        : props.beer.stats.fg.low +
                                          " to " +
                                          props.beer.stats.fg.high}
                                </td>
                            </tr>
                            <tr>
                                <th>SRM:</th>
                                <td>
                                    {props.beer.stats.srm.flexible === "true"
                                        ? "Flexible"
                                        : props.beer.stats.srm.low +
                                          " to " +
                                          props.beer.stats.srm.high}
                                    {
                                        <div
                                            className="beer-color"
                                            style={{
                                                marginLeft: ".5rem",
                                                backgroundImage:
                                                    "linear-gradient(to right," +
                                                    gradient +
                                                    ")",
                                            }}
                                        ></div>
                                    }
                                </td>
                            </tr>
                            <tr>
                                <th>ABV:</th>
                                <td>
                                    {props.beer.stats.abv.flexible === "true"
                                        ? "Flexible"
                                        : props.beer.stats.abv.low +
                                          " to " +
                                          props.beer.stats.abv.high}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </dd>
            </dl>
        </div>
    );
};

export default BeerInfo;
