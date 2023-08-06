import Image from "next/image";
import { fetchLabInfo, fetchLabKeywords, fetchResources, fetchReviews, fetchRating, fetchQuickApply } from "./fetchProfileSections";
import Poster from "./posterPlaceholder.png"
import SchoolIcon from "./schoolIconPlaceholder.png"

import styles from "./styles.module.scss"
import { ClientContainer, ClientRow } from "@/client-wrappers/bootstrap";

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
        </ClientContainer>
    </div>
}