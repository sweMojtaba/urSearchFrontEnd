import React from "react";
import HeaderCommon from "../common/header/HeaderCommon";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai"
import HeaderAuth from "../common/header/HeaderAuth";

function Header() {
    return <HeaderCommon interfaceRoot="/individual">
        <Nav id="entries">
            <Nav.Link as={Link} to="/individual/profile">Your Profile</Nav.Link>
            <Nav.Link as={Link} to="/individual/applications">Applications</Nav.Link>
            <Nav.Link as={Link} to="/individual/search">
                <span>Jobs</span>
                <AiOutlineSearch />
            </Nav.Link>
        </Nav>
        <HeaderAuth />
    </HeaderCommon>
}

export default Header;