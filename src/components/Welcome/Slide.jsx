import React from "react";

import "./styles.scss";

import SlideButtons from "./SlideButtons";

function Slide(props) {

    return <div id="slide" style={{ backgroundImage: `url(${props.img})` }}>
        <h1 className="slogan">{props.slogan}</h1>
        <p className="text">{props.text}</p>
        <div id="slideButtons">
            <SlideButtons
                activeIndex={props.activeIndex}
                goToSlide1={props.goToSlide1}
                goToSlide2={props.goToSlide2}
                goToSlide3={props.goToSlide3}
                goToSlide4={props.goToSlide4}
            />
        </div>
    </div>
}

export default Slide;