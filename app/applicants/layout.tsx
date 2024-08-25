import { HeaderAuth, HeaderCommon } from "@/components/header/headers"; // Importing HeaderAuth and HeaderCommon components from the headers module
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap"; // Importing Container, Nav, and NavLink components wrapped with custom Bootstrap styling

// Function component to render the header section of the layout
function Header() {
    return (
        <HeaderCommon interfaceRoot="/lab-profile">
            {/* Navigation menu inside the header */}
            <Nav id="entries">
                {/* Link to the user's profile */}
                <NavLink as={Link} href="/lab-profile">
                    Your Profile
                </NavLink>
                {/* Link to the opportunities posted page */}
                <NavLink as={Link} href="/opportunities">
                    Opportunities Posted
                </NavLink>
            </Nav>
            {/* HeaderAuth component likely handles authentication-related UI elements */}
            <HeaderAuth />
        </HeaderCommon>
    );
}

// Function component to render the layout structure including header and main content area
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Render the Header component */}
            <Header />
            <div className="main">
                {/* Container component to hold the main content of the page */}
                <Container fluid className="fit">
                    {/* Render children components passed into the Layout component */}
                    {children}
                </Container>
            </div>
        </>
    );
}
