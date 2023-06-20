import React, { memo } from "react";

import item1 from "../../assets/item1.svg"
import item2 from "../../assets/item2.svg"

import "./contact.scss";

function ContactInfo(props) {
    return <div className="contact-info">
        <div className="primary-line line line-start">
            <img src={item1} alt="item1"/>
            <p className="heading">{props.team}</p>
        </div>
        <div className="line line-start secondary-line">
            <img src={item2} alt="item2"/>
            <p className="text">Phone: {props.phone}</p>
        </div>
        <div className="line line-start secondary-line">
            <img src={item2} alt="item2"/>
            <p className="text">Email: {props.email}</p>
        </div>
    </div>
}

export default memo(ContactInfo);