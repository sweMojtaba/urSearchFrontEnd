// "use client" directive to enable client-side rendering in Next.js
"use client"

// Importing necessary hooks, components, and libraries from React, React Bootstrap, and Next.js
import { useRouter } from "next/navigation"; // Next.js hook for client-side navigation
import React, { ChangeEvent, useState } from "react"; // React hooks for managing state and handling events
import { Button, Form, Spinner } from "react-bootstrap"; // Components from React Bootstrap for form and button elements
import { AiFillFilePdf } from "react-icons/ai"; // Importing a PDF icon from React Icons

// Asynchronous function to handle resume file upload to the server
async function uploadResume(file: File) {
    // Base URL for the API (replace with your actual base URL if needed)
    const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
    // Endpoint for uploading the resume
    const url = baseUrl + "api/jobseeker/me/parseresume";
    
    // Create a FormData object to hold the file data for the POST request
    const formData = new FormData(); 
    formData.append('file', file, file.name);
    
    // Send a POST request to the server with the file and authorization headers
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": "Basic " + btoa(localStorage.getItem("userName") + ":" + localStorage.getItem("password")) // Basic authentication using Base64 encoding
        }, 
        credentials: "include", // Include credentials for cross-origin requests
        body: formData // File data in the request body
    });
    return res; // Return the server's response
}

// Main functional component for handling resume file input and upload
function ResumeInput() {
    // State management for file, upload status, and button content
    const [file, setFile] = useState<File | null>(null); // State for storing the selected file
    const [uploading, setUploading] = useState(false); // State to track if the file is currently being uploaded
    const [uploadButtonContent, setUploadButtonContent] = useState(() => {
        return <>Upload</> // Initial button content set to "Upload"
    });

    // useRouter hook for programmatically navigating between pages
    const router = useRouter();

    // Event handler for file input change
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.item(0); // Get the first file selected by the user
        if (file !== undefined && file !== null) {
            setFile(file); // Set the file state to the selected file
        }
    };

    // Event handler for file upload button click
    const handleUpload = () => {
        setUploading(true); // Set uploading state to true to indicate the start of the upload
        setUploadButtonContent(() => {
            return <>
                Uploading
                <Spinner
                    animation="border"
                    variant="light"
                    className="ms-2"
                    id="fileUploadSpinner"
                />
            </> // Update the button content to show "Uploading" and a spinner
        });

        // Simulate a delay before performing the actual upload
        setTimeout(() => {
            setUploadButtonContent(() => {
                return <>Waiting for redirect...</> // Update button content while waiting for the redirect
            });

            // Call the uploadResume function and handle the server's response
            uploadResume(file as File)
                .then((res) => {
                    if (res.status === 200) {
                        alert("Successfully uploaded your file!"); // Show success message if upload is successful
                        setTimeout(() => router.push("/applicant-profile"), 1000); // Redirect to profile page after a short delay
                    } else {
                        alert("Error " + res.status); // Show an error message if the upload fails
                        setUploading(false); // Reset uploading state
                        setUploadButtonContent(() => {
                            return <>Upload</> // Reset the button content to "Upload"
                        });
                    }
                });
        }, 3000); // 3-second delay before the upload starts
    };

    // Return statement defines the component's UI structure
    return (
        <Form>
            <Form.Group className="mb-3 line">
                <Form.Label>
                    <AiFillFilePdf className="icon-inline" /> {/* PDF icon next to the file input */}
                </Form.Label>
                <Form.Control
                    type="file"
                    placeholder="Choose your resume (.pdf)..." // Placeholder text for file input
                    onChange={handleFileChange} // Handle file selection
                />
            </Form.Group>
            <div className="line">
                <Button
                    disabled={file === null || uploading === true} // Disable button if no file is selected or if uploading is in progress
                    onClick={handleUpload} // Trigger the upload process on button click
                >
                    {uploadButtonContent} {/* Display the current button content */}
                </Button>
            </div>
        </Form>
    );
}

// Exporting the component as the default export
export default ResumeInput;
