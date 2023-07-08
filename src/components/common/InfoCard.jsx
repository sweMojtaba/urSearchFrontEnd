import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import edit from "../../assets/edit.svg";

import "./info-card.scss"

export default function InfoCard({ title, children, editFunc }) {
    // useEffect(() => {
    //     console.log(buttonProps);
    // }, [buttonProps]);
    return <Container className="info-card">
        <div className="first-line line line-start">
            <p className="heading">{title}</p>
            <img src={edit} alt="edit" onClick={editFunc}/>
        </div>
        <div className="paragraph main-info">
            {children}
        </div>
    </Container>
}