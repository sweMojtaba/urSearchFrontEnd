import ContactImg from "./contact.png";
import Item1 from "@/assets/item1.svg";
import Item2 from "@/assets/item2.svg";

import "./contact.scss";
import Image from "next/image";
import { Col, Container, Row } from "@/client-wrappers/bootstrap";

function ContactInfo({ team, address, phone, email }: { team: string; address?: string; phone?: string; email?: string }) {
    return (
        <div className="contact-info">
            <div className="primary-line line line-start">
                <Image src={Item1} alt="item1" />
                <p className="heading">{team}</p>
            </div>
            {address && (
                <div className="line line-start secondary-line">
                    <Image src={Item2} alt="item2" />
                    <p className="text">{address}</p>
                </div>
            )}
            {phone && (
                <div className="line line-start secondary-line">
                    <Image src={Item2} alt="item2" />
                    <p className="text">Phone: {phone}</p>
                </div>
            )}
            {email && (
                <div className="line line-start secondary-line">
                    <Image src={Item2} alt="item2" />
                    <a href={`mailto:${email}`} className="text">Email: {email}</a>
                </div>
            )}
        </div>
    );
}

function Contact() {
    return (
        <div id="slide">
            <Container style={{zIndex: "2"}}>
                <Row>
                    <Col lg={4}>
                        <ContactInfo team="Technical Support Team:" email="tech@urSearch.com" phone="+1 (608) 572 8750" />
                    </Col>
                    <Col lg={4}>
                        <ContactInfo team="Customer Support & Feedback:" email="Support@urSearch.com" phone="+1 (608) 572 8750" />
                    </Col>
                </Row>
                <Col lg={6}>
                    <ContactInfo team="Data & Marketing Department:" email="Collabs@urSearch.com" phone="+1 (608) 572 8750" />
                </Col>
                <Col lg={6}>
                    <ContactInfo team="Affiliates:" address="Ricke Lab, 1685 Highland Avenue Madison, WI 53705" email="contact@urology.wisc.edu" />
                </Col>
            </Container>
            <Image src={ContactImg} alt="slide" className="fit-image"/>
        </div>
    );
}

export default Contact;
