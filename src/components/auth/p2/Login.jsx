import React, { useContext, useState } from "react";
import UserContext from "../../structural/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import fakeLogin from "./fakeLogin";
import { Button, Container, Form } from "react-bootstrap";
import { FaUserAlt, FaKey } from "react-icons/fa";
import SSOButton from "./SSOButton";

import "./styles.scss";
import getOtherRole from "./getOtherRole";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const params = useParams(); // {role: xxx}
    const [role, setRole] = useState(params.role);

    const [userState, setUserState] = useContext(UserContext);

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