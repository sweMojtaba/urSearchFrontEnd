"use client"; // must specify this to use client-side fetch (handleSubmit not used as a server action)
import { RoleType } from "@/app/context-utils";
import { UserContext } from "@/app/context";
import { AuthType, extractForm } from "../authUtils";
import AuthForm from "../form";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import "../auth.scss";

async function signupCall(username: string, password: string, role: RoleType) {
    // TODO Replace this with a public link
    //const url = String(process.env.NEXT_PUBLIC_API_URL) + "api/signup"; Changed by MO for beta deploy
    const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
    const url = baseUrl + "api/signup";
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: username,
            password: password,
            userType: role == RoleType.APPLICANT ? "person" : "recruiter",
        }),
    });
    return res;
}

export default function Signup() {
    const router = useRouter();
    const { user, setUser } = useContext(UserContext);

    function handleSignup(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        const { username, password, role, termsCheck } = extractForm(event);

        if (username === "" || password === "") {
            alert("You must provide both a username and password!");
        } else {
            if (username === "" || password === "") {
                alert("You must provide both a username and password!");
            } else if (termsCheck === false) {
                alert("You must accept terms and conditions.");
            } else {
                signupCall(username, password, role)
                    .then((res) => {
                        if (res.status === 409) {
                            alert("That username has already been taken!");
                        } else if (res.status === 200) {
                            alert("Signup successful!");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setUser({
                            name: username,
                            state: role === RoleType.APPLICANT ? 1 : 2,
                        });
                        localStorage.setItem("userName", username);
                        localStorage.setItem("userState", (role === RoleType.APPLICANT ? 1 : 2).toString());
                        localStorage.setItem("userId", data.data.ID);
                        router.push("import");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <AuthForm handleSubmit={handleSignup} functionality={AuthType.SIGNUP} />
            <div className="verticalPhrase">
                <div className="vertLine"></div>
                <span>Lets shake the world!</span>
            </div>
        </div>
    );
}
