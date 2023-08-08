// "use client" // needed for ApplicantExclusion wrapper

import { Col, Container, Row } from "@/client-wrappers/bootstrap";
import { Accomplishments, Affiliations, Documents, Experiences, PersonalInfo, Projects, QuickApply, Skills, Video } from "./profileSections";
// import { withApplicantExclusion } from "@/utils/withUserExclusion";


function Profile() {
    return <Container className="scroll-page">
        <Row>
            <Col md={4} xl={3}>
                <PersonalInfo />
                <Documents />
                <Affiliations />
            </Col>
            <Col md={8} xl={6}>
                <Experiences />
                <Projects />
                <Video />
            </Col>
            <Col md={12} xl={3} id="lastCol">
                <Skills />
                <Accomplishments />
                <QuickApply quickApply={true}/>
                {/* TO-DO: fetch data in server component */}
            </Col>
        </Row>
    </Container>
}

// export default withApplicantExclusion(Profile);

export default Profile;