import React, { useState, useEffect } from "react";
import axios from "axios";

function HeroVideo() {
    const [video, setVideo] = useState([]);
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=cats&type=video&key=${apiKey}`;
    const url = "https://www.youtube.com/embed/";

    useEffect(() => {
        axios
            .get(videoSearchUrl)
            .then(res => {
                console.log(res.data.items);
                setVideo(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    {console.log(video)}
                    <iframe className="embed-responsive-item" src=""></iframe>
                </div>
            </div>
        </>
    );
}

export default HeroVideo;
