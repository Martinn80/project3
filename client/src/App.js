import React, { useState, useEffect } from "react";
import Search_bar from "./components/Search_bar";
import Header from "./components/Header";
import Home from "./components/Search_bar";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Youtube App</h1>
                <Header />
                <Search_bar />
            </div>
        </div>
    );
}

export default App;
