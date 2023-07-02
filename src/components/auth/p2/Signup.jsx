import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../structural/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import fakeSignup from "./fakeSignup";
import { Button, Container, Form } from "react-bootstrap";
import { FaUserAlt, FaKey } from "react-icons/fa";
import SSOButton from "./SSOButton";

import getOtherRole from "./getOtherRole";
import useRedirectWithUserState from "../../common/hooks/useRedirectWithUserState";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [termsCheck, setTermsCheck] = useState(false);
    const [user, setUser] = useContext(UserContext);

    const params = useParams(); // {role: xxx}
    const [role, setRole] = useState(params.role);

    const navigate = useNavigate();

    const redirectWithUserState = useRedirectWithUserState(
        user.state,
        userState => userState !== 0,
        "You are already logged in",
        "/under-construction" // To-do
    )

    useEffect(() => {
        setTimeout(redirectWithUserState, 1000);
    }, [user.state])

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleTermsCheckChange = (event) => {
        setTermsCheck(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === "" || password === "") {
            alert("You must provide both a username and password!");
        } else if (termsCheck === false) {
            alert("You must accept terms and conditions.")
        } else {
            // To-do: change fakeSignup to realSignup
            fakeSignup(username, password, role).then((res) => {
                if (res.status === 409) {
                    alert("That username has already been taken!");
                } else if (res.status === 200) {
                    alert("Successfully registered!");
                    if (role === "individual") {
                        setUser({
                            state: 1,
                            name: username
                        });
                    } else if (role === "lab") {
                        setUser({
                            state: 1,
                            name: username
                        });
                    }
                    navigate("/import"); // To-do
                }
                return res.json();
            }).then((data) => {
                console.log(data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const handleSSO = () => { };

    // To-do: styling
    return <Container className="sparse-content">
        <h1>Sign Up</h1>
        <Form>
            <Form.Group className="mb-3 line">
                <FaUserAlt className="icon-inline" />
                <Form.Control type="text" placeholder="Email" value={username} onChange={handleUsernameChange} />
            </Form.Group>
            <Form.Group className="mb-5 line" controlId="formBasicPassword">
                <FaKey className="icon-inline" />
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check.Input type="checkbox" className="paragraph" value={termsCheck} onChange={handleTermsCheckChange}/>
                <Form.Check.Label>I have read and accepted the <Link to="/under-construction">terms and services</Link></Form.Check.Label>.
            </Form.Group>
            <div className="line">
                <Button variant="primary" className="btn-inline-2" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
                <SSOButton />
            </div>
            <p className="note">You are signing up as {role}. <Link to={`/auth/signup/${getOtherRole(role)}`}>Sign up as {getOtherRole(role)} instead.</Link></p>
        </Form>
        <div className="dividing-line" />
        <p className="paragraph">
            Already have an account? <Link to={`/auth/login/${role}`}>Log in</Link>.
        </p>
    </Container>
}

export default Signup;