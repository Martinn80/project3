import React from "react";
import Search_bar from "./components/Search_bar";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="container">
                    <Header />
                    <Search_bar />
                </div>
            </div>
        </div>
    );
}

export default App;
