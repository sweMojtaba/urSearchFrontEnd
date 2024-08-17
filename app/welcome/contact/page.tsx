import ContactImg from "./contact.png"; // Import image for the contact section background or header
import Item1 from "@/assets/item1.svg"; // Import SVG image for contact information items
import Item2 from "@/assets/item2.svg"; // Import another SVG image for contact information items

import "./contact.scss"; // Import the stylesheet for styling the contact page
import Image from "next/image"; // Import Next.js Image component for optimized image rendering
import { Col, Container, Row } from "@/client-wrappers/bootstrap"; // Import Bootstrap components for layout

// Component to display contact information
function ContactInfo({ team, address, phone, email }: { team: string; address?: string; phone?: string; email?: string }) {
    return (
        <div className="contact-info"> {/* Container for contact information */}
            <div className="primary-line line line-start"> {/* Primary line with team heading */}
                <Image src={Item1} alt="item1" /> {/* Image for the team heading */}
                <p className="heading">{team}</p> {/* Heading displaying the team name */}
            </div>
            {address && (
                <div className="line line-start secondary-line"> {/* Secondary line for address */}
                    <Image src={Item2} alt="item2" /> {/* Image for the address */}
                    <p className="text">{address}</p> {/* Paragraph displaying the address */}
                </div>
            )}
            {phone && (
                <div className="line line-start secondary-line"> {/* Secondary line for phone number */}
                    <Image src={Item2} alt="item2" /> {/* Image for the phone number */}
                    <p className="text">Phone: {phone}</p> {/* Paragraph displaying the phone number */}
                </div>
            )}
            {email && (
                <div className="line line-start secondary-line"> {/* Secondary line for email address */}
                    <Image src={Item2} alt="item2" /> {/* Image for the email address */}
                    <a href={`mailto:${email}`} className="text">Email: {email}</a> {/* Anchor tag for email link */}
                </div>
            )}
        </div>
    );
}

// Main component for the Contact page
function Contact() {
    return (
        <div id="slide"> {/* Container for the contact section */}
            <Container style={{zIndex: "2"}}> {/* Bootstrap container for layout, zIndex ensures it appears above other content */}
                <Row> {/* Bootstrap row for layout */}
                    <Col lg={4}> {/* Bootstrap column for layout (large screens) */}
                        <ContactInfo team="Technical Support Team:" email="tech@urSearch.com" phone="+1 (608) 572 8750" /> {/* ContactInfo component for technical support */}
                    </Col>
                    <Col lg={4}> {/* Bootstrap column for layout (large screens) */}
                        <ContactInfo team="Customer Support & Feedback:" email="Support@urSearch.com" phone="+1 (608) 572 8750" /> {/* ContactInfo component for customer support */}
                    </Col>
                </Row>
                <Row> {/* Bootstrap row for layout */}
                    <Col lg={6}> {/* Bootstrap column for layout (large screens) */}
                        <ContactInfo team="Data & Marketing Department:" email="Collabs@urSearch.com" phone="+1 (608) 572 8750" /> {/* ContactInfo component for data and marketing */}
                    </Col>
                    <Col lg={6}> {/* Bootstrap column for layout (large screens) */}
                        <ContactInfo team="Affiliates:" address="Ricke Lab, 1685 Highland Avenue Madison, WI 53705" email="contact@urology.wisc.edu" /> {/* ContactInfo component for affiliates */}
                    </Col>
                </Row>
            </Container>
            <Image src={ContactImg} alt="slide" className="fit-image"/> {/* Background or header image for the contact page */}
        </div>
    );
}

export default Contact; // Export the Contact component for use in other parts of the application
