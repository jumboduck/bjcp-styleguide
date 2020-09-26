import React from "react";

const SearchForm = (props) => {
    const inputRef = React.useRef(null);

    const handleUpdate = (event) => {
        inputRef.current.value === ""
            ? props.setSearchTerm(null)
            : props.setSearchTerm(inputRef.current.value);
        event.preventDefault();
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
        </form>
    );
};

export default SearchForm;
