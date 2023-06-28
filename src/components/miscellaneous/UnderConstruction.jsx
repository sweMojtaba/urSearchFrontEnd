import React from "react";
import { Container } from "react-bootstrap";
import { IoMdConstruct } from "react-icons/io";

import "./styles.scss"

function UnderConstruction() {
    return <Container className="sparse-content">
        <h1>This page is still under construction.</h1>
        <IoMdConstruct className="big-icon"/>
    </Container>
}

export default UnderConstruction;