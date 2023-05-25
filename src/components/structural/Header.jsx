import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.png";
import UserContext from "./UserContext";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
    const [userState, setUserState] = useContext(UserContext);
    const [username, setUsername] = useState("");
    if (userState !== 0) {
        setUsername(localStorage.getItem("username") ?? "");
    }
    let RestOfNavbar;
    if (userState === 0) {
        RestOfNavbar = () => <Nav className="me-auto">
            {/* To-do */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/welcome/contact">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/welcome/about">About Us</Nav.Link>
        </Nav>
    } // To-do
    return <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}

            </Navbar.Brand>
            <RestOfNavbar />
        </Container>
    </Navbar>
}

export default Header;