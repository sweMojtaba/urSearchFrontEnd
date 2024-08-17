import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
// Importing `HeaderAuth` and `HeaderCommon` components from the specified path.
// These components are likely used to build the header of the application, including authentication features and common header layout.

import Link from "next/link";
// Importing the `Link` component from `next/link`, which is used for client-side navigation between pages in Next.js applications.

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";
// Importing `Container`, `Nav`, and `NavLink` components from the specified path, which might be custom or wrapped Bootstrap components for layout and navigation.

function Header() {
    // Functional component to render the header of the application.
    return (
        <HeaderCommon interfaceRoot="/lab-profile">
            {/* `HeaderCommon` component provides a common header layout and functionality.
                The `interfaceRoot` prop specifies the root path for the interface, which in this case is `/lab-profile`. */}
            <Nav id="entries">
                {/* `Nav` component is used to create a navigation section within the header. */}
                <NavLink as={Link} href="/lab-profile">
                    {/* `NavLink` component provides a link styled as a navigation item.
                        The `as` prop specifies that it should be rendered as a `Link` component from `next/link`. */}
                    Your Profile
                </NavLink>
                <NavLink as={Link} href="/opportunities">
                    {/* Another `NavLink` component for navigation to the opportunities page */}
                    Opportunities Posted
                </NavLink>
            </Nav>
            <HeaderAuth />
            {/* `HeaderAuth` component likely provides authentication-related features such as sign-in/sign-out or user profile management. */}
        </HeaderCommon>
    );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    // Default export of the `Layout` component which includes the `Header` and a container for the main content.
    return (
        <>
            <Header />
            {/* Render the `Header` component at the top of the layout */}
            <div className="main">
                {/* Container for the main content of the page */}
                <Container fluid className="fit">
                    {/* `Container` component is used to manage layout and responsive design. `fluid` makes it full-width, and `fit` may apply specific styles.
                        The `children` prop will be rendered within this container. */}
                    {children}
                    {/* Render the children elements passed to the `Layout` component */}
                </Container>
            </div>
        </>
    );
}
