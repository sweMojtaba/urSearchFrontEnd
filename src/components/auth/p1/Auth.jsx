import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Auth(props) {
    const [title, setTitle] = useState("");
    useEffect(() => {
        if (props.name === "signup") {
            setTitle("Sign Up")
        } else if (props.name === "login") {
            setTitle("Log In")
        }
    }, [props.name])
    return <Container className="sparse-content">
        <h1>{title}</h1>
        <Button as={Link} to={`/auth/${props.name}/individual`}>individual</Button>
        <Button as={Link} to={`/auth/${props.name}/lab`}>lab</Button>
    </Container>
}

export default Auth;