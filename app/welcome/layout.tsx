"use client";

import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import { PropsWithChildren } from "react";
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "@/app/context";
import "./slides.scss"; // Import the stylesheet for the Layout component

// Header component with navigation and social media links
function Header() {
    return (
        <HeaderCommon interfaceRoot="/welcome">
            <Nav id="icons">
                {/* Social media links - To be implemented in the backend */}
                <NavLink>
                    <FaFacebookF />
                </NavLink>
                <NavLink>
                    <FaTwitter />
                </NavLink>
                <NavLink>
                    <AiFillInstagram />
                </NavLink>
                <NavLink>
                    <FaLinkedin />
                </NavLink>
            </Nav>
            <Nav id="entries">
                <NavLink as={Link} href="/welcome">
                    HOME
                </NavLink>
                <NavLink as={Link} href="/welcome/contact">
                    CONTACT US
                </NavLink>
                <NavLink as={Link} href="/about">
                    ABOUT US
                </NavLink>
            </Nav>
            <HeaderAuth />
        </HeaderCommon>
    );
}

// Main layout component that includes the header and wraps around the content
export default function Layout({ children }: PropsWithChildren<{}>) {
    const { user, setUser } = useContext(UserContext); // Access user context

    return (
        <>
            <Header />
            <div className={user.state === 2 ? "main-lab" : "main"}>
                <Container fluid className="fit-no-image">
                    {children} {/* Render child components here */}
                </Container>
            </div>
        </>
    );
}
