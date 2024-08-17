// "use client" directive to enable client-side rendering in Next.js
"use client"

// Importing necessary hooks and components from React and Next.js
import { useRouter } from "next/navigation"; // Hook for programmatic navigation
import React, { ChangeEvent, useEffect, useState } from "react"; // React hooks for state and effect management
import { Button, Form, Spinner } from "react-bootstrap"; // UI components from React Bootstrap
import { BiCodeCurly } from "react-icons/bi" // Importing an icon from react-icons

// Main functional component for the Website Import functionality
function WebsiteImport() {
    // State variables to manage the input URL, import process, button states, etc.
    const [website, setWebsite] = useState(""); // Stores the URL entered by the user
    const [importing, setImporting] = useState(false); // Tracks whether the import process is ongoing
    const [disabled, setDisabled] = useState(true); // Controls whether the import button is disabled
    const [importButtonContent, setImportButtonContent] = useState(() => {
        return <>Import</>; // Initial button content set to "Import"
    });

    // Hook for routing/navigation within the app
    const router = useRouter();

    // useEffect hook to manage the button state and content based on the import status and the URL's validity
    useEffect(() => {
        if (importing === true) {
            setDisabled(true); // Disables the button while importing
            setImportButtonContent(() => (
                <>
                    Importing
                    <Spinner
                        animation="border"
                        variant="light"
                        className="ms-2"
                        id="fileUploadSpinner"
                    />
                </>
            )); // Shows a spinner while importing
        } else {
            // Regular expression to validate the website URL
            const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
            const regex = new RegExp(expression);
            // Checks if the entered website matches the regex pattern
            if (website.match(regex)) {
                setDisabled(false); // Enables the button if the URL is valid
                setImportButtonContent(() => <>Import</>); // Sets the button content back to "Import"
            } else {
                setDisabled(true); // Keeps the button disabled if the URL is invalid
                setImportButtonContent(() => <>Not a valid url</>); // Updates the button content to indicate an invalid URL
            }
        }
    }, [importing, website]); // Dependency array ensures this effect runs when `importing` or `website` changes

    // Handler function to update the website state as the user types in the input field
    const handleWebsiteChange = (event: ChangeEvent<HTMLInputElement>) => {
        setWebsite(event.target.value);
    };

    // Handler function for the import button click
    const handleImport = () => {
        setImporting(true); // Sets the importing state to true
        setTimeout(() => {
            // Simulating an upload process
            setImportButtonContent(() => {
                return <>Waiting for redirect...</>; // Changes button content after a simulated delay
            });
            alert("Successfully imported your website!"); // Alert to simulate successful import
            setTimeout(() => router.push("/under-construction"), 1000); // Redirects to another page after a short delay
        }, 3000); // Simulated delay of 3 seconds before changing the button content and redirecting
    };

    // The return statement defines the component's UI
    return (
        <Form>
            {/* Form group for the input field */}
            <Form.Group className="mb-3 line">
                <Form.Label>
                    <BiCodeCurly className="icon-inline" /> {/* Displaying an icon before the input field */}
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Input your website url..."
                    onChange={handleWebsiteChange} // Calls the handleWebsiteChange function when the input changes
                    value={website} // Binds the input field to the website state
                />
            </Form.Group>
            {/* Button to initiate the import process */}
            <div className="line">
                <Button disabled={disabled} onClick={handleImport}>
                    {importButtonContent} {/* Displays the current content of the import button */}
                </Button>
            </div>
        </Form>
    );
}

// Exporting the component as the default export
export default WebsiteImport;
