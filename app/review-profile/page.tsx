"use client"; // Indicates that this file uses client-side rendering

import { useState, useEffect } from "react"; // Import hooks for managing state and side effects
import { Col, Container, Row } from "@/client-wrappers/bootstrap"; // Bootstrap components for layout
import { Accomplishments, Affiliations, Documents, Experiences, PersonalInfo, Projects, QuickApply, Skills, Video, ApplicationInformation, Shadow, FunctionButtons, Email } from "./components"; // Importing various UI components
import { applicationInterface, applicantInterface, defaultApplication, defaultApplicant } from "./interfaces"; // Importing TypeScript interfaces and default data
import { useSearchParams } from "next/navigation"; // Next.js hook for accessing URL search parameters
// import { withApplicantExclusion } from "@/utils/withUserExclusion"; // Optional utility for user exclusion

function ReviewProfile() {
    // Retrieve search parameters from URL
    const searchParams = useSearchParams();
    const applicationId = searchParams.get("ID") || ""; // Extract the application ID from the URL

    // State hooks for managing application data, applicant data, active button, and email sent status
    const [applicationData, setApplicationData] = useState<applicationInterface>(defaultApplication);
    const [applicantData, setApplicantData] = useState<applicantInterface>(defaultApplicant);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [emailSent, setEmailSent] = useState(false);

    // Effect to fetch application data when applicationId changes
    useEffect(() => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Optionally use environment variable
        const url = baseUrl + `api/lab/me/application/${applicationId}`;
        const getApplicationProfile = async () => {
            try {
                const res = await fetch(url, {
                    method: "GET",
                    credentials: "include",
                });
                const data = await res.json();
                if (res.status === 200 && data.code === 0) {
                    setApplicationData(data.data.application); // Set application data state
                } else {
                    console.log(data.msg); // Log error message if not successful
                }
            } catch (error) {
                console.error("Error fetching application data:", error); // Catch and log fetch errors
            }
        };

        getApplicationProfile();
    }, [applicationId]);

    // Effect to fetch applicant data when applicationData changes
    useEffect(() => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Optionally use environment variable
        const url = baseUrl + `api/jobseeker/${applicationData.jobSeekerId}`;
        const getApplicantProfile = async () => {
            try {
                const res = await fetch(url, {
                    method: "GET",
                    credentials: "include",
                });
                const data = await res.json();
                if (res.status === 200 && data.code === 0) {
                    setApplicantData(data.data.person); // Set applicant data state
                } else {
                    console.log(data.msg); // Log error message if not successful
                }
            } catch (error) {
                console.error("Error fetching applicant data:", error); // Catch and log fetch errors
            }
        };

        getApplicantProfile();
    }, [applicationData]);

    // Handler for button clicks
    const handleButtonClick = (buttonName: string) => {
        if (!emailSent && activeButton === buttonName) {
            setActiveButton(null); // Deselect button if clicked again
        } else if (!emailSent) {
            setActiveButton(buttonName); // Set the clicked button as active
        }
    };

    // Handler for sending email
    const handleSendClick = () => {
        // Handle the logic for sending the email here
        setEmailSent(true); // Update state to indicate email has been sent
    };

    return (
        <Container className="scroll-page">
            <Row>
                {!emailSent && activeButton !== null ? (
                    <Col>
                        <Email activeButton={activeButton} handleSendClick={handleSendClick} /> {/* Render Email component if email hasn't been sent and a button is active */}
                    </Col>
                ) : (
                    <>
                        {/* Profile content layout */}
                        <Col md={4} xl={3}>
                            <PersonalInfo name={applicantData.name} degree={applicantData.degree} major={applicantData.major} school={applicantData.school} classYear={applicantData.classYear} GPA={applicantData.GPA} phone={applicantData.phone} email={applicantData.email} GPAhidden={applicantData.GPAhidden} />
                            <Affiliations affiliations={applicantData.affiliations} />
                            <ApplicationInformation />
                        </Col>
                        <Col md={8} xl={6}>
                            <Experiences experiences={applicantData.experiences} />
                            <Projects projects={applicantData.projects} />
                            <Video videos={applicantData.videos} />
                        </Col>
                        <Col md={12} xl={3} id="lastCol">
                            <Skills skills={applicantData.skills} />
                            <Accomplishments accomplishments={applicantData.accomplishments} />
                            <Documents documents={applicantData.files} resume={applicationData.resumeBlobName} coverLetter={applicationData.coverLetterBlobName} applicationId={applicationId} />
                        </Col>
                    </>
                )}
            </Row>
            <Row>
                <Shadow /> {/* Render shadow component */}
            </Row>
            <Row>
                <FunctionButtons activeButton={activeButton} applicationId={applicationId} clicked={handleButtonClick} /> {/* Render function buttons */}
            </Row>
        </Container>
    );
}

// export default withApplicantExclusion(Profile); // Optional: Wrap the component with exclusion logic

export default ReviewProfile; // Export the ReviewProfile component as default
