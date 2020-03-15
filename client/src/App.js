import React, { useState, useEffect } from "react";
import Search_bar from "./components/Search_bar";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Youtube App</h1>
                <Search_bar />
                <Home />
            </div>
        </div>
    );
}

export default App;
