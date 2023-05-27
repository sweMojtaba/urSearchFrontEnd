import React from "react";

import contactImg from "../../assets/contact.png";
import { Col, Container, Row } from "react-bootstrap";
import ContactInfo from "./ContactInfo";

import "./contact.scss";

function Contact() {
    return <div id="slide" style={{ backgroundImage: `url(${contactImg})` }}>
        <Container>
            <Row>
                <Col lg={4}>
                    <ContactInfo
                        team="Technical Support"
                        email="tech@urSearch.com"
                        phone="+1 (608) 572 8750"
                    />
                </Col>
                <Col lg={4}>
                    <ContactInfo
                        team="Data & Marketing"
                        email="data@urSearch.com"
                        phone="+1 (608) 572 8750"
                    />
                </Col>
            </Row>
            <Col lg={6}>
                <ContactInfo
                    team="Customer Support & Feedback"
                    email="customer@urSearch.com"
                    phone="+1 (608) 572 8750"
                />
            </Col>
            <Col lg={6}>
                <ContactInfo
                    team="Affiliates"
                    email="affiliates@urSearch.com"
                    phone="+1 (608) 572 8750"
                />
            </Col>
        </Container>
    </div>
}

export default Contact;