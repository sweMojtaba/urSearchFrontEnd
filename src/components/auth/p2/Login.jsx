import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../structural/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import fakeLogin from "./fakeLogin";
import { Button, Container, Form } from "react-bootstrap";
import { FaUserAlt, FaKey } from "react-icons/fa";
import SSOButton from "./SSOButton";

import getOtherRole from "./getOtherRole";
import useRedirectWithUserState from "../../common/hooks/useRedirectWithUserState";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const params = useParams(); // {role: xxx}
    const [role, setRole] = useState(params.role);

    const {user, setUser} = useContext(UserContext);

    const navigate = useNavigate();

    const redirectWithUserState = useRedirectWithUserState(
        user.state,
        userState => userState !== 0,
        "You are already logged in",
        "/under-construction" // To-do
    )

    useEffect(() => {
        if (loggedIn === false) {
            setTimeout(redirectWithUserState, 1000);
        }
    }, [user])

    useEffect(() => {
        if (loggedIn === true && user.state !== 0) {
            const basePath = user.state === 1 ? "/individual" : "/lab";
            alert("Successfully logged in!");
            navigate(basePath + "/import"); // To-do: already imported
        }
    }, [user, loggedIn])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "" || password === "") {
            alert("You must provide both a username and password!");
        } else {
            // To-do: change fakeSignup to realSignup
            fakeLogin(username, password, role).then((res) => {
                console.log("Log in response code: ", res.status);
                console.log("username: ", username);
                if (res.status === 404) {
                    alert("Incorrect username!");
                } else if (res.status === 401) {
                    alert("Incorrect password!");
                } else if (res.status === 200) {
                    if (role === "individual") {
                        setUser({
                            state: 1,
                            name: username
                        });
                    } else if (role === "lab") {
                        setUser({
                            state: 2,
                            name: username
                        });
                    }
                    setLoggedIn(true);
                }
                return res.json();
            }).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const handleSSO = () => {

    }

    // To-do: styling
    return <Container className="sparse-content">
        <h1>Log In</h1>
        <Form>
            <Form.Group className="mb-3 line">
                <FaUserAlt className="icon-inline" />
                <Form.Control type="text" placeholder="Email" value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group className="mb-5 line" controlId="formBasicPassword">
                <FaKey className="icon-inline" />
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <div className="line">
                <Button variant="primary" className="btn-inline-2" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
                <SSOButton />
            </div>
            <p className="note">You are loging in as {role}. <Link to={`/auth/signup/${getOtherRole(role)}`}>Log in as {getOtherRole(role)} instead.</Link></p>
        </Form>
        <div className="dividing-line" />
        <p className="paragraph">
            Doesn't have an account? <Link to={`/auth/signup/${role}`}>Sign up</Link>.
        </p>
    </Container>
}

export default Login;