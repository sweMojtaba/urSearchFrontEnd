import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

import "../common/header/header.scss";
import HeaderCommon from "../common/header/HeaderCommon";
import HeaderAuth from "../common/header/HeaderAuth";

function Header() {
    return <HeaderCommon interfaceRoot="/welcome">
        <Nav id="icons">
            {/* To-do: add sharing links (backend) */}
            <Nav.Link>
                <FaFacebookF />
            </Nav.Link>
            <Nav.Link>
                <FaTwitter />
            </Nav.Link>
            <Nav.Link>
                <AiFillInstagram />
            </Nav.Link>
            <Nav.Link>
                <FaLinkedin />
            </Nav.Link>
        </Nav>
        <Nav id="entries">
            <Nav.Link as={Link} to="/welcome">HOME</Nav.Link>
            <Nav.Link as={Link} to="/welcome/contact">CONTACT US</Nav.Link>
            <Nav.Link as={Link} to="/welcome/about">ABOUT US</Nav.Link>
        </Nav>
        <HeaderAuth />
    </HeaderCommon>
}

export default Header;