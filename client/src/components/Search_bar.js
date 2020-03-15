import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [apiData, setApiData] = useState([]);
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const q = "cats";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=${q}&type=video&key=${apiKey}`;
    const url = "https://www.youtube.com/embed/";

    let userInput = "";

    const handleChange = e => {
        return (userInput = e.target.value);
    };

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
            <input
                className="form-control"
                type="text"
                placeholder="Search for"
                onChange={handleChange}
            />
            {/* <button className="btn btn-secondary">submit</button> */}
        </>
    );
}

export default Home;
