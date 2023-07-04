import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Documents from "./profileSections/Documents";
import PersonalInfo from "./profileSections/PersonalInfo";
import Affiliations from "./profileSections/Affiliations";

function Profile() {
    return <Container>
        <Row>
            <Col sm={6} lg={4}>
                <PersonalInfo />
                <Documents />
                <Affiliations />
            </Col>
        </Row>
    </Container>
}

export default Profile;