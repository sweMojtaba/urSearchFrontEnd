import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Documents from "./profileSections/Documents";
import PersonalInfo from "./profileSections/PersonalInfo";
import Affiliations from "./profileSections/Affiliations";
import Experiences from "./profileSections/Experiences";
import Projects from "./profileSections/Projects";

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
                <Projects />
            </Col>
        </Row>
    </Container>
}

export default Profile;