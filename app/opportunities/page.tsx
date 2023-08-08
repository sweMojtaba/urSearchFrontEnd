import { BigLi } from "@/components/cards-and-items/listItems";
import WorkIcon from "../applicant-profile/work.svg"
import { Container } from "@/client-wrappers/bootstrap";
import styles from "./styles.module.scss"
import Link from "next/link";

export default function Opportunities() {
    return <Container className="medium-content">
        <h1 className="heading">Posted Opportunties</h1>
        <Link className={styles.bigLiHolder} href="/opportunity?id=1">
            <BigLi
                title="Research Assistant"
                subtitle="Posted on 2021-01-01"
                note="5 Applicants"
                ImgSrc={WorkIcon}
            />
        </Link>
    </Container>
}