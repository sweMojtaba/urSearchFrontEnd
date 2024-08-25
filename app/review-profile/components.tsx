"use client"; // Indicates that this component uses client-side features, allowing functions to be passed to cards

import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards"; // Imports components for displaying cards with images
import { BigLi, SmallLi } from "@/components/cards-and-items/listItems"; // Imports components for list items with different sizes
import Profile from "./profileSolid.svg"; // Importing an SVG image for profile
import { useMemo, useState } from "react"; // Importing React hooks
import WorkIcon from "./work.svg"; // Importing an SVG image for work experiences
import ProjectIcon from "./project.svg"; // Importing an SVG image for projects
import fakeResponse from "@/utils/fakeResponse"; // Importing a utility for fake responses
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply"; // Imports components and enums for quick apply functionality
import { Button } from "react-bootstrap"; // Importing Bootstrap Button component
import { PersonalInfoInterface, DocumentsInterface, AffiliationsInterface, ExperiencesInterface, ProjectsInterface, VideoInterface, SkillsInterface, AccomplishmentsInterface, QuickApplyInterface } from "./interfaces"; // Importing TypeScript interfaces
import { fetchApplicationInfo } from "./fetchProfileSections"; // Importing a function for fetching application info

// Component for displaying personal information
export function PersonalInfo({ name, degree, major, school, classYear, GPA, phone, email, GPAhidden }: PersonalInfoInterface) {
    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: name,
            editFunc: () => {
                console.log("TO-DO: edit personal info");
            },
        };
    }, [name]);

    return (
        <CardWithImg CardComponent={InfoCard} cardProps={cardProps} ImgSrc={Profile}>
            <p>{degree} {major}</p>
            <p>{school}</p>
            <p>class of {classYear}</p>
            <p className="stand-out">
                GPA: {GPA} <span className="secondary-text">{GPAhidden ? "hidden" : "shown"}</span>
            </p>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
        </CardWithImg>
    );
}

// Component for displaying and downloading documents
export function Documents({ documents, resume, coverLetter, applicationId }: DocumentsInterface) {
    const handleResumeDownload = async () => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/"; // Base URL for API
        const url = baseUrl + `api/lab/me/application/${applicationId}/resume`; // URL for fetching resume

        const res = await fetch(url, {
            method: "GET",
            credentials: "include",
        });

        if (res.status == 200) {
            const blob = await res.blob();
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.download = resume;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(blobURL);
        }
    };

    const handleCoverLetterDownload = async () => {
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/"; // Base URL for API
        const url = baseUrl + `api/lab/me/application/${applicationId}/coverletter`; // URL for fetching cover letter

        const res = await fetch(url, {
            method: "GET",
            credentials: "include",
        });

        if (res.status == 200) {
            const blob = await res.blob();
            const blobURL = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = blobURL;
            a.download = coverLetter;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(blobURL);
        }
    };

    return (
        <InfoCard
            title="Documents"
            editFunc={() => {
                console.log("TO-DO: edit documents");
            }}
        >
            {resume.length > 0 && (
                <div id="downloadable-document" onClick={handleResumeDownload}>
                    <SmallLi text={resume} />
                </div>
            )}
            {coverLetter.length > 0 && (
                <div id="downloadable-document" onClick={handleCoverLetterDownload}>
                    <SmallLi text={coverLetter} />
                </div>
            )}
            {documents && documents.map((document) => <SmallLi text={document.name} url={document.url} key={document.ID} />)}
        </InfoCard>
    );
}

// Component for displaying affiliations
export function Affiliations({ affiliations }: AffiliationsInterface) {
    return (
        <InfoCard
            title="Affiliations"
            editFunc={() => {
                console.log("TO-Do: edit affiliations");
            }}
        >
            {affiliations && affiliations.map((affiliation) => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.ID} />)}
        </InfoCard>
    );
}

// Component for displaying work experiences
export function Experiences({ experiences }: ExperiencesInterface) {
    return (
        <InfoCard
            title="Experiences"
            editFunc={() => {
                console.log("TO-DO: edit experiences");
            }}
        >
            {experiences &&
                experiences.map((experience) => {
                    return <BigLi key={experience.ID} title={experience.name} subtitle={experience.role} note={experience.start + " – " + experience.end} ImgSrc={WorkIcon} />;
                })}
        </InfoCard>
    );
}

// Component for displaying projects and publications
export function Projects({ projects }: ProjectsInterface) {
    return (
        <InfoCard
            title="Projects and Publications"
            editFunc={() => {
                console.log("TO-DO: edit projects");
            }}
        >
            {projects &&
                projects.map((project) => {
                    return <BigLi key={project.ID} title={project.name} subtitle={project.description} note={project.start + " – " + project.end} ImgSrc={ProjectIcon} />;
                })}
        </InfoCard>
    );
}

// Component for displaying a video introduction
export function Video({ videos }: VideoInterface): JSX.Element {
    return (
        <InfoCard
            title="Let me introduce myself..."
            editFunc={() => {
                console.log("TO-DO: edit video");
            }}
        >
            <video controls>
                <source src={videos[0]?.url || ""} type="video/webm" />
            </video>
        </InfoCard>
    );
}

// Component for displaying skills
export function Skills({ skills }: SkillsInterface) {
    return (
        <InfoCard
            title="Skills"
            editFunc={() => {
                console.log("TO-Do: edit skills");
            }}
        >
            {skills && skills.map((skill, i) => <SmallLi text={skill} url="" key={i} />)}
        </InfoCard>
    );
}

// Component for displaying accomplishments
export function Accomplishments({ accomplishments }: AccomplishmentsInterface) {
    return (
        <InfoCard
            title="Accomplishments"
            editFunc={() => {
                console.log("TO-Do: edit accomplishments");
            }}
        >
            {accomplishments && accomplishments.map((accomplishment, i) => <SmallLi text={accomplishment} url="" key={i} />)}
        </InfoCard>
    );
}

// Define button text enum for Quick Apply button
const buttonTextEnum: ButtonTextEnum = {
    ACTIVATED: "Activated",
    ACTIVATING: "Activating...",
    NOT_ACTIVATED: "Accept Quick Apply!",
};

// Create button status based on enum
const buttonStatus = createButtonStatus(buttonTextEnum);

// Component for Quick Apply functionality
export function QuickApply({ quickApply }: QuickApplyInterface) {
    return (
        <QuickApplyTemplate
            initialStatus={quickApply ? buttonStatus.ACTIVATED : buttonStatus.NOT_ACTIVATED}
            buttonStatus={buttonStatus}
            fetchFunction={fakeResponse} // Replace with the specific fetch function
            title="Quick Apply!"
            note="Your resume, profile information and video will be used for applications that have the Quick Apply function! Save yourself some time!"
        />
    );
}

// Component for displaying application information
export function ApplicationInformation() {
    const [reload, setReload] = useState(false);
    const applicationInfo = useMemo(fetchApplicationInfo, [reload]);

    return (
        <div className="white-bg">
            <InfoCard
                title="Application Info"
                editFunc={() => {
                    console.log("TO-Do: edit application info");
                }}
            >
                {applicationInfo.map((info) => (
                    <SmallLi text={info} url="" key={info} />
                ))}
            </InfoCard>
        </div>
    );
}

// Component for displaying a shadow effect
export function Shadow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
        </svg>
    );
}

// Component for rendering function buttons for decision making
export function FunctionButtons({ activeButton, clicked, applicationId }: { activeButton: string | null; applicationId: string | null; clicked: (buttonName: string) => void }) {
    const handleDescision = async (descision: string) => {
        if (applicationId === null) return;
        const baseUrl = "https://ursearch-api.salmonmeadow-33eeb5e6.westus2.azurecontainerapps.io/"; // Base URL for API
        const url = baseUrl + `api/lab/me/application/${applicationId}/status`; // URL for updating application status
        const res = await fetch(url, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ status: descision }),
        });
        const data = await res.json();
        if (res.status == 200 && data.code == 0) {
            if (descision == "accept") {
                clicked("Accept");
            } else if (descision == "interview") {
                clicked("Interview");
            } else if (descision == "reject") {
                clicked("Reject");
            } else {
                console.log("Invalid descision");
            }
        }
    };

    return (
        <>
            <Button onClick={() => handleDescision("interview")} className={activeButton === "Interview" ? "interview" : ""}>
                Extend Interview
            </Button>
            <Button onClick={() => handleDescision("accept")} className={activeButton === "Accept" ? "accept" : ""}>
                Quick Accept
            </Button>
            <Button onClick={() => handleDescision("reject")} className={activeButton === "Reject" ? "reject" : ""}>
                Reject
            </Button>
        </>
    );
}

// Component for rendering email content based on active button
export function Email({ activeButton, handleSendClick }: { activeButton: string | null; handleSendClick: () => void }) {
    return (
        <div className="email-container">
            <h5>TODO: Offer type Offer [No Reply]</h5>
            <p>Dear [Applicant name]</p>
            <p className="mt-5">
                We are writing to express our appreciation for your application for the [Position Name] at [Company Name]. Your qualifications and experience have left a positive impression on our team, and we believe you could be a valuable addition to our organization. We would like to invite you for an interview to further discuss your candidacy. In the next two weeks, our team is available for interviews, and we would appreciate it if you could let us know your availability during this
                period. This will allow us to schedule the interview at a time that works best for you.
            </p>
            <p>In the meantime, please familiarize yourself with our companys mission, values, and the responsibilities associated with the [Position Name]. This will help us have a more productive discussion during the interview. To confirm your availability and schedule the interview, please contact us at [Contact Email]. If you have any questions or need further information, dont hesitate to reach out to us.</p>
            <p className="mt-5">We are excited about the possibility of you joining our team at [Company Name] and look forward to getting to know you better during the interview.</p>
            <p className="mt-5">Thank you for your interest in our organization.</p>
            <p>Best regards,</p>
            <p>[Company Name] team</p>
            <p>[Company Email Address]</p>
            <Button onClick={handleSendClick}>Send</Button>
        </div>
    );
}
