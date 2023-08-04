"use client"

import { Button, Container, Form } from "react-bootstrap";
import { FaUserAlt, FaKey } from "react-icons/fa";

import { RoleType, getOtherRole } from "@/app/context";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginForm( { handleLogin }: {handleLogin: (event: React.FormEvent<HTMLFormElement>) => void } ): JSX.Element {

    const params = useSearchParams();
    const role: RoleType = params.get("role") as RoleType;

    return <Container className="sparse-content">
        <h1>Log In</h1>
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3 line">
                <FaUserAlt className="icon-inline" />
                <Form.Control type="text" placeholder="Email" id="username" name="username" required />
            </Form.Group>
            <Form.Group className="mb-5 line" controlId="formBasicPassword">
                <FaKey className="icon-inline" />
                <Form.Control type="password" placeholder="Password" id="password" name="password" required />
            </Form.Group>
            <div className="line">
                <Button variant="primary" className="btn-inline-2" type="submit">
                    Submit
                </Button>
                <Button variant="primary" className="btn-inline-2" disabled>
                    SSO via Your Institution
                </Button>
            </div>
            <p className="note">You are loging in as {role}. <Link href={`/auth/signup?role=${getOtherRole(role)}`}>Log in as {getOtherRole(role)} instead.</Link></p>
        </Form>
        <div className="dividing-line" />
        <p className="paragraph">
            Doesn't have an account? <Link href={`/auth/signup?role=${role}`}>Sign up</Link>.
        </p>
    </Container>
}