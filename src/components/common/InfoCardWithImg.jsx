import React from "react";
import { Button, Container } from "react-bootstrap";
import InfoCard from "./InfoCard";

import "./info-card.scss"

export default function InfoCardWithImg({ title, children, buttonProps, img }) {
    return <div className="info-card-with-img">
        <img src={img} alt="image for the info card"/>
        <InfoCard 
            title={title}
            children={children}
            buttonProps={buttonProps}
        />
    </div>
}