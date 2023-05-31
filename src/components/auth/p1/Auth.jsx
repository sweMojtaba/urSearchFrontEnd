import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useRedirectWithUserState from "../../common/useRedirectWithUserState";
import UserContext from "../../structural/UserContext";

function Auth(props) {
    const [title, setTitle] = useState("");
    const [userState, setUserState] = useContext(UserContext);

    const redirectWithUserState = useRedirectWithUserState(
        userState,
        userState => userState !== 0,
        "You are already logged in",
        "/under-construction" // To-do
    )

    useEffect(() => {
        setTimeout(redirectWithUserState, 1000);
    }, [userState])

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