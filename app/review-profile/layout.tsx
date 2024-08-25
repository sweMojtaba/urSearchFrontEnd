// Import necessary components and icons
import { HeaderAuth, HeaderCommon } from "@/components/header/headers"; // Header components for authentication and common layout
import Link from "next/link"; // Next.js Link component for client-side navigation
import { AiOutlineSearch } from "react-icons/ai"; // React icon for search

import "./public-profile.scss"; // Import custom styles for the public profile page
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap"; // Bootstrap components for layout and navigation

// Function component defining the header layout
function Header() {
    return (
        <HeaderCommon interfaceRoot="/applicant-profile">
            {/* Navigation bar with links */}
            <Nav id="entries">
                <NavLink as={Link} href="/applicant-profile">
                    Your Profile
                </NavLink>
                <NavLink as={Link} href="/applications-sent">
                    Applications
                </NavLink>
                <NavLink as={Link} href="/search-for-jobs">
                    <span>Jobs</span>
                    <AiOutlineSearch /> {/* Search icon */}
                </NavLink>
            </Nav>
            <HeaderAuth /> {/* Authentication component for user login/logout */}
        </HeaderCommon>
    );
}

// Default export function component for the layout
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header /> {/* Render the Header component */}
            <div className="main">
                <Container fluid className="fit">
                    {children} {/* Render child components */}
                </Container>
            </div>
        </>
    );
}
