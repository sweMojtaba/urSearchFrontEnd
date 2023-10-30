import Image from "next/image";
import { fetchLabInfo, fetchLabKeywords, fetchResources, fetchReviews, fetchRating, fetchQuickApply, LabKeywords } from "./fetchProfileSections";
import Poster from "./assets/posterPlaceholder.png"
import SchoolIcon from "./assets/schoolIconPlaceholder.png"
import { Col, Container, Row } from "@/client-wrappers/bootstrap";
import { ActionableCard, InfoCard } from "@/components/cards-and-items/cards";

import styles from "./styles.module.scss"
import { AvgRating, Info, Keywords, QuickApply, Resources, Review } from "./client-side-components";


export default function LabProfile() {
    const labName = "Ricke Lab"; // update after the new state management is done
    const labInfo = fetchLabInfo();
    const labKeywords: LabKeywords = fetchLabKeywords();
    const resources = fetchResources();
    const reviews = fetchReviews();
    const rating = fetchRating();
    const quickApply = fetchQuickApply();

    return <div className={styles.scrollPage}>
        <Image src={Poster} alt="poster of lab" className={styles.poster} />
        <Container className={styles.headerLineHolder}>
            <Row className={styles.headerLine}>
                <Image src={SchoolIcon} alt="school icon" className={styles.schoolIcon} />
                <h1 className={styles.header}>{labName}</h1>
            </Row>
            <Row>
                <Col md={6}>
                    <Info data={labInfo} />
                </Col>
                <Col md={6}>
                    <Keywords data={labKeywords} />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Resources data={resources} />
                </Col>
                <Col md={8}>
                    <Row>
                        <Reviews reviews={reviews} rating={rating} />
                    </Row>
                    <Row>
                        <Col md={6} className={styles.smallCard}>
                            <PostNewOpportunity />
                        </Col>
                        <Col md={6} className={styles.smallCard}>
                            <QuickApply quickApply={quickApply}/>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    </div>
}

function Reviews({ reviews, rating }: {
    reviews: {
        rating: number,
        text: string,
        timestamp: string
    }[],
    rating: number
}) {
    return <InfoCard
        title="Reviews"
    >
        <AvgRating rating={rating} />
        {reviews.map((review, i) => <Review key={i} data={review} />)}
    </InfoCard>
}

function PostNewOpportunity() {
    return <ActionableCard
        title="Post New Opportunities!"
        buttonProps={{
            buttonText: "＞",
            href: "/post-opportunity"
        }}
    />
}