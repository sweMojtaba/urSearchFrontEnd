import React, { useEffect, useState } from "react";

import "./styles.scss";

function Slide(props) {

    return <div id="slide" style={{backgroundImage: `url(${props.img})`}}>
        <h1 className="slogan">{props.slogan}</h1>
        <p className="text">{props.text}</p>
    </div>
}

export default Slide;