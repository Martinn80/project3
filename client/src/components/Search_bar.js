import React, { useState, useEffect } from "react";
import axios from "axios";

function Search_bar() {
    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState("cats");
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyAakxYQit1DRIQag9AXDESHnUc2P6lNwBk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=${search}&type=video&key=${apiKey}`;
    const url = "https://www.youtube.com/embed/";

    const handleChange = e => {
        const userInput = e.target.value;
        setSearch(userInput);
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .get(videoSearchUrl)
            .then(res => {
                let items = res.data.items;
                setApiData(items);
            })
            .catch(err => console.log(err));
    };

    return (
        <>
            <div className="input-group mb-5 mt-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search for"
                    onChange={handleChange}
                />
                <div className="input-group-prepend">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-secondary"
                    >
                        submit
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            src={url}
                            className="embed-responsive-item"
                        ></iframe>
                    </div>

                    <div className="detail">
                        <div>{""}</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <ul>
                    {apiData.map(video => (
                        <li key={video.id.videoId}>
                            <a href={url + video.id.videoId}>
                                <img
                                    src={video.snippet.thumbnails.default.url}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Search_bar;
