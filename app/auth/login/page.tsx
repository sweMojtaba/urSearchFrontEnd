"use client"

import Auth from "../authTemplate";
import { AuthType } from "../authUtils";
import { useSearchParams } from "next/navigation";
import AuthForm from "../form";
import handleLogin from "./loginFunction";

export default function Login() {
    const params = useSearchParams();
    const roleParam = params.get("role");
    if (roleParam === null) {
        return <Auth functionality={AuthType.LOGIN} />
    } else {
        return <AuthForm handleLogin={handleLogin} functionality={AuthType.LOGIN} />
    }
}