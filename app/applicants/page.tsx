"use client"; // Indicates that this component will use client-side features and should be treated as a client component

import { Col, Container, Row } from "react-bootstrap"; // Importing layout components (Col, Container, Row) from react-bootstrap for responsive design
import { SearchBar, ApplicantList, TopMatches } from "./components"; // Importing custom components: SearchBar, ApplicantList, and TopMatches from the local components module

// Default export function component for displaying the Applicants page
export default function Applicants() {
    return (
        <Container>
            {/* Container component from react-bootstrap to wrap the content and provide padding */}
            <SearchBar /> {/* Renders the SearchBar component for searching applicants */}
            <Row>
                {/* Row component from react-bootstrap to create a flexbox container for columns */}
                <Col lg={9}>
                    {/* Column component from react-bootstrap, taking up 9/12 of the row on large screens */}
                    <ApplicantList /> {/* Renders the ApplicantList component displaying a list of applicants */}
                </Col>
                <Col lg={3}>
                    {/* Column component from react-bootstrap, taking up 3/12 of the row on large screens */}
                    <TopMatches /> {/* Renders the TopMatches component showing top matching applicants */}
                </Col>
            </Row>
        </Container>
    );
}
