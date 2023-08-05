"use client"

import { UserContext, UserState } from "@/app/context";
import { useContext, useEffect } from "react";
import useRedirectWithUserState, { RedirectNotes } from "./useRedirectWithUserState";

export default function useUserExclusiveComponent(desiredUserState: UserState): void {
    const { user, setUser } = useContext(UserContext);
    const redirectIfNotApplicant = useRedirectWithUserState(
        user.state,
        userState => userState !== desiredUserState,
        RedirectNotes.NOT_AUTHORIZED,
        "/welcome"
    )
    useEffect(redirectIfNotApplicant, [user.state, redirectIfNotApplicant]);
}