"use client"; // needed for ApplicantExclusion wrapper

import { useState, useEffect } from "react";
import { Col, Container, Row } from "@/client-wrappers/bootstrap";
import { Accomplishments, Affiliations, Documents, Experiences, PersonalInfo, Projects, QuickApply, Skills, Video, ApplicationInformation, Shadow, FunctionButtons, Email } from "./components";
import { applicationInterface, applicantInterface, defaultApplication, defaultApplicant } from "./interfaces";
import { useSearchParams } from "next/navigation";
// import { withApplicantExclusion } from "@/utils/withUserExclusion";

function ReviewProfile() {
    const searchParams = useSearchParams();
    const applicationId = searchParams.get("ID") || "";
    const [applicationData, setApplicationData] = useState<applicationInterface>(defaultApplication);
    const [applicantData, setApplicantData] = useState<applicantInterface>(defaultApplicant);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [emailSent, setEmailSent] = useState(false);

    // Get the data for the application
    useEffect(() => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const url = baseUrl + `api/lab/me/application/${applicationId}`;
        const getApplicationProfile = async () => {
            const res = await fetch(url, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if (res.status == 200 && data.code == 0) {
                setApplicationData(data.data.application);
            } else {
                console.log(data.msg);
            }
        };

        getApplicationProfile();
    }, [applicationId]);

    // Get the data for the applicant who applied
    useEffect(() => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const url = baseUrl + `api/jobseeker/${applicationData.jobSeekerId}`;
        const getApplicantProfile = async () => {
            const res = await fetch(url, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if (res.status == 200 && data.code == 0) {
                setApplicantData(data.data.person);
            } else {
                console.log(data.msg);
            }
        };
        getApplicantProfile();
    }, [applicationData]);

    const handleButtonClick = (buttonName: string) => {
        if (!emailSent && activeButton === buttonName) {
            setActiveButton(null);
        } else if (!emailSent) {
            setActiveButton(buttonName);
        }
    };

    const handleSendClick = () => {
        // Handle sending the actual email
        setEmailSent(true);
    };

    return (
        <Container className="scroll-page">
            <Row>
                {!emailSent && activeButton !== null ? (
                    <Col>
                        <Email activeButton={activeButton} handleSendClick={handleSendClick} />
                    </Col>
                ) : (
                    <>
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
                <Shadow />
            </Row>
            <Row>
                <FunctionButtons activeButton={activeButton} applicationId={applicationId} clicked={handleButtonClick} />
            </Row>
        </Container>
    );
}

// export default withApplicantExclusion(Profile);

export default ReviewProfile;
