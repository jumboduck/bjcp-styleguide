import React from "react";

const SearchForm = (props) => {
    const inputRef = React.useRef(null);
    const abvRef = React.useRef(null);
    const ibuRef = React.useRef(null);
    const srmRef = React.useRef(null);

    const handleUpdate = (event) => {
        props.setSearchTerm(inputRef.current.value);
        inputRef.current.value === ""
            ? props.setDisplayResults(false)
            : props.setDisplayResults(true);
        event.preventDefault();
    };

    const ibuTranslation = {
        any: "any",
        "under-20": [0, 20],
        "20-to-40": [20, 40],
        "40-to-60": [40, 60],
        "60-to-80": [60, 80],
        "above-80": [80, Infinity],
        flexible: "flexible",
    };

    const abvTranslation = {
        any: "any",
        "under-4": [0, 4],
        "4-to-6": [4, 6],
        "6-to-9": [6, 9],
        "above-9": [9, Infinity],
        flexible: "flexible",
    };

    const srmTranslation = {
        any: "any",
        "1-to-5": [1, 5],
        "6-to-10": [5, 10],
        "11-to-15": [10, 15],
        "16-to-20": [15, 20],
        "above-20": [20, Infinity],
        flexible: "flexible",
    };

    const handleAbvUpdate = () => {
        let newAbvRange = abvTranslation[abvRef.current.value];
        props.setAbvRange(newAbvRange);
        props.setDisplayResults(true);
    };

    const handleSrmUpdate = () => {
        let newSrmRange = srmTranslation[srmRef.current.value];
        props.setSrmRange(newSrmRange);
        props.setDisplayResults(true);
    };

    const handleIbuUpdate = () => {
        let newIbuRange = ibuTranslation[ibuRef.current.value];
        props.setIbuRange(newIbuRange);
        props.setDisplayResults(true);
    };

    const getKeyByValue = (object, value) => {
        return Object.keys(object).find((key) => object[key] === value);
    };

    return (
        <form className="search-form">
            <div className="text-input">
                <label htmlFor="search" className="search-label sr-only">
                    Find a beer style
                </label>
                <input
                    onChange={handleUpdate}
                    id="search"
                    className="search-input"
                    type="search"
                    ref={inputRef}
                    placeholder="FIND A BEER STYLE 🍺"
                    autoComplete="off"
                    value={props.searchTerm}
                />
            </div>
            <div>
                <button className="reset-btn" onClick={props.resetFilters}>
                    Reset Filters
                </button>
            </div>

            <div className="selector-group">
                <label htmlFor="abv-input" className="selector-label">
                    ABV:
                </label>
                <select
                    onChange={handleAbvUpdate}
                    id="abv-input"
                    name="abv-input"
                    className="selector-input"
                    ref={abvRef}
                    value={getKeyByValue(abvTranslation, props.abvRange)}
                >
                    <option value="any">Any</option>
                    <option value="under-4">Under 4%</option>
                    <option value="4-to-6">4% to 6%</option>
                    <option value="6-to-9">6% to 9%</option>
                    <option value="above-9">Above 9%</option>
                    <option value="flexible">Flexible</option>
                </select>
            </div>
            <div className="selector-group">
                <label htmlFor="srm-input" className="selector-label">
                    Color (in SRM):
                </label>
                <select
                    onChange={handleSrmUpdate}
                    id="srm-input"
                    className="selector-input"
                    ref={srmRef}
                    value={getKeyByValue(srmTranslation, props.srmRange)}
                >
                    <option value="any">Any</option>
                    <option value="1-to-5">1 to 5</option>
                    <option value="6-to-10">6 to 10</option>
                    <option value="11-to-15">11 to 15</option>
                    <option value="16-to-20">16 to 20</option>
                    <option value="above-20">Above 20</option>
                    <option value="flexible">Flexible</option>
                </select>
            </div>
            <div className="selector-group">
                <label
                    htmlFor="ibu-input"
                    ref={ibuRef}
                    className="selector-label"
                >
                    IBU:
                </label>
                <select
                    onChange={handleIbuUpdate}
                    id="ibu-input"
                    className="selector-input"
                    ref={ibuRef}
                    value={getKeyByValue(ibuTranslation, props.ibuRange)}
                >
                    <option value="any">Any</option>
                    <option value="under-20">Under 20</option>
                    <option value="20-to-40">20 to 40</option>
                    <option value="40-to-60">40 to 60</option>
                    <option value="60-to-80">60 to 80</option>
                    <option value="above-80">Above 80</option>
                    <option value="flexible">Flexible</option>
                </select>
            </div>
        </form>
    );
};

export default SearchForm;
