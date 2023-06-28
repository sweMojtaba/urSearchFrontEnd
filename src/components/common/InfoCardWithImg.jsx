import React from "react";
import { Button, Container } from "react-bootstrap";

import "./info-card.scss"

export default function InfoCardWithImg({ compact, title, children, buttonText, buttonAction, img }) {
    return <div className="info-card-with-img">
        <img src={img} alt="image for the info card"/>
        <Container className="info-card">
            <p className="heading">{title}</p>
            <div className={"paragraph".concat(compact ? " compact" : "")}>
                {children}
            </div>
            <Button onClick={buttonAction}>{buttonText}</Button>
        </Container>
    </div>
}