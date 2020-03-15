import React, { useState, useEffect } from "react";
import Search_bar from "./components/Search_bar";
import Video from "./components/Video";
import HeroVideo from "./components/HeroVideo";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>Youtube App</h1>
                <Header />
                <Search_bar />
                <HeroVideo />
                <Video />
            </div>
        </div>
    );
}

export default App;
