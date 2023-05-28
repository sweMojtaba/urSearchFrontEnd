import React from "react";
import { Button, Container } from "react-bootstrap";

function Auth(props) {
    return <Container className="sparse-content">
        <h1>{props.name}</h1>
        <Button>individual</Button>
        <Button>lab</Button>
    </Container>
}

export default Auth;