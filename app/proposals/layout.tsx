import { HeaderAuth, HeaderCommon } from "@/components/header/headers"; // Importing custom header components
import Link from "next/link"; // Importing Link component from Next.js for navigation

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap"; // Importing Bootstrap components wrapped for client use

function Header() {
    return (
        <HeaderCommon interfaceRoot="/lab-profile"> {/* Common header component with root interface */}
            <Nav id="entries"> {/* Navigation bar */}
                <NavLink as={Link} href="/lab-profile"> {/* Link to the lab profile page */}
                    Your Profile
                </NavLink>
                <NavLink as={Link} href="/opportunities"> {/* Link to the opportunities page */}
                    Opportunities Posted
                </NavLink>
            </Nav>
            <HeaderAuth /> {/* Authentication-related header component (e.g., login/logout) */}
        </HeaderCommon>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header /> {/* Render the Header component */}
            <div className="main-lab"> {/* Wrapper div with a custom class for styling */}
                <Container fluid className="fit"> {/* Fluid container to adjust based on the viewport */}
                    {children} {/* Render child components passed to Layout */}
                </Container>
            </div>
        </>
    );
}
