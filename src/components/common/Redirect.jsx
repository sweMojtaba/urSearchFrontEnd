import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Redirect() {
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state ?? {};
    const note = state.note ?? "Something went wrong..."
    const target = state.target ?? "/"

    useEffect(() => {
        setTimeout(() => {
            navigate(target)
        }, 3000)
    }, [])

    return <Container className="sparse-content">
        <h3 className="slogan">
            {note}
        </h3>
        <div className="line">
            <Spinner animation="border" variant="light" className="me-2" />
            <p className="slogan">Redirecting you to <Link to={target}>{target}</Link></p>
        </div>
    </Container>
}

export default Redirect;