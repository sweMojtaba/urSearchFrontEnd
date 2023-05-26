import React, { memo, useEffect, useState } from "react";

import "./styles.scss";

import slideButton from "../../assets/slideButton.png";

function SlideButtons(props) {
    const [nums, setNums] = useState([0, 1, 2, 3]);
    const [activeTags, setActiveTags] = useState(["", "", "", ""]);

    useEffect(() => {
        setActiveTags(() => {
            const newActiveTags = ["", "", "", ""];
            newActiveTags[props.activeIndex] = "active";
            return newActiveTags;
        })
    }, [props.activeIndex])

    const handleClick = (num) => {
        props["goToSlide" + (num + 1)]();
        console.log(`Just went to slide ${num+1}`);
    }

    return nums.map((num) => {
        return <a
            key={num}
            href={`#slide${num + 1}`}
        >
            <img
                onClick={() => handleClick(num)}
                src={slideButton}
                alt={"Go to slide " + (num + 1)}
                className={activeTags[num]}
            />
        </a>
    })
}

export default memo(SlideButtons);