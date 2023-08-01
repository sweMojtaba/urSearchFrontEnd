import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import { PropsWithChildren } from "react";

import { ClientContainer, ClientNav, ClientNavLink } from "@/client-wrappers/bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"

import Link from "next/link";

import "./slides.scss";

function Header() {
    return <HeaderCommon interfaceRoot="/welcome">
        <ClientNav id="icons">
            {/* To-do: add sharing links (backend) */}
            <ClientNavLink>
                <FaFacebookF />
            </ClientNavLink>
            <ClientNavLink>
                <FaTwitter />
            </ClientNavLink>
            <ClientNavLink>
                <AiFillInstagram />
            </ClientNavLink>
            <ClientNavLink>
                <FaLinkedin />
            </ClientNavLink>
        </ClientNav>
        <ClientNav id="entries">
            <ClientNavLink as={Link} href="/welcome">HOME</ClientNavLink>
            <ClientNavLink as={Link} href="/welcome/contact">CONTACT US</ClientNavLink>
            <ClientNavLink as={Link} href="/welcome/about">ABOUT US</ClientNavLink>
        </ClientNav>
        <HeaderAuth />
    </HeaderCommon>
}

export default function Layout({ children }: PropsWithChildren<{}>) {
    return <>
        <Header />
        <div className="main">
            <ClientContainer fluid className="fit">
                {children}
            </ClientContainer>
        </div>
    </>
}