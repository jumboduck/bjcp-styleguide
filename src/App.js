import React, { useState } from "react";
import "./App.css";
import data from "./data/styleguide.json";
import SearchForm from "./components/SearchForm";
import BeerInfo from "./components/BeerInfo";
import BeerResult from "./components/BeerResult";

const beerNames = data[0].category
    .map((category) => category.subcategory)
    .flat()
    .sort();

function App() {
    const [searchTerm, setSearchTerm] = useState(null);
    const [displayedBeer, setDisplayedBeer] = useState(null);
    const results = beerNames.filter((beer) =>
        beer.name.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="app-wrapper">
            <h1>BJCP Styleguide</h1>
            <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ul className="beer-results" hidden={!Boolean(searchTerm)}>
                {searchTerm !== "" && results.length !== 0 ? (
                    results.map((beer) => (
                        <li
                            key={beer.name}
                            className="beer-item"
                            onClick={() => {
                                setDisplayedBeer(beer);
                                setSearchTerm(null);
                            }}
                        >
                            <BeerResult {...beer} />
                        </li>
                    ))
                ) : (
                    <li className="beer-item">No style matches this search.</li>
                )}
            </ul>
            <div>
                {displayedBeer !== null ? (
                    <BeerInfo beer={displayedBeer} />
                ) : (
                    <p>No style selected.</p>
                )}
            </div>
        </div>
    );
}

export default App;
