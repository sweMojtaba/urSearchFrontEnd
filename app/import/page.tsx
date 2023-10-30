"use client"

import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../context";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import ResumeInput from "./resume";
import WebsiteImport from "./website";
import Link from "next/link";
import "./styles.scss"


function Import() {
    const {user, setUser} = useContext(UserContext);

    const redirectWhenNotLoggedIn = useRedirectWithUserState(
        user.state,
        userState => userState === 0,
        RedirectNotes.LOGGED_OUT,
        "/login"
    );
    
    const [title, setTitle] = useState(() => {
        if (user.state === 1) {
            return "Upload your resume";
        } else if (user.state === 2) {
            return "Import your website";
        } else {
            redirectWhenNotLoggedIn();
        }
    });

    return <div style={{display: "flex", width: "100%"}}>
        <Container className="sparse-content">
            <div>
                <h1>{title}</h1>
                <p className="subheading">And we&rsquo;ll complete your profile :)</p>
            </div>
            {
                user.state === 1 ? <ResumeInput /> : <WebsiteImport />
            }
            <div className="dividing-line" />
            <p className="paragraph">
                Or <Link href="/under-construction">Skip</Link> for now.
            </p>

        </Container>
        <div className="verticalPhrase">
            <div className="vertLine"></div>
            <span>Build your profile: </span>
        </div>
    </div>
}

export default Import;