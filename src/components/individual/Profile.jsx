import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Documents from "./profileSections/Documents";
import PersonalInfo from "./profileSections/PersonalInfo";
import Affiliations from "./profileSections/Affiliations";
import Experiences from "./profileSections/Experiences";
import Projects from "./profileSections/Projects";
import Video from "./profileSections/Video";
import Skills from "./profileSections/Skills";

import "./profile.scss";
import Accomplishments from "./profileSections/Accomplishments";
import QuickApply from "./profileSections/QuickApply";

function Profile() {
    return <Container className="scroll-page">
        <Row>
            <Col md={4} xl={3}>
                <PersonalInfo />
                <Documents />
                <Affiliations />
            </Col>
            <Col md={8} xl={6}>
                <Experiences />
                <Projects />
                <Video />
            </Col>
            <Col md={12} xl={3} id="lastCol">
                <Skills />
                <Accomplishments />
                <QuickApply />
            </Col>
        </Row>
    </Container>
}

export default Profile;