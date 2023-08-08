import { BigLi } from "@/components/cards-and-items/listItems";
import WorkIcon from "../applicant-profile/work.svg"
import { Button, Container } from "@/client-wrappers/bootstrap";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Opportunities() {
    return <Container className="medium-content">
        <h1 className="heading">Posted Opportunties</h1>
        <BigLi
            title="Research Assistant"
            subtitle="Posted on 2021-01-01"
            note="5 Applicants"
            url="/opportunity?id=1"
            ImgSrc={WorkIcon}
        />
        <Link href="/post-opportunity" className={styles.pageEndButton + " button-link"}>
            <Button>Post New Opportunity</Button>
        </Link>
        {/* TO-DO: open to idea */}
    </Container>
}