import React from "react";

const Video_list_item = ({ video }) => {
    const imgUrl = video.snippet.thumbnail.default.url;

    return (
        <>
            <li>
                <img src={imgUrl} />
                {video.snippet.title}
            </li>
        </>
    );
};

export default Video_list_item;
