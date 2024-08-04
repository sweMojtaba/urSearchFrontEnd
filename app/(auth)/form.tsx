"use client" 
// Specifies that this code should be executed on the client side, not on the server

import { Button, Container, Form } from "react-bootstrap"; 
// Import Button, Container, and Form components from react-bootstrap for UI elements

import { FaUserAlt, FaKey, FaUserCheck } from "react-icons/fa"; 
// Import icon components from react-icons for displaying user-related icons

import { RoleType } from "@/app/context-utils"; 
// Import RoleType enum from context-utils for handling user roles

import { useSearchParams } from "next/navigation"; 
// Import useSearchParams hook from Next.js to access URL search parameters

import Link from "next/link"; 
// Import Link component from Next.js for client-side navigation

import { AuthType } from "./authUtils"; 
// Import AuthType enum from authUtils to manage authentication types

import { useMemo } from "react"; 
// Import useMemo hook from React to memoize values and optimize performance

import "./auth.scss" 
// Import auth.scss for styling the component

const functionalityToStates: { [key in AuthType]: { 
    title: string, 
    text1: string, 
    text2: string, 
    link1: JSX.Element 
} } = { 
    // Create a mapping from AuthType to corresponding UI texts and links
    [AuthType.LOGIN]: { 
        title: "Log In", 
        text1: "Log in as", 
        text2: "Doesn't have an account?", 
        link1: <Link href="/signup">Sign up</Link> 
        // Define values for the LOGIN functionality
    }, 
    [AuthType.SIGNUP]: { 
        title: "Sign Up", 
        text1: "Sign up as", 
        text2: "Already have an account?", 
        link1: <Link href="/login">Log in</Link> 
        // Define values for the SIGNUP functionality
    } 
}

export default function AuthForm({ handleSubmit, functionality }: { 
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void, 
    functionality: AuthType 
}): JSX.Element { 
    // Define and export the AuthForm functional component
    const params = useSearchParams(); 
    // Get the search parameters from the URL
    const roleParam = params.get("role"); 
    // Retrieve the 'role' parameter from the URL
    const role: RoleType | null = useMemo(() => { 
        if (roleParam === null) { 
            return null; 
            // Return null if the role parameter is missing
        } else { 
            return roleParam as RoleType; 
            // Cast roleParam to RoleType and return it
        }
    }, [roleParam]); 
    // Memoize the role value to optimize performance and avoid unnecessary re-computations
    const { title, text1, text2, link1 } = functionalityToStates[functionality]; 
    // Extract the corresponding UI text and link based on the functionality (LOGIN or SIGNUP)

    return <Container className="sparse-content"> 
        {/* Render a Container with class 'sparse-content' for layout */}
        <h1>{title}</h1> 
        {/* Display the title based on functionality */}
        <Form onSubmit={handleSubmit}> 
            {/* Render a Form element with an onSubmit handler */}
            <Form.Group className="mb-3 line"> 
                {/* Form group for the username input field */}
                <FaUserAlt className="icon-inline" /> 
                {/* Render user icon */}
                <Form.Control type="text" placeholder="Email" id="username" name="username" required /> 
                {/* Render an input field for the username with a placeholder and required attribute */}
            </Form.Group>
            <Form.Group className="mb-5 line"> 
                {/* Form group for the password input field */}
                <FaKey className="icon-inline" /> 
                {/* Render key icon */}
                <Form.Control type="password" placeholder="Password" id="password" name="password" required /> 
                {/* Render an input field for the password with a placeholder and required attribute */}
            </Form.Group>
            <Form.Group className="mb-3 line"> 
                {/* Form group for the role selection */}
                <FaUserCheck className="icon-inline" /> 
                {/* Render user check icon */}
                <Form.Label className="label-inline">{text1}</Form.Label> 
                {/* Display label text based on functionality */}
                <Form.Select aria-label="select role" id="role" name="role" required> 
                    {/* Render a select input for the role */}
                    <option value="applicant" defaultChecked={role === RoleType.APPLICANT}>Applicant</option> 
                    {/* Option for 'applicant' role, checked if role is APPLICANT */}
                    <option value="lab" defaultChecked={role === RoleType.LAB}>Lab</option> 
                    {/* Option for 'lab' role, checked if role is LAB */}
                </Form.Select>
            </Form.Group>
            {functionality === AuthType.LOGIN ? null :
                <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
                    {/* Conditionally render checkbox for terms and conditions if functionality is not LOGIN */}
                    <Form.Check.Input type="checkbox" className="paragraph" id="termsCheck" name="termsCheck" /> 
                    {/* Render a checkbox input for terms and conditions */}
                    <Form.Check.Label>I have read and accepted the <Link href="/under-construction">terms and services</Link></Form.Check.Label>. 
                    {/* Render a label for the checkbox with a link to terms and services */}
                </Form.Group>
            }
            <div className="line"> 
                {/* Container for action buttons */}
                <Button variant="primary" className="btn-inline-2" type="submit" style={{width: "75%", marginRight: "15px"}}> 
                    {/* Render a submit button with custom styles */}
                    Submit 
                </Button>
                <Button variant="primary" className="btn-inline-2" disabled> 
                    {/* Render a disabled button for SSO */}
                    SSO 
                </Button>
            </div>
        </Form>
        <div className="dividing-line" /> 
        {/* Render a dividing line */}
        <p className="paragraph"> 
            {/* Render a paragraph with text */}
            {text2} {link1} 
            {/* Display additional text and a link based on functionality */}
        </p>
    </Container>
}
