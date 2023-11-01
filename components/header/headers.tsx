"use client";

import Image from "next/image";
import Logo from "@/utils/logo.png";
import Profile from "./profile.svg";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";

import "./header.scss";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/context";
import Link from "next/link";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";

export function HeaderCommon({ interfaceRoot, children }: { interfaceRoot: string; children: React.ReactNode }) {
    const { user, setUser } = useContext(UserContext);

    return (
        <Navbar expand="md" collapseOnSelect variant="dark" className={`sticky-top ${user.state === 2 ? "bg-lab" : "bg-primary"}`}>
            <Container>
                <Navbar.Brand as={Link} href={interfaceRoot}>
                    <Image alt="home" src={Logo} width="30" height="30" className="d-inline-block align-top" /> <span id="userName">{user.name}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-items" />
                <Navbar.Collapse id="navbar-items">{children}</Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

function NavProfile() {
    const { user, setUser } = useContext(UserContext);
    const [target, setTarget] = useState("");
    const [loggedOut, setLoggedOut] = useState(false);
    const redirectWithUserState = useRedirectWithUserState(user.state, (userState) => userState !== 0, RedirectNotes.LOGGING_OUT, "/welcome");

    useEffect(() => {
        if (user.state === 1) {
            setTarget("/applicant-profile"); // To-do
        } else if (user.state === 2) {
            setTarget("/profile/lab");
        }
    }, [user.state]);

    useEffect(() => {
        if (user.state === 0 && loggedOut) {
            redirectWithUserState();
        }
    }, [user.state, loggedOut, redirectWithUserState]);

    const handleLogout = () => {
        setUser({
            state: 0,
            name: "",
        }); // make sure user.state cannot be changed to 0 except by handleLogout
        setLoggedOut(true); // Otherwise HeaderAuth might have a discrepency between user.state and loggedOut
        // To-do: send to backend
    };

    return (
        <Dropdown as={Nav}>
            <Dropdown.Toggle as={Nav.Item}>
                <Image src={Profile} alt="profile" width="30" height="30" className="d-inline-block align-top" />
            </Dropdown.Toggle>
            <Dropdown.Menu id="profileDropdown">
                <Dropdown.Item as={Link} href={target}>
                    Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export function HeaderAuth() {
    const { user, setUser } = useContext(UserContext);

    if (user.state === 0) {
        return (
            <Nav>
                <Nav.Link as={Link} href="/signup">
                    SIGN UP
                </Nav.Link>
                <Nav.Link as={Link} href="/login">
                    LOG IN
                </Nav.Link>
            </Nav>
        );
    } else if (user.state === 1 || user.state === 2) {
        return <NavProfile />;
    }
}
