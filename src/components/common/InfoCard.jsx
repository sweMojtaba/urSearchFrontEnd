import React from "react";
import { Button, Container } from "react-bootstrap";

import "./info-card.scss"

export default function InfoCard({ title, children, buttonText, buttonAction }) {
    return <Container className="info-card">
        <h2>{title}</h2>
        <ul>
            {children}
        </ul>
        <Button onClick={buttonAction}>{buttonText}</Button>
    </Container>
}