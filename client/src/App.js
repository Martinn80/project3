import React, { useState, useEffect } from "react";
import Search_bar from "./components/Search_bar";
// import YTSearch from "youtube-api-search";
// import Video_list from "./components/Video_list";
import axios from "axios";

function App() {
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const [term, setTerm] = useState("songs");
    const [apiData, setApiData] = useState([]);

    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=cats&type=video&key=${apiKey}`;
    console.log(videoSearchUrl);

    useEffect(() => {
        axios
            .get(videoSearchUrl)
            .then(res => {
                let items = res.data.items;
                console.log(items);
                setApiData(items);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <div className="container">
                <h1>Youtube App</h1>
                <br />
                <Search_bar />
                <br />
                <ul className="list-group">
                    {apiData.map(item => (
                        <li className="list-group-item" key={item.id.videoId}>
                            <h5>{item.snippet.title}</h5>
                            <small>{item.snippet.publishedAt}</small>
                            <p>{item.snippet.description}</p>
                            <img src={item.snippet.thumbnails.default.url} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
