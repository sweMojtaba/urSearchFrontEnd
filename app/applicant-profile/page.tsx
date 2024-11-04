"use client" // needed for ApplicantExclusion wrapper
// The "use client" directive is commented out but typically needed when using client-side rendering in Next.js components

// Importing Col, Container, and Row components from a custom bootstrap wrapper
import { Col, Container, Row } from "@/client-wrappers/bootstrap";

// Importing various sections/components of the profile page from the profileSections module
import { Accomplishments, Affiliations, Documents, Experiences, PersonalInfo, Projects, QuickApply, Skills, Video } from "./profileSections";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Importing a higher-order component for user exclusion logic, which is currently commented out
// import { withApplicantExclusion } from "@/utils/withUserExclusion";

const defaultJobseeker = {
    name: "",
    degree: "",
    major: "",
    school: "",
    classYear: 0,
    GPA: 0,
    phone: 123456789,
    email: "",
    isQuickApplyActivated: false,
    GPAhidden: false,
    files: [],
    videos: [],
    affiliations: [],
    experiences: [],
    projects: [],
    skills: [],
    accomplishments: []
}

// Define the Profile function component
function Profile() {
    // Retrieve search parameters from URL
    const searchParams = useSearchParams();
    const jobseekerId = searchParams.get("ID") || ""; // Extract the jobseeker ID from the URL

    const [jobseekerData, setJobseekerData] = useState<any>(defaultJobseeker);

    useEffect(() => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/";
        // const baseUrl = process.env.NEXT_PUBLIC_API_URL; // Optionally use environment variable
        const url = baseUrl + `api/jobseeker/${jobseekerId}`;
        const getJobseekerData = async () => {
            try {
                const res = await fetch(url, {
                    method: "GET",
                    credentials: "include",
                });
                const data = await res.json();
                if (res.status === 200 && data.code === 0) {
                    setJobseekerData(data.data.person); // Set jobseeker data state
                } else {
                    console.log(data.msg); // Log error message if not successful
                }
            } catch (error) {
                console.error("Error fetching jobseeker data:", error); // Catch and log fetch errors
            }
        };

        getJobseekerData();
    }, [jobseekerId])


    // Return the layout of the profile page using a Container component
    return (
        <Container className="scroll-page">
            {/* Create a Row to organize the layout in a grid format */}
            <Row>
                {/* First column for personal information, documents, and affiliations */}
                <Col md={4} xl={3}>
                    {/* Render the PersonalInfo component */}
                    <PersonalInfo jobseekerData={jobseekerData} />
                    {/* Render the Documents component */}
                    <Documents documents={jobseekerData.files} />
                    {/* Render the Affiliations component */}
                    <Affiliations affiliations={jobseekerData.affiliations} />
                </Col>
                {/* Second column for experiences, projects, and video */}
                <Col md={8} xl={6}>
                    {/* Render the Experiences component */}
                    <Experiences experiences={jobseekerData.experiences} />
                    {/* Render the Projects component */}
                    <Projects projects={jobseekerData.projects} />
                    {/* Render the Video component */}
                    <Video video={jobseekerData.videos[0]} />
                </Col>
                {/* Third column for skills, accomplishments, and quick apply */}
                <Col md={12} xl={3} id="lastCol">
                    {/* Render the Skills component */}
                    <Skills skills={jobseekerData.skills} />
                    {/* Render the Accomplishments component */}
                    <Accomplishments accomplishments={jobseekerData.accomplishments} />
                    {/* Render the QuickApply component with quickApply prop set to true */}
                    <QuickApply quickApply={jobseekerData.isQuickApplyActivated}/>
                    {/* TO-DO: fetch data in server component */}
                </Col>
            </Row>
        </Container>
    );
}

// Export the Profile component, previously wrapped with a user exclusion HOC (commented out)
// export default withApplicantExclusion(Profile);

export default Profile;
