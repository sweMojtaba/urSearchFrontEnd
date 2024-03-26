"use client"; // must specify this to use client-side fetch (handleSubmit not used as a server action)

import { RoleType } from "@/app/context-utils";
import { UserContext } from "@/app/context";
import { AuthType, extractForm } from "../authUtils";
import AuthForm from "../form";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import "../auth.scss";

async function login(email: string, password: string, role: RoleType) {
    // TODO Replace this with a public link
    const url = String(process.env.NEXT_PUBLIC_API_URL) + "api/login";
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "email": email,
            "password": password,
        }),
    });
    return res;
}

export default function Login() {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);

    function handleLogin(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { username, password, role } = extractForm(event);

        if (username === "" || password === "") {
            alert("You must provide both an email and password!");
        } else {
            login(username, password, role)
                .then((res) => {
                    if (res.status === 404) {
                        alert("Incorrect username!");
                    } else if (res.status === 401) {
                        alert("Incorrect password!");
                    } else if (res.status === 200) {
                        alert("Login successful!");
                        setUser({
                            name: username,
                            state: role === RoleType.APPLICANT ? 1 : 2,
                        });
                        localStorage.setItem("userName", username);
                        localStorage.setItem("userState", (role === RoleType.APPLICANT ? 1 : 2).toString());
                        router.push("import");
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <AuthForm handleSubmit={handleLogin} functionality={AuthType.LOGIN} />
            <div className="verticalPhrase">
                <div className="vertLine"></div>
                <span>Your time is here!</span>
            </div>
        </div>
    );
}
