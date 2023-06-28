import React from "react";
import HeaderCommon from "../common/header/HeaderCommon";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai"
import HeaderAuth from "../common/header/HeaderAuth";

function Header() {
    return <HeaderCommon>
        <Nav id="entries">
            <Nav.Link as={Link} to="">Your Profile</Nav.Link>
            <Nav.Link as={Link} to="">Applications</Nav.Link>
            <Nav.Link as={Link} to="">
                <span>Jobs</span>
                <AiOutlineSearch />
            </Nav.Link>
        </Nav>
        <HeaderAuth />
    </HeaderCommon>
}

export default Header;