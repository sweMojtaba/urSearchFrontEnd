// Imports components and modules required for the layout and header.
import { HeaderAuth, HeaderCommon } from "@/components/header/headers"; // Components for header authentication and common layout.
import Link from "next/link"; // Link component from Next.js for navigation.
import { AiOutlineSearch } from "react-icons/ai"; // Search icon from react-icons.

import "./proposal-idea.scss"; // Importing SCSS styles specific to this component.
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap"; // Bootstrap components for layout and navigation.

function Header() {
    return (
        <HeaderCommon interfaceRoot="/applicant-profile"> {/* Common header layout with a root link */}
            <Nav id="entries"> {/* Navigation bar with ID "entries" */}
                <NavLink as={Link} href="/applicant-profile"> {/* Link to the applicant profile */}
                    Your Profile
                </NavLink>
                <NavLink as={Link} href="/applications-sent"> {/* Link to applications sent page */}
                    Applications
                </NavLink>
                <NavLink as={Link} href="/search-for-jobs"> {/* Link to job search page with an icon */}
                    <span>Jobs</span>
                    <AiOutlineSearch /> {/* Search icon */}
                </NavLink>
            </Nav>
            <HeaderAuth /> {/* Authentication component for header */}
        </HeaderCommon>
    );
}

// Main layout component that wraps around the page content.
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header /> {/* Render the header component */}
            <div className="main-lab"> {/* Container for main content */}
                <Container fluid className="fit"> {/* Fluid container with class "fit" */}
                    {children} {/* Render children components passed to Layout */}
                </Container>
            </div>
        </>
    );
}
