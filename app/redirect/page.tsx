"use client"; // Indicating that this component uses client-side features

import { RedirectNoteToParam, RedirectNotes } from "@/utils/useRedirectWithUserState"; // Importing utilities for handling redirect notes
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import { useRouter, useSearchParams } from "next/navigation"; // Importing hooks from Next.js for routing and query parameters
import { useEffect, useState } from "react"; // Importing React hooks
import { Container, Spinner } from "react-bootstrap"; // Importing Bootstrap components

function Redirect() {
    const router = useRouter(); // Hook to access Next.js router for programmatic navigation
    const params = useSearchParams(); // Hook to access search parameters from the URL
    const [note, setNote] = useState<string | null>(() => {
        // Initialize state for the redirect note
        const noteParam = params.get("note"); // Get 'note' parameter from the URL
        if (noteParam === null) {
            // Default note if parameter is not provided
            return RedirectNoteToParam[RedirectNotes.NOT_AUTHORIZED].message;
        }
        // Map the note parameter to the appropriate message
        for (const [key, value] of Object.entries(RedirectNoteToParam)) {
            if (value.param === noteParam) {
                return RedirectNoteToParam[parseInt(key) as keyof typeof RedirectNoteToParam].message;
            }
        }
        return null; // Return null if no matching note is found
    });

    const [target, setTarget] = useState<string>(() => {
        // Initialize state for the target URL
        const targetParam = params.get("target"); // Get 'target' parameter from the URL
        if (targetParam === null) {
            // Default target if parameter is not provided
            return "/";
        }
        return targetParam; // Use the provided target URL
    });

    useEffect(() => {
        // Effect to redirect after a delay
        setTimeout(() => {
            router.push(target); // Navigate to the target URL after 3 seconds
        }, 3000);
    }, [router, target]); // Dependencies: rerun effect if 'router' or 'target' changes

    return (
        <Container className="sparse-content"> {/* Container with custom class for styling */}
            <h3 className="slogan"> {/* Heading displaying the redirect note */}
                {note}
            </h3>
            <div className="line"> {/* Container for spinner and message */}
                <Spinner animation="border" variant="light" className="me-2" /> {/* Loading spinner */}
                <p className="slogan">Redirecting you to <Link href={target}>{target}</Link></p> {/* Message with link to target URL */}
            </div>
        </Container>
    );
}

export default Redirect;
