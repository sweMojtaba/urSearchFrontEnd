import { Container, Col, Row, Button } from '@/client-wrappers/bootstrap'
import Image from "next/image";

import "./job.scss"

export default function Job() {
    return (
        <Container className="medium-container job-container">
            <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={60} height={60} className="uw-logo" />
            <h1>Ricke Lab</h1>
            <Row>
                <Col>
                    <h3>Research Assistant</h3>
                </Col>
                <Col>
                    <p>4.6 Stars</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <h4>Description</h4>
                        <p>
                        Dr. Ricke's research program encompasses basic and translational sciences as it pertains to the pathogenesis of the lower urinary tract. The synergy of both sciences allows his lab to explore both molecular underlying mechanisms associated with disease progression, but also to pre-clinically treat the same pathways, which may lead to the therapies of tomorrow.
                        </p>
                    </Row>
                    <Row>
                        <h4>Qualifications</h4>
                        <ul>
                            <li>Animal Model Analysis Experience</li>
                            <li>Background in Biology Related Area</li>
                            <li>Currently Enrolled in and Pursuing a BS or Higher in any U.S. Institution</li>
                        </ul>
                    </Row>
                    <Row>
                        <ul>
                            <li>Professional Training</li>
                            <li>Sign Up Bonus</li>
                            <li>High Fellowship Rate</li>
                            <li>Quick Apply Available</li>
                        </ul>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h4>Location</h4>
                        <p>
                            Department of Urology Third Floor 1685 Highland Avenue Madison, WI 53705
                        </p>
                    </Row>
                    <Row>
                        <h4>Responsibilities</h4>
                        <ul>
                            <li>Animal Model Data Analysis</li>
                            <li>Review Analysis</li>
                            <li>CR-C7 Chartting</li>
                        </ul>
                    </Row>
                    <Row>
                        <h4>Pay Range</h4>
                        <ul>
                            <li>12-21$ per hour</li>
                            <li>Can be done for credit</li>
                        </ul>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Button className="job-button">View Profile</Button>
                <Button className="job-button">Apply</Button>
                <Image src={true ? "/bookmark-filled.png" : "/bookmark-empty.png"} alt="Bookmark Status" width={36} height={36} className="bookmark-icon" />
                <p>84% Match</p>
            </Row>
        </Container>
    );
}