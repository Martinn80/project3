import React, { useState } from "react";

function Search_bar() {
    const [search, setSearch] = useState({});

    const handleChange = e => {
        console.log(e.target.value);
    };

    return (
        <>
            <input
                className="form-control"
                type="text"
                placeholder="Search for"
                onChange={handleChange}
            />
        </>
    );
}

export default Search_bar;
