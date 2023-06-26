import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function Layout() {
    return <>
        <Header/>
        <div className="main">
            <Container fluid className="fit">
                <Outlet/>
            </Container>
        </div>
    </>
}

export default Layout;