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

async function login(email: string, password: string, role: RoleType) { 
    // Define an async function to handle user login
    // TODO Replace this with a public link
    // const url = String(process.env.NEXT_PUBLIC_API_URL) + "api/login";
    const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
    // Define the base URL for the API
    const url = baseUrl + "api/login";
    // Concatenate base URL with the login endpoint

    const res = await fetch(url, { 
        // Make an asynchronous POST request to the login endpoint
        method: "POST", 
        // Specify the HTTP method as POST
        headers: {
            "Content-Type": "application/json", 
            // Set the content type to JSON
            "Access-Control-Allow-Credentials": "true", 
            // Allow credentials to be included in the request
            "Access-Control-Allow-Origin": "http://localhost:3000/"
            // Allow requests from the specified origin
        },
        credentials: "include", 
        // Include credentials in the request
        body: JSON.stringify({
            email: email, 
            // Add email to the request body
            password: password, 
            // Add password to the request body
        }),
    });

    return res; 
    // Return the response from the fetch request
}

export default function Login() { 
    // Define a default exported functional component for the login page
    const router = useRouter(); 
    // Use the useRouter hook to get the router object
    const { user, setUser } = useContext(UserContext); 
    // Destructure user and setUser from the UserContext

    function handleLogin(event: React.FormEvent<HTMLFormElement>): void { 
        // Define a function to handle the form submission
        event.preventDefault(); 
        // Prevent the default form submission behavior
        const { username, password, role } = extractForm(event); 
        // Extract username, password, and role from the form event

        if (username === "" || password === "") { 
            // Check if username or password is empty
            alert("You must provide both an email and password!"); 
            // Alert the user if either field is empty
        } else {
            login(username, password, role)
                // Call the login function with username, password, and role
                .then((res) => {
                    if (res.status === 404) { 
                        // Check if the response status is 404 (Not Found)
                        alert("Incorrect username!"); 
                        // Alert the user that the username is incorrect
                    } else if (res.status === 401) { 
                        // Check if the response status is 401 (Unauthorized)
                        alert("Incorrect password!"); 
                        // Alert the user that the password is incorrect
                    } else if (res.status === 200) { 
                        // Check if the response status is 200 (OK)
                        alert("Login successful!"); 
                        // Alert the user that the login was successful
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
    return (
        <div style={{ display: "flex", width: "100%" }}> 
            {/* Create a div with flex display and full width */}
            <AuthForm handleSubmit={handleLogin} functionality={AuthType.LOGIN} /> 
            {/* Render the AuthForm component with handleSubmit and functionality props */}
            <div className="verticalPhrase"> 
                {/* Create a div with the className verticalPhrase */}
                <div className="vertLine"></div> 
                {/* Create a div with the className vertLine */}
                <span>Your time is here!</span> 
                {/* Display a span with the text "Your time is here!" */}
            </div>
        </div>
    );
}
