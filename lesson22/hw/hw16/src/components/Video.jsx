import React from "react";

const Video = ({url, name, isVideo, click, number, text, children}) => (
    <div onClick={click}>
        This is video. Url: {url}, Name: {name}, is video:
        {isVideo ? "true" : "false"},
        number: {number}, text: {text}
        {children}
    </div>
);

export default Video;