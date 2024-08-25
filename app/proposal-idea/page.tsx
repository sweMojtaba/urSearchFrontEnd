"use client"; // Needed for using client-side functionalities like state management

import { useState } from "react"; // Importing useState for managing component state
import { Col, Container, Row } from "@/client-wrappers/bootstrap"; // Bootstrap components for layout
import { Affiliations, Documents, PersonalInfo, Video, Shadow, FunctionButtons, Email, More } from "./components"; // Importing various profile-related components
// import { withApplicantExclusion } from "@/utils/withUserExclusion"; // Uncomment if you need to apply user exclusion logic

function ReviewProfile() {
    const [activeButton, setActiveButton] = useState<string | null>(null); // State to track the active button
    const [emailSent, setEmailSent] = useState(false); // State to track if the email has been sent

    // Function to handle button clicks
    const handleButtonClick = (buttonName: string) => {
        if (!emailSent && activeButton === buttonName) {
            setActiveButton(null); // Deselect the button if it is already active
        } else if (!emailSent) {
            setActiveButton(buttonName); // Set the active button if no email has been sent
        }
    };

    // Function to handle email sending
    const handleSendClick = () => {
        // Handle sending the actual email
        setEmailSent(true); // Set emailSent to true to indicate email has been sent
    };

    return (
        <Container className="scroll-page"> {/* Main container with scrollable page class */}
            <Row>
                {!emailSent && activeButton !== null ? ( // Conditionally render Email component if no email has been sent and a button is active
                    <Col>
                        <Email activeButton={activeButton} handleSendClick={handleSendClick} />
                    </Col>
                ) : (
                    <>
                        <Col md={3}> {/* Sidebar column for personal info, affiliations, and more */}
                            <PersonalInfo />
                            <Affiliations />
                            <More />
                        </Col>
                        <Col md={9} id="lastCol"> {/* Main content column for documents and video */}
                            <Documents />
                            <Video />
                        </Col>
                    </>
                )}
            </Row>
            <Row>
                <Shadow /> {/* Render a shadow effect */}
            </Row>
            <Row>
                <FunctionButtons activeButton={activeButton} clicked={handleButtonClick} /> {/* Render function buttons with click handler */}
            </Row>
        </Container>
    );
}

// export default withApplicantExclusion(Profile); // Uncomment if applying user exclusion logic

export default ReviewProfile; // Export the main component
