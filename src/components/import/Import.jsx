import React, { useContext, useEffect, useState } from "react";
import UserContext from "../structural/UserContext";
import useRedirectWithUserState from "../common/useRedirectWithUserState";
import { Container } from "react-bootstrap";
import ResumeInput from "./ResumeInput";
import { Link } from "react-router-dom";

import WebsiteImport from "./WebsiteImport";
import ErrorComponent from "../miscellaneous/Error";

function Import() {
    const [user, setUser] = useContext(UserContext);
    const [title, setTitle] = useState("");
    const redirectWithUserState = useRedirectWithUserState(
        user.state,
        userState => userState === 0,
        "Looks like you haven't logged in yet",
        "/auth/login"
    );

    useEffect(() => {
        redirectWithUserState();
    }, [redirectWithUserState])

    useEffect(() => {
        if (user.state === 1) {
            setTitle("Upload your resume...")
        } else if (user.state === 2) {
            setTitle("Input your website url...")
        }
    }, [user.state])

    return <Container className="sparse-content">
        <div>
            <h1>{title}</h1>
            <p className="subheading">And we'll complete your profile :)</p>
        </div>
        {
            (() => {
                switch (user.state) {
                    case 1:
                        return <ResumeInput />
                    case 2:
                        return <WebsiteImport />
                    case 0:
                        return <></>
                    default:
                        return <ErrorComponent />
                }
            })()
        }
        <div className="dividing-line" />
        <p className="paragraph">
            Or <Link to="/under-construction">Skip</Link> for now.
        </p>

    </Container>
}

export default Import;