import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import Link from "next/link";

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";

function Header() {
    return (
        <HeaderCommon interfaceRoot="/reviews">
            <Nav id="entries">
                <NavLink as={Link} href="/welcome">
                    Home
                </NavLink>
                <NavLink as={Link} href="/search-for-jobs">
                    Opportunities
                </NavLink>
            </Nav>
            <HeaderAuth />
        </HeaderCommon>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        <div className="main">
            <Container>
                {children}
            </Container>
        </div>
    </>
}