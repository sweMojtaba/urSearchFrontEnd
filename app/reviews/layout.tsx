// Import necessary components and modules
import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
import Link from "next/link";
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";

// Define the Header component
function Header() {
    return (
        // Render the common header with a root path for the interface
        <HeaderCommon interfaceRoot="/reviews">
            <Nav id="entries">
                {/* Navigation link to the home page */}
                <NavLink as={Link} href="/welcome">
                    Home
                </NavLink>
                {/* Navigation link to the opportunities page */}
                <NavLink as={Link} href="/search-for-jobs">
                    Opportunities
                </NavLink>
            </Nav>
            {/* Render the authentication header component */}
            <HeaderAuth />
        </HeaderCommon>
    );
}

// Define the Layout component that wraps the main content
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Render the Header component */}
            <Header />
            <div className="main-lab">
                {/* Container to hold the children components */}
                <Container>
                    {children}
                </Container>
            </div>
        </>
    );
}
