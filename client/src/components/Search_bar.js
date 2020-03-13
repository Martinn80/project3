import React, { useState } from "react";

function Search_bar() {
    const [search, setSearch] = useState({});

    const handleChange = e => {
        console.log(e.target.value);
    };

    return (
        <>
            <input type="text" onChange={handleChange} />
        </>
    );
}

export default Search_bar;
