"use client";
// Indicating that this file is intended for client-side execution in a Next.js application.

import { Button, Container } from "@/client-wrappers/bootstrap";
// Importing Button and Container components from the Bootstrap client-wrappers module for consistent styling and layout.

import Link from "next/link";
// Importing the Link component from Next.js for client-side navigation.

import { OpportunityResultCard } from "@/components/cards-and-items/cards";
// Importing the OpportunityResultCard component used to display individual job opportunities.

import styles from "./styles.module.scss";
// Importing module-specific styles from the "styles.module.scss" file.

import "./global_styles_override.scss";
// Importing global styles override for additional styling customizations.

import { useEffect, useState } from "react";
// Importing React hooks for managing component state and side effects.

export default function Opportunities() {
    // Exporting the default functional component named Opportunities.

    const [jobs, setJobs] = useState<any[]>([]);
    // State to store the list of job opportunities fetched from the API.

    useEffect(() => {
        // useEffect hook to fetch job opportunities when the component mounts.
        
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // Base URL for API requests (can be replaced with environment variable).

        const url = baseUrl + "api/jobs/me";
        // API endpoint to fetch job opportunities.

        const getJobs = async () => {
            // Async function to fetch job opportunities.
            const res = await fetch(url, {
                method: "GET",
                credentials: "include",
            });
            const data = await res.json();
            if (res.status === 200 && data.code === 0) {
                setJobs(data.data.jobs);
            }
        };

        getJobs();
    }, []);
    // Empty dependency array ensures this effect runs only once when the component mounts.

    return (
        <Container className="medium-content">
            {/* Rendering the Container component with a className of "medium-content" for layout and styling. */}
            
            <div id={styles.content_container}>
                {/* Container for the content with a specific ID for styling. */}
                
                <h3 id={styles.title}>Posted Opportunities</h3>
                {/* Heading for the list of posted opportunities. */}
                
                {jobs.length > 0 && jobs.map((job) => (
                    <OpportunityResultCard
                        key={job.ID}
                        labName={job.labName}
                        title={job.title}
                        jobId={job.ID}
                        jobUserId={job.userId}
                    />
                ))}
                {/* Mapping over the jobs array to render a list of OpportunityResultCard components if jobs are available. */}
                
                <div id={styles.button_container}>
                    {/* Container for the buttons with a specific ID for styling. */}
                    
                    <Link href="/opportunities/post" className={styles.pageEndButton + " button-link"}>
                        <Button>Post New Opportunity</Button>
                    </Link>
                    {/* Link to the page for posting a new opportunity with a styled button. */}
                    
                    <Link href="/post-open-to-idea" className={styles.pageEndButton + " button-link"}>
                        <Button>Post Open to Idea</Button>
                    </Link>
                    {/* Link to the page for posting an open-to-idea opportunity with a styled button. */}
                </div>
            </div>
            
            <div id={styles.footer}>
                {/* Footer section with a specific ID for styling. */}
                
                <h1>!</h1>
                <h3>“Open to idea” Positions are an opportunity for the applicants to share a unique innovation or research idea with you, and for you to be a part of bringing their idea to life.</h3>
                {/* Footer text providing additional information about "Open to idea" positions. */}
            </div>
        </Container>
    );
}
