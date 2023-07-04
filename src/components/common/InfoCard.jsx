import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";

import "./info-card.scss"

export default function InfoCard({ title, children, buttonProps, buttonPresent }) {
    // useEffect(() => {
    //     console.log(buttonProps);
    // }, [buttonProps]);
    return <Container className="info-card">
        <p className="heading">{title}</p>
        <div className="paragraph main-info">
            {children}
        </div>
        {buttonPresent ? <Button
            onClick={buttonProps?.buttonAction}
            disabled={buttonProps?.disabled}>
            {buttonProps?.buttonText}
        </Button> : null}
    </Container>
}