import React, { useState, useEffect } from "react";
import axios from "axios";

function Search_bar() {
    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState("cats");
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyAakxYQit1DRIQag9AXDESHnUc2P6lNwBk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&maxResults=10&q=${search}&type=video&key=${apiKey}`;
    const [currentVideo, setCurrentVideo] = useState("");
    const url = "https://www.youtube.com/embed/" + currentVideo;

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
                console.log(res.data.items);
                setApiData(items);
            })
            .catch(err => console.log(err));
    };

    const handleCurrentVideo = e => {
        console.log(e.target.attributes[0].value);
        setCurrentVideo(e.target.attributes[0].value);
    };

    const handleSave = e => {
        console.log(e.target);
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

            <div className="container mt-5">
                <ul className="row">
                    {apiData.map(video => (
                        <li
                            className="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 mb-5 text-center m-1"
                            style={{
                                display: "inline",
                                backgroundColor: "#242424"
                            }}
                            key={video.id.videoId}
                        >
                            <img
                                style={{ cursor: "pointer" }}
                                onClick={handleCurrentVideo}
                                data={video.id.videoId}
                                src={video.snippet.thumbnails.default.url}
                            />
                            <br />
                            <a
                                href={""}
                                className="badge badge-secondary btn-sm my-2 p-2"
                            >
                                SAVE
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Search_bar;
