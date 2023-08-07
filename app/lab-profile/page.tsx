import Image from "next/image";
import { fetchLabInfo, fetchLabKeywords, fetchResources, fetchReviews, fetchRating, fetchQuickApply } from "./fetchProfileSections";
import Poster from "./assets/posterPlaceholder.png"
import SchoolIcon from "./assets/schoolIconPlaceholder.png"
import { Col, Container, Row } from "@/client-wrappers/bootstrap";
import { InfoCard } from "@/components/cards-and-items/cards";

import styles from "./styles.module.scss"
import { Review } from "./client-side-components";


export default function LabProfile() {
    const labName = "Ricke Lab"; // update after the new state management is done
    const labInfo = fetchLabInfo();
    const labKeywords = fetchLabKeywords();
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
                header line trailing
                <Col md={6}>
                    {/* <Info data={labInfo}/> */}
                </Col>
                <Col md={6}>
                    {/* <Keywords data={labKeywords}/> */}
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    {/* <Resources data={resources}/> */}
                </Col>
                <Col md={8}>
                    <Reviews data={reviews} />
                    <Row>
                        <Col md={6}>
                            {/* <PostNewOpportunity /> */}
                        </Col>
                        <Col md={6}>
                            {/* <QuickApply data={quickApply}/> */}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
}

function Reviews({ data }: {
    data: {
        rating: number,
        text: string,
        timestamp: string
    }[]
}) {
    return <InfoCard
        title="Reviews"
    >
        {data.map((review, i) => <Review key={i} data={review} />)}
    </InfoCard>
}