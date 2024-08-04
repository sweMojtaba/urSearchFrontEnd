// Importing the HeaderAuth and HeaderCommon components from the specified path
import { HeaderAuth, HeaderCommon } from "@/components/header/headers";

// Importing the Link component from the Next.js library for client-side navigation
import Link from "next/link";

// Importing the AiOutlineSearch icon from the react-icons library
import { AiOutlineSearch } from "react-icons/ai";

// Importing the profile.scss stylesheet for styling this component
import "./profile.scss";

// Importing Container, Nav, and NavLink components from a custom bootstrap wrapper
import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";

// Define the Header function component
function Header() {
    // Return the HeaderCommon component with a specific interfaceRoot
    return (
        <HeaderCommon interfaceRoot="/applicant-profile">
            {/* Navigation bar within the HeaderCommon component */}
            <Nav id="entries">
                {/* Navigation link to the applicant profile home page */}
                <NavLink as={Link} href="/applicant-profile">Home</NavLink>
                {/* Navigation link to the applications sent page */}
                <NavLink as={Link} href="/applications-sent">Applications</NavLink>
                {/* Navigation link to the search for jobs page with an icon */}
                <NavLink as={Link} href="/search-for-jobs">
                    <span>Jobs</span>
                    <AiOutlineSearch />
                </NavLink>
            </Nav>
            {/* Render the HeaderAuth component */}
            <HeaderAuth />
        </HeaderCommon>
    );
}

// Define the Layout function component, which takes children as a prop
export default function Layout({ children }: { children: React.ReactNode }) {
    // Return the layout structure with Header and children components
    return (
        <>
            {/* Render the Header component */}
            <Header />
            {/* Main content area */}
            <div className="main">
                {/* Container with fluid class for full-width layout, wrapping the children elements */}
                <Container fluid className="fit">
                    {children}
                </Container>
            </div>
        </>
    );
}
