import React from "react";
import { Button, Container } from "react-bootstrap";

import "./info-card.scss"

export default function InfoCard({ compact, title, children, buttonText, buttonAction }) {
    return <Container className="info-card">
        <p className="heading">{title}</p>
        <div className={"paragraph".concat(compact ? " compact" : "")}>
            {children}
        </div>
        <Button onClick={buttonAction}>{buttonText}</Button>
    </Container>
}