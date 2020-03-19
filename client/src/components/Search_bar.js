import React, { useState, useEffect } from "react";
import axios from "axios";
// import HeroVideo from "./HeroVideo";
// import Video from "./Video";

function Search_bar() {
    // const [query, setQuery] = useState("cats");
    let query = "cat";
    const [apiData, setApiData] = useState([]);
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=${query}&type=video&key=${apiKey}`;
    const url = "https://www.youtube.com/embed/";

    useEffect(() => {
        axios
            .get(videoSearchUrl)
            .then(res => {
                let items = res.data.items;
                setApiData(items);
            })
            .catch(err => console.log(err));
    }, []);

    const handleChange = e => {
        return e;
    };

    const handleSubmit = e => {
        e.preventDefault();
        let q = handleChange();
        return (query = q);
    };

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        Search
                    </button>
                </form>
            </nav>
            {/* Search-bar */}
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src=""></iframe>
                </div>
            </div>

            {/* All Videos */}
            <div className="row mt-5 mb-5">
                {apiData.map(item => (
                    <div
                        className="col-xs-12 col-sm-6 col-md-4"
                        key={item.id.videoId}
                    >
                        <div
                            className="card mb-5"
                            style={{ width: "18rem", minHeight: "550px" }}
                        >
                            <a href={url + item.id.videoId}>
                                <img
                                    className="card-img-top"
                                    src={item.snippet.thumbnails.default.url}
                                    alt="Card image cap"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.snippet.title}
                                </h5>
                                <small className="font-weight-bold">
                                    {item.snippet.publishedAt}
                                </small>
                                <p className="card-text">
                                    {item.snippet.description}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    + Add to Collection
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Search_bar;
