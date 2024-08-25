import { HeaderAuth, HeaderCommon } from "@/components/header/headers";
// Importing two components, HeaderAuth and HeaderCommon, from the "@/components/header/headers" module. These components are used to build the header of the layout.

import Link from "next/link";
// Importing the Link component from Next.js, which is used for client-side navigation between pages.

import { Container, Nav, NavLink } from "@/client-wrappers/bootstrap";
// Importing Container, Nav, and NavLink components from the "@/client-wrappers/bootstrap" module. These components are used for layout and navigation in the header.

import "./styles.module.scss"
// Importing a stylesheet named styles.module.scss for styling the components in this module.

function Header() { 
    // Declaring a functional component named Header.

    return <HeaderCommon interfaceRoot="/lab-profile">
        {/* Rendering the HeaderCommon component with a prop interfaceRoot set to "/lab-profile". This component likely includes common header elements. */}
        
        <Nav id="entries">
            {/* Rendering the Nav component with an id of "entries". This component likely handles navigation links. */}
            
            <NavLink as={Link} href="/lab-profile">Home</NavLink>
            {/* Rendering a NavLink component with a Link element as its underlying element. The href prop directs to "/lab-profile" and the text "Home" is displayed. */}
            
            <NavLink as={Link} href="/opportunities">Opportunities</NavLink>
            {/* Rendering another NavLink component with a Link element as its underlying element. The href prop directs to "/opportunities" and the text "Opportunities" is displayed. */}
        </Nav>
        
        <HeaderAuth />
        {/* Rendering the HeaderAuth component. This component likely includes authentication-related elements such as login/logout options. */}
    </HeaderCommon>
}

export default function Layout({ children }: { children: React.ReactNode }) { 
    // Exporting a default functional component named Layout. It takes a prop named children of type React.ReactNode, which represents the child elements to be rendered inside the layout.

    return <>
        <Header />
        {/* Rendering the Header component defined above. This adds the header to the layout. */}
        
        <div className="main-lab">
            {/* Wrapping the main content in a div with a className of "main-lab" for styling purposes. */}
            
            <Container fluid className="fit">
                {/* Rendering the Container component with the fluid prop to make it full-width and a className of "fit" for additional styling. */}
                
                {children}
                {/* Rendering the children prop. This allows the Layout component to display whatever child components or elements are passed to it. */}
            </Container>
        </div>
    </>
}
