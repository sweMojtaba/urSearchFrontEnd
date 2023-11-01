"use client";

import { PropsWithChildren } from "react";

import { Container } from "@/client-wrappers/bootstrap";
import { useContext } from "react";
import { UserContext } from "@/app/context";

export default function Layout({ children }: PropsWithChildren<{}>) {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <div className={user.state === 2 ? "main-lab" : "main"}>
                <Container fluid className="fit">
                    {children}
                </Container>
            </div>
        </>
    );
}
