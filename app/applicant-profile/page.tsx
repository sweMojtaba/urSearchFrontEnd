"use client" // needed for ApplicantExclusion wrapper

import { ClientCol, ClientContainer, ClientRow } from "@/client-wrappers/bootstrap";
import { Affiliations, Documents, Experiences, PersonalInfo, Projects } from "./profileSections";
import { withApplicantExclusion } from "@/utils/withUserExclusion";


function Profile() {
    return <ClientContainer className="scroll-page">
        <ClientRow>
            <ClientCol md={4} xl={3}>
                <PersonalInfo />
                <Documents />
                <Affiliations />
            </ClientCol>
            <ClientCol md={8} xl={6}>
                <Experiences />
                <Projects />
                {/* <Video /> */}
            </ClientCol>
            <ClientCol md={12} xl={3} id="lastCol">
                {/* <Skills /> */}
                {/* <Accomplishments /> */}
                {/* <QuickApply /> */}
            </ClientCol>
        </ClientRow>
    </ClientContainer>
}

export default withApplicantExclusion(Profile);