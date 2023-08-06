import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import Link from "next/link";

import { ClientContainer, ClientNav, ClientNavLink } from "@/client-wrappers/bootstrap";

function Header() {
    return <HeaderCommon interfaceRoot="/lab-profile">
        <ClientNav id="entries">
            <ClientNavLink as={Link} href="/lab-profile">Your Profile</ClientNavLink>
            <ClientNavLink as={Link} href="/opportunities-posted">Opportunities Posted</ClientNavLink>
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