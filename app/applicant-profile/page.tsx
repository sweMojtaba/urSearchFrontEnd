import { ClientCol, ClientContainer, ClientRow } from "@/client-wrappers/bootstrap";
import { Documents, PersonalInfo } from "./profileSections";


export default function Profile() {
    return <ClientContainer className="scroll-page">
        <ClientRow>
            <ClientCol md={4} xl={3}>
                <PersonalInfo />
                <Documents />
                {/* <Affiliations /> */}
            </ClientCol>
            <ClientCol md={8} xl={6}>
                {/* <Experiences /> */}
                {/* <Projects /> */}
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