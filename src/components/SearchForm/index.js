import React from "react";

const SearchForm = (props) => {
    const inputRef = React.useRef(null);
    const abvRef = React.useRef(null);
    const ibuRef = React.useRef(null);
    const srmRef = React.useRef(null);

    const handleUpdate = (event) => {
        inputRef.current.value === ""
            ? props.setSearchTerm(null)
            : props.setSearchTerm(inputRef.current.value);
        event.preventDefault();
    };

    const handleAbvUpdate = () => {
        let newAbvRange;
        switch (abvRef.current.value) {
            case "any":
                newAbvRange = "any";
                break;
            case "under-4":
                newAbvRange = [0, 4];
                break;
            case "4-to-6":
                newAbvRange = [4, 6];
                break;
            case "6-to-9":
                newAbvRange = [6, 9];
                break;
            case "above-9":
                newAbvRange = [9, Infinity];
                break;
            case "flexible":
                newAbvRange = "flexible";
                break;
            default:
                newAbvRange = "any";
        }
        props.setAbvRange(newAbvRange);
    };

    const handleSrmUpdate = () => {
        let newSrmRange;
        switch (srmRef.current.value) {
            case "any":
                newSrmRange = "any";
                break;
            case "1-to-5":
                newSrmRange = [1, 5];
                break;
            case "6-to-10":
                newSrmRange = [5, 10];
                break;
            case "11-to-15":
                newSrmRange = [10, 15];
                break;
            case "16-to-20":
                newSrmRange = [15, 20];
                break;
            case "above-20":
                newSrmRange = [20, Infinity];
                break;
            case "flexible":
                newSrmRange = "flexible";
                break;
            default:
                newSrmRange = "any";
        }
        props.setSrmRange(newSrmRange);
    };

    const handleIbuUpdate = () => {
        let newIbuRange;
        switch (ibuRef.current.value) {
            case "any":
                newIbuRange = "any";
                break;
            case "under-20":
                newIbuRange = [0, 20];
                break;
            case "20-to-40":
                newIbuRange = [20, 40];
                break;
            case "40-to-60":
                newIbuRange = [40, 60];
                break;
            case "60-to-80":
                newIbuRange = [60, 80];
                break;
            case "above-80":
                newIbuRange = [80, Infinity];
                break;
            case "flexible":
                newIbuRange = "flexible";
                break;
            default:
                newIbuRange = "any";
        }
        props.setIbuRange(newIbuRange);
    };

    return (
        <form className="search-form">
            <label htmlFor="search" className="search-label sr-only">
                Find a beer style
            </label>
            <br />
            <input
                onChange={handleUpdate}
                id="search"
                className="search-input"
                type="search"
                ref={inputRef}
                placeholder="FIND A BEER STYLE 🍺"
                autoComplete="off"
            />
            <div>
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
            </div>
        </form>
    );
};

export default SearchForm;
