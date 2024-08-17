// Importing necessary components and modules for the header and layout
import { HeaderAuth, HeaderCommon } from "@/components/header/headers"; 
// Importing custom header components, HeaderAuth and HeaderCommon, from a specific directory
import Link from "next/link"; 
// Importing the Link component from Next.js for client-side navigation
import { AiOutlineSearch } from "react-icons/ai"; 
// Importing the search icon from the react-icons library

import "./profile.scss"; 
// Importing the SCSS stylesheet for styling the profile components
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap"; 
// Importing Bootstrap components (Container, Nav, NavLink) from a custom wrapper

// Function component that defines the header of the application
function Header() {
    return (
        <HeaderCommon interfaceRoot="/applications">
            {/* Using the HeaderCommon component to render a common header layout with an interface root */}
            <Nav id="entries">
                {/* Navigation bar for the header */}
                <NavLink as={Link} href="/applicant-profile">Your Profile</NavLink> 
                {/* Link to the applicant's profile page, styled as a Bootstrap NavLink */}
                <NavLink as={Link} href="/applications-sent">Applications</NavLink> 
                {/* Link to the page displaying sent applications */}
                <NavLink as={Link} href="/search-for-jobs">
                    {/* Link to the job search page */}
                    <span>Jobs</span>
                    {/* Text label for the job search link */}
                    <AiOutlineSearch /> 
                    {/* Search icon displayed next to the "Jobs" text */}
                </NavLink>
            </Nav>
            <HeaderAuth /> 
            {/* Rendering the HeaderAuth component, which likely handles user authentication UI */}
        </HeaderCommon>
    );
}

// Function component that defines the overall layout of the page
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header /> 
            {/* Rendering the Header component at the top of the page */}
            <div className="main">
                {/* Main content area styled with the "main" class */}
                <Container>
                    {children}
                    {/* Rendering the child components passed to the Layout, wrapped inside a Bootstrap Container */}
                </Container>
            </div>
        </>
    );
}
