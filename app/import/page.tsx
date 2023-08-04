"use client"

import React, { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext, UserState } from "../context";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import { RedirectType } from "next/dist/client/components/redirect";


function Import() {
    const {user, setUser} = useContext(UserContext);
    const [title, setTitle] = useState("");
    const redirectWithUserState = useRedirectWithUserState(
        user.state,
        userState => userState === 0,
        RedirectNotes.LOGGED_OUT,
        "/login"
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