"use client"

import { AuthType } from "../authUtils";
import AuthForm from "../form";
import handleLogin from "./loginFunction";

export default function Login() {
    return <AuthForm handleLogin={handleLogin} functionality={AuthType.LOGIN} />
}