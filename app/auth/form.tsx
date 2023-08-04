"use client"

import { Button, Container, Form } from "react-bootstrap";
import { FaUserAlt, FaKey, FaUserCheck } from "react-icons/fa";

import { RoleType, getOtherRole } from "@/app/context";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AuthType } from "./authUtils";

const functionalityToStates: { [key in AuthType]: {
    title: string,
    text1: string,
    text2: string,
} } = {
    [AuthType.LOGIN]: {
        title: "Log In",
        text1: "You are logging in as",
        text2: "Log in as"
    },
    [AuthType.SIGNUP]: {
        title: "Sign Up",
        text1: "You are signing up as",
        text2: "Sign up as"
    }
}

export default function AuthForm({ handleLogin, functionality }: {
    handleLogin: (event: React.FormEvent<HTMLFormElement>) => void,
    functionality: AuthType
}
): JSX.Element {

    const params = useSearchParams();
    const role: RoleType = params.get("role") as RoleType;
    const { title, text1, text2 } = functionalityToStates[functionality];

    return <Container className="sparse-content">
        <h1>{title}</h1>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3 line">
                <FaUserAlt className="icon-inline" />
                <Form.Control type="text" placeholder="Email" id="username" name="username" required />
            </Form.Group>
            <Form.Group className="mb-5 line" controlId="formBasicPassword">
                <FaKey className="icon-inline" />
                <Form.Control type="password" placeholder="Password" id="password" name="password" required />
            </Form.Group>
            <Form.Group className="mb-3 line">
                <FaUserCheck className="icon-inline" />
                <Form.Select aria-label="select role" id="role" name="role" required>
                    <option value="applicant" defaultChecked={role === RoleType.APPLICANT}>Applicant</option>
                    <option value="lab" defaultChecked={role === RoleType.LAB}>Lab</option>
                </Form.Select>
            </Form.Group>
            <div className="line">
                <Button variant="primary" className="btn-inline-2" type="submit">
                    Submit
                </Button>
                <Button variant="primary" className="btn-inline-2" disabled>
                    SSO via Your Institution
                </Button>
            </div>
            <p className="note">{text1} {role}. <Link href={`/auth/signup?role=${getOtherRole(role)}`}>{text2} {getOtherRole(role)} instead.</Link></p>
        </Form>
        <div className="dividing-line" />
        <p className="paragraph">
            Doesn't have an account? <Link href={`/auth/signup?role=${role}`}>Sign up</Link>.
        </p>
    </Container>
}