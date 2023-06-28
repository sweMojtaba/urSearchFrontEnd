import React, { useContext, useEffect, useState } from "react";
import { Dropdown, Nav } from "react-bootstrap";
import profile from "../../../assets/profile.svg";
import useRedirectWithUserState from "../useRedirectWithUserState";
import UserContext from "../../structural/UserContext";
import { Link } from "react-router-dom";


function NavProfile() {
    const [user, setUser] = useContext(UserContext);
    const [target, setTarget] = useState("");
    const [loggedOut, setLoggedOut] = useState(false);
    const redirectWithUserState = useRedirectWithUserState(
        user.state,
        userState => userState !== 0,
        "You have successfully logged out.",
        "/welcome"
    )

    useEffect(() => {
        if (user.state === 1) {
            setTarget("/profile/individual");
        } else if (user.state === 2) {
            setTarget("/profile/lab");
        }
    }, [user.state])

    useEffect(() => {
        if (user.state === 0 && loggedOut) {
            redirectWithUserState();
        }
    }, [user.state, loggedOut])

    const handleLogout = () => {
        setUser({
            state: 0,
            name: ""
        }); // make sure user.state cannot be changed to 0 except by handleLogout
        setLoggedOut(true); // Otherwise HeaderAuth might have a discrepency between user.state and loggedOut
        // To-do: send to backend
    }

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

export default NavProfile;