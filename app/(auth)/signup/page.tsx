"use client" // must specify this to use client-side fetch (handleSubmit not used as a server action)
import { RoleType } from "@/app/context-utils";
import { UserContext } from "@/app/context";
import { AuthType, extractForm } from "../authUtils";
import AuthForm from "../form";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import "../auth.scss"

async function fakeSignup(username: string, password: string, role: RoleType) {
    console.log("Faking signup by sending request to badger chat...")
    const res = await fetch("https://www.cs571.org/s23/hw6/api/register", {
        method: "POST",
        credentials: "include",
        headers: {
            "X-CS571-ID": "bid_30e5ed25e99b26f8f91c",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    return res;
}


export default function Signup() {
    const router = useRouter();
    const {user, setUser} = useContext(UserContext);

    function handleSignup(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const {
            username,
            password,
            role,
            termsCheck
        } = extractForm(event);

        if (username === "" || password === "") {
            alert("You must provide both a username and password!");
        } else {
            // To-do: change fakeSignup to realSignup
            if (username === "" || password === "") {
                alert("You must provide both a username and password!");
            } else if (termsCheck === false) {
                alert("You must accept terms and conditions.")
            } else {
                // To-do: change fakeSignup to realSignup
                fakeSignup(username, password, role).then((res) => {
                    if (res.status === 409) {
                        alert("That username has already been taken!");
                    } else if (res.status === 200) {
                        alert("Signup successful!");
                        setUser({
                            name: username,
                            state: role === RoleType.APPLICANT ? 1 : 2
                        })
                        router.push('import')
                    }
                    return res.json();
                }).then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                })
            }
        }
    }
    return <div style={{display: "flex", width: "100%"}}> 
        <AuthForm handleSubmit={handleSignup} functionality={AuthType.SIGNUP} />
        <div className="verticalPhrase">
            <div className="vertLine"></div>
            <span>Let's shake the world!</span>
        </div>
    </div>
}