"use client"; 
// Must specify this to use client-side fetch (handleSubmit not used as a server action)

import { RoleType } from "@/app/context-utils"; 
// Import RoleType enum from the context-utils file

import { UserContext } from "@/app/context"; 
// Import UserContext from the context file to manage user state

import { AuthType, extractForm } from "../authUtils"; 
// Import AuthType enum and extractForm function from authUtils file

import AuthForm from "../form"; 
// Import AuthForm component from the form file

import { useRouter } from "next/navigation"; 
// Import useRouter hook from Next.js for navigation

import { useContext } from "react"; 
// Import useContext hook from React to access context

import "../auth.scss"; 
// Import auth.scss file for styling

async function signupCall(username: string, password: string, role: RoleType) { 
    // Define an async function to handle user signup
    // TODO Replace this with a public link
    //const url = String(process.env.NEXT_PUBLIC_API_URL) + "api/signup"; Changed by MO for beta deploy
    const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
    // Define the base URL for the API
    const url = baseUrl + "api/signup"; 
    // Concatenate base URL with the signup endpoint

    const res = await fetch(url, { 
        // Make an asynchronous POST request to the signup endpoint
        method: "POST", 
        // Specify the HTTP method as POST
        headers: {
            "Content-Type": "application/json", 
            // Set the content type to JSON
        },
        body: JSON.stringify({
            email: username, 
            // Add username (email) to the request body
            password: password, 
            // Add password to the request body
            userType: role == RoleType.APPLICANT ? "person" : "recruiter", 
            // Add userType to the request body based on role
        }),
    });
    return res; 
    // Return the response from the fetch request
}

export default function Signup() { 
    // Define a default exported functional component for the signup page
    const router = useRouter(); 
    // Use the useRouter hook to get the router object
    const { user, setUser } = useContext(UserContext); 
    // Destructure user and setUser from the UserContext

    function handleSignup(event: React.FormEvent<HTMLFormElement>): void { 
        // Define a function to handle the form submission
        event.preventDefault(); 
        // Prevent the default form submission behavior
        const { username, password, role, termsCheck } = extractForm(event); 
        // Extract username, password, role, and termsCheck from the form event

        if (username === "" || password === "") { 
            // Check if username or password is empty
            alert("You must provide both a username and password!"); 
            // Alert the user if either field is empty
        } else {
            if (username === "" || password === "") { 
                // Redundant check for empty username or password
                alert("You must provide both a username and password!"); 
                // Alert the user if either field is empty
            } else if (termsCheck === false) { 
                // Check if the terms and conditions checkbox is unchecked
                alert("You must accept terms and conditions."); 
                // Alert the user to accept the terms and conditions
            } else {
                signupCall(username, password, role)
                    // Call the signupCall function with username, password, and role
                    .then((res) => {
                        if (res.status === 409) { 
                            // Check if the response status is 409 (Conflict)
                            alert("That username has already been taken!"); 
                            // Alert the user that the username is already taken
                        } else if (res.status === 200) { 
                            // Check if the response status is 200 (OK)
                            alert("Signup successful!"); 
                            // Alert the user that the signup was successful
                        }
                        return res.json(); 
                        // Parse the response as JSON
                    })
                    .then((data) => {
                        console.log(data); 
                        // Log the parsed data to the console
                        setUser({
                            name: username, 
                            // Set the user's name in the context
                            state: role === RoleType.APPLICANT ? 1 : 2, 
                            // Set the user's state based on their role
                        });
                        localStorage.setItem("userName", username); 
                        // Store the username in local storage
                        localStorage.setItem("userState", (role === RoleType.APPLICANT ? 1 : 2).toString()); 
                        // Store the user state in local storage
                        localStorage.setItem("userId", data.data.ID); 
                        // Store the user ID in local storage
                        router.push("import"); 
                        // Navigate to the import page
                    })
                    .catch((error) => {
                        console.log(error); 
                        // Log any errors to the console
                    });
            }
        }
    }
    return (
        <div style={{ display: "flex", width: "100%" }}> 
            {/* Create a div with flex display and full width */}
            <AuthForm handleSubmit={handleSignup} functionality={AuthType.SIGNUP} /> 
            {/* Render the AuthForm component with handleSubmit and functionality props */}
            <div className="verticalPhrase"> 
                {/* Create a div with the className verticalPhrase */}
                <div className="vertLine"></div> 
                {/* Create a div with the className vertLine */}
                <span>Lets shake the world!</span> 
                {/* Display a span with the text "Let's shake the world!" */}
            </div>
        </div>
    );
}
