"use client" 
// TO-DO: I added this only because bootstrap haven't added support for server components yet

import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import { PropsWithChildren } from "react";

import { Container, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

import Link from "next/link";

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
            <Nav.Link as={Link} href="/welcome">HOME</Nav.Link>
            <Nav.Link as={Link} href="/welcome/contact">CONTACT US</Nav.Link>
            <Nav.Link as={Link} href="/welcome/about">ABOUT US</Nav.Link>
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