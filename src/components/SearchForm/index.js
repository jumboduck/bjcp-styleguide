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
        <form>
            <label htmlFor="search">Enter yo beer style</label>
            <br />
            <input
                onChange={handleUpdate}
                id="search"
                type="search"
                ref={inputRef}
                placeholder="FIND YO BEER 🍺"
            />
        </form>
    );
};

export default SearchForm;
