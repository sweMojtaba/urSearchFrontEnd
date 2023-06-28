import React from "react";
import item1 from "../../assets/item1.svg"

import "./li.scss"

export default function SmallLi({ text, url }) {
    return <div className="line line-start small-li">
        <img src={item1} alt="item1" />
        <a href={url}>{text}</a>
    </div>
}