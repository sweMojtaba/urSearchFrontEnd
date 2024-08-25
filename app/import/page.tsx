// "use client" directive to enable client-side rendering in Next.js
"use client";

// Importing necessary hooks, components, and utilities from React, Next.js, and other libraries
import React, { useContext, useEffect, useState } from "react"; // React hooks for managing state and context
import { Container } from "react-bootstrap"; // Container component from React Bootstrap for layout structure
import { UserContext } from "../context"; // Importing UserContext to access user-related information
import useRedirectWithUserState, { RedirectNotes } from "@/utils/useRedirectWithUserState"; // Custom hook for handling redirection based on user state
import ResumeInput from "./resume"; // Component for uploading a resume
import WebsiteImport from "./website"; // Component for importing a website
import Link from "next/link"; // Next.js Link component for client-side navigation
import "./styles.scss"; // Importing custom styles for the component

// Main functional component for the Import page
function Import() {
    // Destructuring user state and setter from UserContext
    const { user, setUser } = useContext(UserContext);

    // Custom hook to redirect users who are not logged in
    const redirectWhenNotLoggedIn = useRedirectWithUserState(
        user.state, // Current state of the user (e.g., logged in, logged out)
        (userState) => userState === 0, // Condition to check if the user is logged out
        RedirectNotes.LOGGED_OUT, // Message or note associated with the redirection
        "/login" // Redirect to the login page if the condition is met
    );

    // State to dynamically set the title based on the user's state
    const [title, setTitle] = useState(() => {
        if (user.state === 1) {
            return "Upload your resume"; // Title for users with state 1 (e.g., new users)
        } else if (user.state === 2) {
            return "Import your website"; // Title for users with state 2 (e.g., returning users)
        } else {
            return ""; // Default to an empty string if the user's state is neither 1 nor 2
        }
    });

    // useEffect hook to check the user's state and redirect if necessary
    useEffect(() => {
        if (user.state === 0) {
            redirectWhenNotLoggedIn(); // Redirects if the user is not logged in (state 0)
        }
    }, [user.state, redirectWhenNotLoggedIn]); // Dependency array ensures this effect runs when `user.state` or `redirectWhenNotLoggedIn` changes

    // The return statement defines the component's UI
    return (
        <div style={{ display: "flex", width: "100%" }}>
            <Container className="sparse-content">
                <div>
                    <h1>{title}</h1> {/* Dynamic title based on the user's state */}
                    <p className="subheading">And we&rsquo;ll complete your profile :)</p> {/* Subheading text */}
                </div>
                {/* Conditional rendering of either the ResumeInput or WebsiteImport component based on user state */}
                {user.state === 1 ? <ResumeInput /> : <WebsiteImport />}
                <div className="dividing-line" /> {/* A dividing line between content sections */}
                <p className="paragraph">
                    Or <Link href="/under-construction">Skip</Link> for now. {/* Option to skip the current step */}
                </p>
            </Container>
            <div className="verticalPhrase">
                <div className="vertLine"></div> {/* Vertical line next to the "Build your profile" phrase */}
                <span>Build your profile: </span> {/* Phrase encouraging the user to complete their profile */}
            </div>
        </div>
    );
}

// Exporting the component as the default export
export default Import;
