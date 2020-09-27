import React from "react";

const SearchForm = (props) => {
    const inputRef = React.useRef(null);
    const abvRef = React.useRef(null);

    const handleUpdate = (event) => {
        inputRef.current.value === ""
            ? props.setSearchTerm(null)
            : props.setSearchTerm(inputRef.current.value);
        event.preventDefault();
    };

    const handleAbvUpdate = (event) => {
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
                        Color:
                    </label>
                    <select id="srm-input" className="selector-input">
                        <option>Any</option>
                        <option>1 to 5</option>
                        <option>6 to 10</option>
                        <option>11 to 15</option>
                        <option>16 to 20</option>
                        <option>20 and above</option>
                        <option>Flexible</option>
                    </select>
                </div>
                <div className="selector-group">
                    <label htmlFor="ibu-input" className="selector-label">
                        IBU:
                    </label>
                    <select id="ibu-input" className="selector-input">
                        <option>Any</option>
                        <option>Under 20</option>
                        <option>20 to 40</option>
                        <option>40 to 60</option>
                        <option>60 to 80</option>
                        <option>80 and above</option>
                        <option>Flexible</option>
                    </select>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
