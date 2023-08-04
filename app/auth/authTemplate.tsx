"use client"
import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import { UserContext } from "../context";
import Link from "next/link";
import { AuthType } from "./authUtils";

function Auth({ functionality }: { functionality: AuthType }) {
    const [title, setTitle] = useState("");
    const { user, setUser } = useContext(UserContext);

    const redirectWhenLoggedIn = useRedirectWithUserState(
        user.state,
        userState => userState !== 0,
        RedirectNotes.LOGGED_IN,
        "/under-construction" // To-do
    )

    useEffect(() => {
        setTimeout(redirectWhenLoggedIn, 1000);
    }, [user.state])

    useEffect(() => {
        if (functionality === AuthType.SIGNUP) {
            setTitle("Sign Up")
        } else if (functionality === AuthType.LOGIN) {
            setTitle("Log In")
        }
    }, [functionality])

    return <Container className="sparse-content">
        <h1>{title}</h1>
        <Button>
            <Link href={`/auth/${functionality}?role=individual`} className="button-link">individual</Link>
        </Button>
        <Button>
            <Link href={`/auth/${functionality}?role=lab`} className="button-link">lab</Link>
        </Button>
    </Container>
}

export default Auth;