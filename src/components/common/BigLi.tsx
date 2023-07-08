import React from "react";
import Item1 from "../../assets/item1.svg"
import "./li.scss"


interface BigLiProps {
    title: string;
    text: string;
    note: string; // used as time
}

export default function BigLi({ title, text, note}: BigLiProps): JSX.Element {
    return <div className="line line-start big-li">
        <Item1/>
        <div className="main-line">
            <div className="main-item">
                <div className="title">{title}</div>
                <div className="text">{text}</div>
            </div>
            <div className="note">{note}</div>
        </div>
        
    </div>
}