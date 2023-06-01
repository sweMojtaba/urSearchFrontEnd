import React, { useContext, useEffect, useState } from "react";
import UserContext from "../structural/UserContext";
import useRedirectWithUserState from "../common/useRedirectWithUserState";
import { Container } from "react-bootstrap";
import ResumeInput from "./ResumeInput";
import { Link } from "react-router-dom";

import "./styles.scss";
import WebsiteImport from "./WebsiteImport";

function Import() {
    const [userState, setUserState] = useContext(UserContext);
    const [title, setTitle] = useState("");
    const redirectWithUserState = useRedirectWithUserState(
        userState,
        userState => userState === 0,
        "Looks like you haven't logged in yet",
        "/auth/login"
    );

    useEffect(() => {
        redirectWithUserState();
    }, [])

    useEffect(() => {
        if (userState === 1) {
            setTitle("Upload your resume...")
        } else if (userState === 2) {
            setTitle("Input your website url...")
        }
    }, [userState])

    return <Container className="sparse-content">
        <div>
            <h1>{title}</h1>
            <p className="subheading">And we'll complete your profile :)</p>
        </div>
        {
            (() => {
                switch (userState) {
                    case 1:
                        return <ResumeInput />
                    case 2:
                        return <WebsiteImport />
                    case 0:
                        return <></>
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