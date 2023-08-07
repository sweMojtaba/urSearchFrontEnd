import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import { PropsWithChildren } from "react";

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

import Link from "next/link";

import "./slides.scss";

function Header() {
    return <HeaderCommon interfaceRoot="/welcome">
        <Nav id="icons">
            {/* To-do: add sharing links (backend) */}
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
            <NavLink as={Link} href="/welcome">HOME</NavLink>
            <NavLink as={Link} href="/welcome/contact">CONTACT US</NavLink>
            <NavLink as={Link} href="/welcome/about">ABOUT US</NavLink>
        </Nav>
        <HeaderAuth />
    </HeaderCommon>
}

export default function Layout({ children }: PropsWithChildren<{}>) {
    return <>
        <Header />
        <div className="main">
            <Container fluid className="fit">
                {children}
            </Container>
        </div>
    </>
}