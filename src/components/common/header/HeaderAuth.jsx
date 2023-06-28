import React, { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import UserContext from "../../structural/UserContext";
import { Link } from "react-router-dom";
import NavProfile from "./NavProfile";

function HeaderAuth() {
    const [user, setUser] = useContext(UserContext);
    
    if (user.state === 0) {
        return <Nav>
            <Nav.Link as={Link} to="/auth/signup">SIGN UP</Nav.Link>
            <Nav.Link as={Link} to="/auth/login">LOG IN</Nav.Link>
        </Nav>
    } else if (user.state === 1 || user.state === 2) {
        return <NavProfile/>
    }
}

export default HeaderAuth;