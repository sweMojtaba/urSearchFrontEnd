"use client"
// With the current stylesheet this needs to be a client component.
// In the future use "styles.scss" instead of "styles.module.scss"

import Image from "next/image";
import Poster from "./assets/posterPlaceholder.png";
import SchoolIcon from "./assets/schoolIconPlaceholder.png";
import FullStar from "./assets/fullStar.png";
import HalfStar from "./assets/halfStar.png";
import { Col, Container, Row } from "@/client-wrappers/bootstrap";
import styles from "./styles.module.scss";

// Define the Lab component
function Lab() {
    const labName = "Ricke Lab"; 

    return (
        <div className={styles.scrollPage}>
            {/* Render the poster image of the lab */}
            <Image src={Poster} alt="poster of lab" className={styles.poster} />
            <Container className={styles.headerLineHolder}>
                <Row className={styles.headerLine}>
                    {/* Render the school icon and lab name */}
                    <Image src={SchoolIcon} alt="school icon" className={styles.schoolIcon} />
                    <h1 className={styles.header}>{labName}</h1>
                </Row>
            </Container>
        </div>
    );
}

// Define a list of reviews with date, review text, and rating
const reviews = [
    {
        date: "SEPT 22", 
        review: "One of the best place to work with in campus. Amazing culture, amazing teams, amazing resources",
        rate: 5
    },
    // Additional reviews...
];

// Define the LabReviews component
function LabReviews() {
    return (
        <div className={styles.reviewBoard}>
            <Row>
                <Col className={styles.left}>
                    <h2>Reviews</h2>
                </Col>
                <Col className={styles.right}>
                    <h4>5</h4>
                    {/* Render full star images for the rating */}
                    {Array.from({ length: 5 }, (_, i) => (
                        <Image key={i} src={FullStar} alt="full star" style={{ scale: 0.8 }} />
                    ))}
                </Col>
            </Row>
            {reviews.map((review, i) => (
                <Row key={i} style={{ borderBottom: "solid #2356A1 10px", display: "flex", flexDirection: "row", margin: "0 5px" }}>
                    <Col className={styles.left} style={{ display: "flex", flexDirection: "row" }}>
                        {/* Render UW Madison logo and review details */}
                        <Image src={"/uw-logo.png"} alt="UW Madison Logo" width={20} height={20} className="job-results-photo" style={{ marginRight: "10px", marginTop: "5px" }} />
                        <div>
                            <div><p style={{ fontFamily: "Cabin" }}>{review.date}</p></div>
                            <div><p style={{ fontFamily: "Montserrat" }}>{review.review.toUpperCase()}</p></div>
                        </div>
                    </Col>
                    <div className={styles.individualReview}>
                        {/* Render full star images for each review */}
                        {Array.from({ length: 5 }, (_, i) => (
                            <Image key={i} src={FullStar} alt="full star" />
                        ))}
                        <h1>5</h1>
                    </div>
                </Row>
            ))}
        </div>
    );
}

// Define the main Reviews component that combines Lab and LabReviews
export default function Reviews() {
    return (
        <div>
            <Lab />
            <LabReviews />
        </div>
    );
}
