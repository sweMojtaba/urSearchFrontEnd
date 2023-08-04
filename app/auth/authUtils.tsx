import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { RoleType } from "../context";
import { useRouter } from "next/navigation";

export enum AuthType {
    LOGIN = "login",
    SIGNUP = "signup"
}

export function extractForm(event: React.FormEvent<HTMLFormElement>): { 
    username: string,
    password: string,
    role: RoleType,
    router: AppRouterInstance
 } {
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    const roleInput = (event.currentTarget.elements.namedItem('role') as HTMLInputElement).value;
    const role: RoleType = roleInput === "applicant" ? RoleType.APPLICANT : RoleType.LAB;
    const router = useRouter();
    return {
        username,
        password,
        role,
        router
    }
}