import React, { useContext, useEffect, useState } from "react";
import profile from "../../assets/profile.svg";
import { Dropdown, Nav } from "react-bootstrap";
import UserContext from "../structural/UserContext";
import { Link } from "react-router-dom";
import useRedirectWithUserState from "./useRedirectWithUserState";

function HeaderAuth() {
    const [userState, setUserState] = useContext(UserContext);
    const [target, setTarget] = useState("");
    const [loggedOut, setLoggedOut] = useState(() => userState === 0);
    const redirectWithUserState = useRedirectWithUserState(
        userState,
        userState => userState === 0,
        "You have successfully logged out.",
        "/welcome"
    )

    useEffect(() => {
        if (userState === 1) {
            setTarget("/profile/individual");
        } else if (userState === 2) {
            setTarget("/profile/lab");
        }
    }, [userState])

    useEffect(() => {
        if (userState === 0 && loggedOut) {
            redirectWithUserState();
        }
    }, [userState, loggedOut])

    const handleLogout = () => {
        setUserState(0); // make sure userState cannot be changed to 0 by handleLogout
        setLoggedOut(true); // Otherwise HeaderAuth might have a discrepency between userState and loggedOut
        // To-do: send to backend
    }

    if (userState === 0) {
        return <Nav>
            <Nav.Link as={Link} to="/auth/signup">SIGN UP</Nav.Link>
            <Nav.Link as={Link} to="/auth/login">LOG IN</Nav.Link>
        </Nav>
    } else if (userState === 1 || userState === 2) {
        return <Dropdown as={Nav}>
            <Dropdown.Toggle as={Nav.Item}>
                <img
                    src={profile}
                    alt="profile"
                    width="30"
                    height="30"
                    className="d-inline-block align-top" />
            </Dropdown.Toggle>
            <Dropdown.Menu id="profileDropdown">
                <Dropdown.Item as={Link} to={target}>
                    Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                    Log Out
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    }
}

export default HeaderAuth;