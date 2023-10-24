import { BigLi } from "@/components/cards-and-items/listItems";
import WorkIcon from "../applicant-profile/work.svg"
import { Button, Container } from "@/client-wrappers/bootstrap";
import Link from "next/link";

import { OpportunityResultCard } from "@/components/cards-and-items/cards";

import styles from "./styles.module.scss";
import "./global_styles_override.scss";

export default function Opportunities() {
    return (
        <Container className="medium-content">
            <div id={styles.content_container}>
                <h3 id={styles.title}>Posted Opportunties</h3>
                <OpportunityResultCard />
                <div id={styles.button_container}>
                    <Link href="/post-opportunity" className={styles.pageEndButton + " button-link"}>
                        <Button>Post New Opportunity</Button>
                    </Link>
                    <Link href="/post-open-to-idea" className={styles.pageEndButton + " button-link"}>
                        <Button>Post Open to Idea</Button>
                    </Link>
                </div>
            </div>
            <div id={styles.footer}>
                <h1>!</h1>
                <h3>
                    “Open to idea” Positions are an oppurtunity for the applicants to share a unique innovation or research Idea with you, and for you to be a part of bringing their idea to life.
                </h3>
            </div>
        </Container>
    );
}