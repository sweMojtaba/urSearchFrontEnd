import React, { useContext, useState } from "react";
import RoleWrapper from "./RoleWrapper";
import UserContext from "../../structural/UserContext";
import { useNavigate } from "react-router-dom";
import RoleContext from "./RoleContext";
import fakeLogin from "./fakeLogin";
import { Button, Container, Form } from "react-bootstrap";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [userState, setUserState] = useContext(UserContext);
    const [role, setRole] = useContext(RoleContext);

    const navigate = useNavigate();

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
                if (res.status === 404) {
                    alert("Incorrect username!");
                } else if (res.status === 401) {
                    alert("Incorrect password!");
                } else if (res.status === 200) {
                    if (role === "individual") {
                        setUserState(1);
                    } else if (role === "lab") {
                        setUserState(2);
                    }
                    alert("Successfully logged in!");
                    navigate("/"); // To-do
                }
                return res.json();
            }).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    // To-do: styling
    return <RoleWrapper>
        <Container className="sparse-content">
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    </RoleWrapper>
}

export default Login;