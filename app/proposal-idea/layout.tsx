import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

import "./proposal-idea.scss";
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";

function Header() {
    return (
        <HeaderCommon interfaceRoot="/applicant-profile">
            <Nav id="entries">
                <NavLink as={Link} href="/applicant-profile">
                    Your Profile
                </NavLink>
                <NavLink as={Link} href="/applications-sent">
                    Applications
                </NavLink>
                <NavLink as={Link} href="/search-for-jobs">
                    <span>Jobs</span>
                    <AiOutlineSearch />
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
            <div className="main-lab">
                <Container fluid className="fit">
                    {children}
                </Container>
            </div>
        </>
    );
}
