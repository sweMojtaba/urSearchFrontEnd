'use client'
import { UserState } from "@/app/context";
import { useRouter } from "next/navigation";

// Define the Enum
export enum RedirectNotes {
    LOGGED_IN,
    LOGGED_OUT,
    LOGGING_OUT
}

// Define the interface for the RedirectParams
interface RedirectParams {
    message: string;
    param: string;
}

// Define the object map
export const RedirectNoteToParam: { [key in RedirectNotes]: RedirectParams } = {
    [RedirectNotes.LOGGED_IN]: {
        message: "You are already logged in.",
        param: "loggedIn"
    },
    [RedirectNotes.LOGGED_OUT]: {
        message: "You are not logged in.",
        param: "loggedOut"
    },
    [RedirectNotes.LOGGING_OUT]: {
        message: "You have successfully logged out.",
        param: "loggedOut"
    }
}

export default function useRedirectWithUserState(
    userState: UserState,
    ifRedirect: (userState: UserState) => boolean,
    note: RedirectNotes,
    target: string
): () => void {
    const router = useRouter();
    const redirectWithUserState = () => {
        if (ifRedirect(userState)) {
            console.log(`Redirecting, ${note}, ${target}`);
            router.push(`/redirect?note=${RedirectNoteToParam[note].param}&target=${target}`)
            
        } else {
            console.log("Chose not to redirect");
        }
    }
    return redirectWithUserState;
}