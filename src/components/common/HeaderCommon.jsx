import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import UserContext from "../structural/UserContext";
import { Container, Navbar } from "react-bootstrap";

import "./header.scss";
import { Link } from "react-router-dom";

function HeaderCommon(props) {
    const [userState, setUserState] = useContext(UserContext);
    const [username, setUsername] = useState("");
    useEffect(() => {
        if (userState !== 0) {
            setUsername(localStorage.getItem("username") ?? "");
        }
    }, [userState])
    return <Navbar expand="md" collapseOnSelect bg="primary" variant="dark">
    <Container>
        <Navbar.Brand as={Link} to={props.interfaceRoot}>
            <img
                alt="home"
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' ' + username}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-items" />
        <Navbar.Collapse id="navbar-items">
            {props.children}
        </Navbar.Collapse >
    </Container>
</Navbar>
}

export default HeaderCommon;