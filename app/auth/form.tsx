"use client"

import { Button, Container, Form } from "react-bootstrap";
import { FaUserAlt, FaKey, FaUserCheck } from "react-icons/fa";

import { RoleType, getOtherRole } from "@/app/context";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AuthType } from "./authUtils";
import { useMemo } from "react";

const functionalityToStates: { [key in AuthType]: {
    title: string,
    text1: string
} } = {
    [AuthType.LOGIN]: {
        title: "Log In",
        text1: "Log in as"
    },
    [AuthType.SIGNUP]: {
        title: "Sign Up",
        text1: "Sign up as"
    }
}

export default function AuthForm({ handleLogin, functionality }: {
    handleLogin: (event: React.FormEvent<HTMLFormElement>) => void,
    functionality: AuthType
}
): JSX.Element {

    const params = useSearchParams();
    const roleParam = params.get("role");
    const role: RoleType | null = useMemo(() => {
        if (roleParam === null) {
            return null;
        } else {
            return roleParam as RoleType;
        }
    }, [roleParam])
    const { title, text1 } = functionalityToStates[functionality];

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
                <Form.Label className="label-inline">{text1}</Form.Label>
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
        </Form>
        <div className="dividing-line" />
        <p className="paragraph">
            Doesn't have an account? <Link href={`/auth/signup?role=${role}`}>Sign up</Link>.
        </p>
    </Container>
}