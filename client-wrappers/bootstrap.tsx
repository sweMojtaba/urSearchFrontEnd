'use client'

import { PropsWithChildren, ComponentProps } from "react"
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap"

export function withClient<PropsType extends PropsWithChildren>(
    ComponentToBeWrapped: React.ComponentType<PropsType>
): React.FC<PropsType> {
    function WrappedComponent({children, ...otherProps}: PropsType) {
        return <ComponentToBeWrapped {...otherProps as PropsType}>
            {children}
        </ComponentToBeWrapped>
    }
    return WrappedComponent
}

export const ClientContainer = withClient<ComponentProps<typeof Container>>(Container);

export const ClientNav = withClient<ComponentProps<typeof Nav>>(Nav);
export const ClientNavLink = withClient<ComponentProps<typeof Nav.Link>>(Nav.Link);
// The following bootstrap components are only used in client components
// export const ClientNavItem = withClient<ComponentProps<typeof Nav.Item>>(Nav.Item);

// export const ClientDropdown = withClient<ComponentProps<typeof Dropdown>>(Dropdown);
// export const ClientDropdownItem = withClient<ComponentProps<typeof Dropdown.Item>>(Dropdown.Item);
// export const ClientDropdownToggle = withClient<ComponentProps<typeof Dropdown.Toggle>>(Dropdown.Toggle);
// export const ClientDropdownMenu = withClient<ComponentProps<typeof Dropdown.Menu>>(Dropdown.Menu);

// export const ClientNavbar = withClient<ComponentProps<typeof Navbar>>(Navbar);
// export const ClientNavbarBrand = withClient<ComponentProps<typeof Navbar.Brand>>(Navbar.Brand);
// export const ClientNavbarToggle = withClient<ComponentProps<typeof Navbar.Toggle>>(Navbar.Toggle);
// export const ClientNavbarCollapse = withClient<ComponentProps<typeof Navbar.Collapse>>(Navbar.Collapse);
