import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Documents from "./Documents";
import PersonalInfo from "./PersonalInfo";

function Profile() {
    return <Container>
        <Row>
            <Col sm={6} lg={4}>
                <PersonalInfo />
                <Documents />
            </Col>
        </Row>
    </Container>
}

export default Profile;