import { RoleType } from "../context-utils";

export enum AuthType {
    LOGIN = "login",
    SIGNUP = "signup"
}

export function extractForm(event: React.FormEvent<HTMLFormElement>): { 
    username: string,
    password: string,
    role: RoleType,
    termsCheck?: boolean
 } {
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    const roleInput = (event.currentTarget.elements.namedItem('role') as HTMLInputElement).value;
    const termsCheck = (event.currentTarget.elements.namedItem('termsCheck') as HTMLInputElement)?.checked;
    const role: RoleType = roleInput === "applicant" ? RoleType.APPLICANT : RoleType.LAB;
    return {
        username,
        password,
        role,
        termsCheck
    }
}