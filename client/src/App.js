import React from "react";
import Header from "./components/Header";
import Search_bar from "./components/Search_bar";

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
