import Image from "next/image";
import { fetchLabInfo, fetchLabKeywords, fetchResources, fetchReviews, fetchRating, fetchQuickApply } from "./fetchProfileSections";
import Poster from "./posterPlaceholder.png"
import SchoolIcon from "./schoolIconPlaceholder.png"

import styles from "./styles.module.scss"
import { ClientCol, ClientContainer, ClientRow } from "@/client-wrappers/bootstrap";
import { InfoCard } from "@/components/cards-and-items/cards";

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
        <ClientContainer className={styles.headerLineHolder}>
            <ClientRow className={styles.headerLine}>
                <Image src={SchoolIcon} alt="school icon" className={styles.schoolIcon} />
                <h1 className={styles.header}>{labName}</h1>
            </ClientRow>
            <ClientRow>
                <ClientCol md={6}>
                    {/* <Info data={labInfo}/> */}
                </ClientCol>
                <ClientCol md={6}>
                    {/* <Keywords data={labKeywords}/> */}
                </ClientCol>
            </ClientRow>
            <ClientRow>
                <ClientCol md={4}>
                    {/* <Resources data={resources}/> */}
                </ClientCol>
                <ClientCol md={8}>
                    <Reviews data={reviews}/>
                    <ClientRow>
                        <ClientCol md={6}>
                            {/* <PostNewOpportunity /> */}
                        </ClientCol>
                        <ClientCol md={6}>
                            {/* <QuickApply data={quickApply}/> */}
                        </ClientCol>
                    </ClientRow>
                </ClientCol>
            </ClientRow>
        </ClientContainer>
    </div>
}

function Reviews({ data }: { data: {
    rating: number,
    text: string,
    timestamp: string
}[] }) {
    return <InfoCard
        title="Reviews"
    >
        {data.map((review, i) => <Review key={i} data={review}/>)}
    </InfoCard>
}

function Review({ data }: { data: {
    rating: number,
    text: string,
    timestamp: string
} }) {
    return <div className={styles.review}>
        <div className={styles.rating}>{data.rating}</div>
        <div className={styles.text}>{data.text}</div>
        <div className={styles.timestamp}>{data.timestamp}</div>
    </div>
}