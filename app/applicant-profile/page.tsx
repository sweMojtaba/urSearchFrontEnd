// "use client" // needed for ApplicantExclusion wrapper
// The "use client" directive is commented out but typically needed when using client-side rendering in Next.js components

// Importing Col, Container, and Row components from a custom bootstrap wrapper
import { Col, Container, Row } from "@/client-wrappers/bootstrap";

// Importing various sections/components of the profile page from the profileSections module
import { Accomplishments, Affiliations, Documents, Experiences, PersonalInfo, Projects, QuickApply, Skills, Video } from "./profileSections";

// Importing a higher-order component for user exclusion logic, which is currently commented out
// import { withApplicantExclusion } from "@/utils/withUserExclusion";

// Define the Profile function component
function Profile() {
    // Return the layout of the profile page using a Container component
    return (
        <Container className="scroll-page">
            {/* Create a Row to organize the layout in a grid format */}
            <Row>
                {/* First column for personal information, documents, and affiliations */}
                <Col md={4} xl={3}>
                    {/* Render the PersonalInfo component */}
                    <PersonalInfo />
                    {/* Render the Documents component */}
                    <Documents />
                    {/* Render the Affiliations component */}
                    <Affiliations />
                </Col>
                {/* Second column for experiences, projects, and video */}
                <Col md={8} xl={6}>
                    {/* Render the Experiences component */}
                    <Experiences />
                    {/* Render the Projects component */}
                    <Projects />
                    {/* Render the Video component */}
                    <Video />
                </Col>
                {/* Third column for skills, accomplishments, and quick apply */}
                <Col md={12} xl={3} id="lastCol">
                    {/* Render the Skills component */}
                    <Skills />
                    {/* Render the Accomplishments component */}
                    <Accomplishments />
                    {/* Render the QuickApply component with quickApply prop set to true */}
                    <QuickApply quickApply={true}/>
                    {/* TO-DO: fetch data in server component */}
                </Col>
            </Row>
        </Container>
    );
}

// Export the Profile component, previously wrapped with a user exclusion HOC (commented out)
// export default withApplicantExclusion(Profile);

export default Profile;
