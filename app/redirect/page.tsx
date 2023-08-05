"use client"

import { RedirectNoteToParam, RedirectNotes } from "@/utils/useRedirectWithUserState";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

function Redirect() {
    const router = useRouter();
    const params = useSearchParams();
    const [note, setNote] = useState<string | null>(() => {
        const noteParam = params.get("note");
        if (noteParam === null) {
            return RedirectNoteToParam[RedirectNotes.NOT_AUTHORIZED].message;
        } 
        for (const [key, value] of Object.entries(RedirectNoteToParam)) {
            if (value.param === noteParam) {
                return RedirectNoteToParam[parseInt(key) as keyof typeof RedirectNoteToParam].message;
            }
        }
        return null
    });
    const [target, setTarget] = useState<string>(() => {
        const targetParam = params.get("target");
        if (targetParam === null) {
            return "/";
        }
        return targetParam;
    });

    useEffect(() => {
        setTimeout(() => {
            router.push(target); // TO-DO: use redirect from next/navigation
        }, 3000)
    }, [router, target])

    return <Container className="sparse-content">
        <h3 className="slogan">
            {note}
        </h3>
        <div className="line">
            <Spinner animation="border" variant="light" className="me-2" />
            <p className="slogan">Redirecting you to <Link href={target}>{target}</Link></p>
        </div>
    </Container>
}

export default Redirect;