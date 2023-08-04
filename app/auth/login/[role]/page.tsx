import { RoleType } from "@/app/context";
import { useRouter, useSearchParams } from "next/navigation";
import LoginForm from "./form";


async function fakeLogin(username: string, password: string, role: RoleType) {
    console.log("Faking login by sending request to badger chat...")
    const res = await fetch("https://cs571.org/s23/hw6/api/login", {
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

function handleLogin(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    const params = useSearchParams();
    const role: RoleType = params.get("role") as RoleType;
    const router = useRouter();

    if (username === "" || password === "") {
        alert("You must provide both a username and password!");
    } else {
        // To-do: change fakeSignup to realSignup
        fakeLogin(username, password, role).then((res) => {
            console.log("Log in response code: ", res.status);
            console.log("username: ", username);
            if (res.status === 404) {
                alert("Incorrect username!");
            } else if (res.status === 401) {
                alert("Incorrect password!");
            } else if (res.status === 200) {
                router.push(`/import?role=${role}`)
            }
            return res.json();
        }).then((data) => {
            console.log(data);
        }).catch((error) => {
            console.log(error);
        })
    }
}

export default function useHandleLogin() {
    return <LoginForm handleLogin={handleLogin} />
}