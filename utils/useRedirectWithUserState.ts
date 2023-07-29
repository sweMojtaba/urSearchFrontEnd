'use client'
import { UserState } from "@/app/context";
import { useRouter } from "next/router";

export default function useRedirectWithUserState(
    userState: UserState,
    ifRedirect: (userState: UserState) => boolean,
    note: string,
    target: string
): () => void {
    const router = useRouter();
    const redirectWithUserState = () => {
        if (ifRedirect(userState)) {
            console.log(`Redirecting, ${note}, ${target}`);
            router.push({
                pathname: "/redirect",
                query: {
                    note: note,
                    target: target
                }
            })
        } else {
            console.log("Chose not to redirect");
        }
    }
    return redirectWithUserState;
}