"use client"

import { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState";
import { RoleType, UserContext } from "../context";
import { AuthType } from "./authUtils";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

function GoToNext(router: AppRouterInstance, functionality: AuthType, role: RoleType) {
    router.push(`/auth/${functionality}?role=${role}`);
}

function Auth({ functionality }: { functionality: AuthType }) {
    const [title, setTitle] = useState("");
    const { user, setUser } = useContext(UserContext);
    const router = useRouter();

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
        <Button onClick={() => GoToNext(router, functionality, RoleType.APPLICANT)}>
            Applicant
        </Button>
        <Button onClick={() => GoToNext(router, functionality, RoleType.LAB)}>
            lab
        </Button>
    </Container>
}

export default Auth;