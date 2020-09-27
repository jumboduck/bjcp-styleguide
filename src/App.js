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
    const [searchTerm, setSearchTerm] = useState(null);
    const [abvRange, setAbvRange] = useState("any");
    const [displayedBeer, setDisplayedBeer] = useState(null);
    const results = beerList.filter(
        (beer) =>
            beer.name.toLowerCase().includes(searchTerm) &&
            checkBeerInRange(beer, "abv", abvRange)
    );

    return (
        <div className="app-wrapper">
            <h1>BJCP Styleguide</h1>
            <div className="search-function">
                <SearchForm
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    abvRange={abvRange}
                    setAbvRange={setAbvRange}
                />

                <div className="beer-results" hidden={!Boolean(searchTerm)}>
                    {searchTerm !== "" && results.length !== 0 ? (
                        results.map((beer) => (
                            <div
                                key={beer.name}
                                className="beer-item"
                                onClick={() => {
                                    setDisplayedBeer(beer);
                                    setSearchTerm(null);
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
                    />
                ) : (
                    <p>No style currently selected.</p>
                )}
            </div>
        </div>
    );
}

export default App;
