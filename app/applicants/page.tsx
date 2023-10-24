"use client";

import { Col, Container, Row } from "react-bootstrap";
import { SearchBar, ApplicantList, TopMatches } from "./components";

export default function Applicants() {
    return (
        <Container>
            <SearchBar />
            <Row>
                <Col lg={9}>
                    <ApplicantList />
                </Col>
                <Col lg={3}>
                    <TopMatches />
                </Col>
            </Row>
        </Container>
    );
}
