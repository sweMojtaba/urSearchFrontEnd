import React from "react";
import {ReactComponent as Item1} from "../../assets/item1.svg"
import "./li.scss"


interface BigLiProps {
    title: string;
    subtitle: string;
    note: string; // used as time
}

// const item1Path: string = "../../assets/item1.svg"

export default function BigLi({ title, subtitle, note}: BigLiProps): JSX.Element {
    return <div className="line line-start big-li">
        {/* <img src={item1Path} alt="item1" /> */}
        <Item1 />
        <div className="main-line">
            <div className="main-item">
                <div className="title">{title}</div>
                <div className="subtitle">{subtitle}</div>
            </div>
            <div className="note">{note}</div>
        </div>
        
    </div>
}