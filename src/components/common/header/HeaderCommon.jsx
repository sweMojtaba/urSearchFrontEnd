import React, { useContext, useEffect, useState } from "react";
import Logo from "../../../assets/logo.png";
import UserContext from "../../structural/UserContext";
import { Container, Navbar } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";

function HeaderCommon(props) {
    const {user, setUser} = useContext(UserContext);

    return <Navbar expand="md" collapseOnSelect bg="primary" variant="dark" className="sticky-top">
    <Container>
        <Navbar.Brand as={Link} to={props.interfaceRoot}>
            <img
                alt="home"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            <span id="userName">{user.name}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-items" />
        <Navbar.Collapse id="navbar-items">
            {props.children}
        </Navbar.Collapse >
    </Container>
</Navbar>
}

export default HeaderCommon;