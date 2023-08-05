"use client"

import { UserState } from "@/app/context-utils";
import { useContext, useEffect } from "react";
import useRedirectWithUserState, { RedirectNotes } from "./useRedirectWithUserState";
import { UserContext } from "@/app/context";

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

export function withApplicantExclusion(Component: React.ComponentType<any>): React.ComponentType<any> {
    return function WrappedComponent() {
        useUserExclusiveComponent(UserState.APPLICANT);
        return <Component />
    }
}

export function withLabExclusion(Component: React.ComponentType<any>): React.ComponentType<any> {
    return function WrappedComponent() {
        useUserExclusiveComponent(UserState.LAB);
        return <Component />
    }
}