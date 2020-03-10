import React from "react";
import Image from "./Image";
import Video from "./Video";

const components = {
    image: Image,
    video: Video
};

const Media = (props) => {
    const { type, ...other} = props;
    const MyComponent = components[type];
    const getTest = () => {
        return "Hello";
    };

    return <div>
        <MyComponent {...other} />
        <Video
            number={13 + 15}
            isVideo
            click={() => console.log(11)}
            text={getTest()}
            {...other}
        >
            <div>Привет!</div>
        </Video>
    </div>
};

export default Media;