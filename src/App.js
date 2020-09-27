import React, { useState } from "react";
import "./App.css";
import data from "./data/styleguide.json";
import SearchForm from "./components/SearchForm";
import BeerInfo from "./components/BeerInfo";
import BeerResult from "./components/BeerResult";
import checkBeerInRange from "./helpers/checkBeerInRange.js";

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

    return (
        <div className="app-wrapper">
            <h1>BJCP Styleguide</h1>
            <div className="search-function">
                <SearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setIbuRange={setIbuRange}
                    setSrmRange={setSrmRange}
                    setAbvRange={setAbvRange}
                    setDisplayResults={setDisplayResults}
                />

                <div className="beer-results" hidden={!displayResults}>
                    {results.length !== 0 ? (
                        results.map((beer) => (
                            <div
                                key={beer.name}
                                className="beer-item"
                                onClick={() => {
                                    setDisplayedBeer(beer);
                                    setSearchTerm("");
                                    setDisplayResults(false);
                                }}
                            >
                                <BeerResult {...beer} />
                            </div>
                        ))
                    ) : (
                        <div className="beer-item">
                            No style matches this search.
                        </div>
                    )}
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
                    />
                ) : (
                    <p>No style currently selected.</p>
                )}
            </div>
        </div>
    );
}

export default App;
