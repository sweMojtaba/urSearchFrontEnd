import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Documents from "./profileSections/Documents";
import PersonalInfo from "./profileSections/PersonalInfo";
import Affiliations from "./profileSections/Affiliations";
import Experiences from "./profileSections/Experiences";

function Profile() {
    return <Container>
        <Row>
            <Col md={4} xl={3}>
                <PersonalInfo />
                <Documents />
                <Affiliations />
            </Col>
            <Col md={8} xl={6}>
                <Experiences />
            </Col>
        </Row>
    </Container>
}

export default Profile;