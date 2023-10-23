import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import Link from "next/link";

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";

function Header() {
    return (
        <HeaderCommon interfaceRoot="/lab-profile">
            <Nav id="entries">
                <NavLink as={Link} href="/lab-profile">
                    Your Profile
                </NavLink>
                <NavLink as={Link} href="/opportunities">
                    Opportunities Posted
                </NavLink>
            </Nav>
            <HeaderAuth />
        </HeaderCommon>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="main">
                <Container fluid className="fit">
                    {children}
                </Container>
            </div>
        </>
    );
}
