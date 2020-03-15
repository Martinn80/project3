import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [apiData, setApiData] = useState([]);
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=cats&type=video&key=${apiKey}`;

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
        <>
            <div className="row">
                {apiData.map(item => (
                    <div
                        className="col-xs-12 col-sm-6 col-md-4"
                        key={item.id.videoId}
                    >
                        <img src={item.snippet.thumbnails.default.url} />
                        <h5>{item.snippet.title}</h5>
                        <small>{item.snippet.publishedAt}</small>
                        <p>{item.snippet.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
