import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai"

import "./profile.scss";
import { ClientContainer, ClientNav, ClientNavLink } from "@/client-wrappers/bootstrap";

function Header() {
    return <HeaderCommon interfaceRoot="/individual">
        <ClientNav id="entries">
            <ClientNavLink as={Link} href="/individual/profile">Your Profile</ClientNavLink>
            <ClientNavLink as={Link} href="/individual/applications">Applications</ClientNavLink>
            <ClientNavLink as={Link} href="/individual/search">
                <span>Jobs</span>
                <AiOutlineSearch />
            </ClientNavLink>
        </ClientNav>
        <HeaderAuth />
    </HeaderCommon>
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        <div className="main">
            <ClientContainer fluid className="fit">
                {children}
            </ClientContainer>
        </div>
    </>
}