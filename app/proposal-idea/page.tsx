"use client"; // needed for ApplicantExclusion wrapper

import { useState } from "react";
import { Col, Container, Row } from "@/client-wrappers/bootstrap";
import { Affiliations, Documents, PersonalInfo, Video, Shadow, FunctionButtons, Email, More } from "./components";
// import { withApplicantExclusion } from "@/utils/withUserExclusion";

function ReviewProfile() {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [emailSent, setEmailSent] = useState(false);

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
                        <Col md={3}>
                            <PersonalInfo />
                            <Affiliations />
                            <More />
                        </Col>
                        <Col md={9} id="lastCol">
                            <Documents />
                            <Video />
                        </Col>
                    </>
                )}
            </Row>
            <Row>
                <Shadow />
            </Row>
            <Row>
                <FunctionButtons activeButton={activeButton} clicked={handleButtonClick} />
            </Row>
        </Container>
    );
}

// export default withApplicantExclusion(Profile);

export default ReviewProfile;
