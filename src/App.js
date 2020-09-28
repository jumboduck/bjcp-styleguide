import React, { useState } from "react";
import "./App.css";
import data from "./data/styleguide.json";
import SearchForm from "./components/SearchForm";
import BeerInfo from "./components/BeerInfo";
import BeerResult from "./components/BeerResult";
import checkBeerInRange from "./helpers/checkBeerInRange.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBeer } from "@fortawesome/free-solid-svg-icons";

const beerList = data[0].category
    .map((category) => category.subcategory)
    .flat()
    .sort();

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [ibuRange, setIbuRange] = useState("any");
    const [srmRange, setSrmRange] = useState("any");
    const [abvRange, setAbvRange] = useState("any");
    const [displayedBeer, setDisplayedBeer] = useState(null);
    const [displayResults, setDisplayResults] = useState(false);
    const results = beerList.filter(
        (beer) =>
            beer.name.toLowerCase().includes(searchTerm) &&
            checkBeerInRange(beer, "abv", abvRange) &&
            checkBeerInRange(beer, "srm", srmRange) &&
            checkBeerInRange(beer, "ibu", ibuRange)
    );

    const resetFilters = () => {
        setSearchTerm("");
        setIbuRange("any");
        setAbvRange("any");
        setSrmRange("any");
        setDisplayResults(false);
    };

    return (
        <div className="app-wrapper">
            <h1>
                <FontAwesomeIcon icon={faBeer} className="beer-icon" />
                BJCP Styleguide
            </h1>
            <div className="search-function">
                <SearchForm
                    searchTerm={searchTerm}
                    ibuRange={ibuRange}
                    abvRange={abvRange}
                    srmRange={srmRange}
                    setSearchTerm={setSearchTerm}
                    setIbuRange={setIbuRange}
                    setSrmRange={setSrmRange}
                    setAbvRange={setAbvRange}
                    setDisplayResults={setDisplayResults}
                />

                <div hidden={!displayResults}>
                    <div className="beer-results">
                        {results.length !== 0 ? (
                            results.map((beer) => (
                                <div
                                    key={beer.name}
                                    className="beer-item"
                                    onClick={() => {
                                        setDisplayedBeer(beer);
                                        setDisplayResults(false);
                                        resetFilters();
                                    }}
                                >
                                    <BeerResult {...beer} />
                                </div>
                            ))
                        ) : (
                            <div className="error">
                                No style matches this search.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div>
                {displayedBeer !== null ? (
                    <BeerInfo
                        beer={displayedBeer}
                        setDisplayedBeer={setDisplayedBeer}
                        setSearchTerm={setSearchTerm}
                        setIbuRange={setIbuRange}
                        setSrmRange={setSrmRange}
                        setAbvRange={setAbvRange}
                        resetFilters={resetFilters}
                    />
                ) : (
                    <div className="beer-info">
                        No style currently selected.
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
