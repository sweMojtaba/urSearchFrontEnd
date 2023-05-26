import React, { useEffect, useState } from "react";

import "./styles.scss";

import slideButton from "../../assets/slideButton.png";

function Slide(props) {
    const [activeTags, setActiveTags] = useState(["", "", "", ""]);

    useEffect(() => {
        setActiveTags((prev) => {
            const newActiveTags = [...prev];
            newActiveTags[props.activeIndex] = "active";
            return newActiveTags;
        })
    }, [props])


    // To-do: memo SlideButtons
    const SlideButtons = () => {
        const nums = [0,1,2,3];
        const Buttons = nums.map((num) => {
            return <img
            onClick={props["goToSlide"+(num+1)]}
            src={slideButton}
            alt={"Go to slide "+(num+1)}
            className={activeTags[num]}
            />
        })
        return Buttons;
    }

    return <div id="slide" style={{ backgroundImage: `url(${props.img})` }}>
        <h1 className="slogan">{props.slogan}</h1>
        <p className="text">{props.text}</p>
        <div id="slideButtons">
            <SlideButtons/>
        </div>
    </div>
}

export default Slide;