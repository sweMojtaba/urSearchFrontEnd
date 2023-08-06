import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return <>
        <Header />
        <div className="main">
            <Container fluid className="fit">
                <Outlet/>
            </Container>
        </div>
    </>
}

export default Layout;