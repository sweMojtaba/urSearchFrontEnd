"use client";

import { Button, Container } from "@/client-wrappers/bootstrap";
import Link from "next/link";

import { OpportunityResultCard } from "@/components/cards-and-items/cards";

import styles from "./styles.module.scss";
import "./global_styles_override.scss";
import { useEffect, useState } from "react";

export default function Opportunities() {
    const [jobs, setJobs] = useState<any[]>([]);
    const recruiterLabId = 1;
    const url = String(process.env.NEXT_PUBLIC_API_URL) + `/api/jobs/lab/${recruiterLabId}`;

    // TODO, get mapping of all labs to their respective ID
    const labIdMap: { [key: string]: string } = {
        "1": "Ricke Lab",
    };

    useEffect(() => {
        const getJobs = async () => {
            const res = await fetch(url);
            const data = await res.json();
            if (res.status == 200 && data.code == 0) {
                setJobs(data.data.jobs);
            }
        };

        getJobs();
    }, [url]);

    return (
        <Container className="medium-content">
            <div id={styles.content_container}>
                <h3 id={styles.title}>Posted Opportunties</h3>
                {jobs.length > 0 && jobs.map((job) => <OpportunityResultCard key={job.ID} labName={labIdMap[job.labId]} title={job.title} jobId={job.ID} jobUserId={job.userId} />)}
                <div id={styles.button_container}>
                    <Link href="/opportunities/post" className={styles.pageEndButton + " button-link"}>
                        <Button>Post New Opportunity</Button>
                    </Link>
                    <Link href="/post-open-to-idea" className={styles.pageEndButton + " button-link"}>
                        <Button>Post Open to Idea</Button>
                    </Link>
                </div>
            </div>
            <div id={styles.footer}>
                <h1>!</h1>
                <h3>“Open to idea” Positions are an oppurtunity for the applicants to share a unique innovation or research Idea with you, and for you to be a part of bringing their idea to life.</h3>
            </div>
        </Container>
    );
}
