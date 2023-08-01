"use client"
import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import { UserContext } from "../context";
import Link from "next/link";
import { AuthType } from "./authUtils";

function Auth({ role }: { role: AuthType }) {
    const [title, setTitle] = useState("");
    const { user, setUser } = useContext(UserContext);

    const redirectWithUserState = useRedirectWithUserState(
        user.state,
        userState => userState !== 0,
        RedirectNotes.LOGGED_IN,
        "/under-construction" // To-do
    )

    useEffect(() => {
        setTimeout(redirectWithUserState, 1000);
    }, [user.state])

    useEffect(() => {
        if (role === AuthType.SIGNUP) {
            setTitle("Sign Up")
        } else if (role === AuthType.LOGIN) {
            setTitle("Log In")
        }
    }, [role])

    return <Container className="sparse-content">
        <h1>{title}</h1>
        <Button>
            <Link href={`/auth/${role}/individual`} className="button-link">individual</Link>
        </Button>
        <Button>
            <Link href={`/auth/${role}/lab`} className="button-link">lab</Link>
        </Button>
    </Container>
}

export default Auth;