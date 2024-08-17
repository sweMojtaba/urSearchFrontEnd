"use client"; // needed because I need to pass a function to cards
// Indicates that this file is intended for client-side execution in a Next.js application. This is necessary for passing functions to components like cards.

import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
// Importing CardWithImg and InfoCard components, along with PassableInfoCardProps type for defining card properties.

import { fetchAffiliations, fetchDocuments, fetchGPAhidden, fetchPersonalInfo, fetchVideo } from "./fetchProposalData";
// Importing functions to fetch various types of proposal data, including affiliations, documents, GPA information, personal info, and video.

import { BigLi, SmallLi } from "@/components/cards-and-items/listItems";
// Importing list item components BigLi and SmallLi for rendering lists.

import Profile from "./profileSolid.svg";
// Importing a profile SVG image for use in profile cards.

import { useContext, useMemo, useState } from "react";
// Importing React hooks: useContext for accessing context values, useMemo for memoizing values, and useState for managing component state.

import { UserContext } from "../context";
// Importing UserContext to access and manipulate user-related state.

import WorkIcon from "./work.svg";
import ProjectIcon from "./project.svg";
// Importing SVG icons for work and project.

import fakeResponse from "@/utils/fakeResponse";
// Importing a utility for generating fake responses, likely used for testing or mock data.

import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply";
// Importing enums and functions related to quick apply functionality.

import { Button } from "react-bootstrap";
// Importing Button component from React Bootstrap for consistent styling.

export function PersonalInfo() {
    // Component for displaying personal information.

    const { user, setUser } = useContext(UserContext);
    // Accessing user context and setter function.

    const { name, degree, major, school, classYear, GPA, phone, email } = useMemo(fetchPersonalInfo, [user]);
    const { GPAhidden } = useMemo(fetchGPAhidden, [user]);
    // Fetching personal info and GPA hidden status using useMemo for memoization, dependent on user context.

    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: name,
            editFunc: () => {
                console.log("TO-DO: edit personal info");
                // Placeholder function for editing personal information.
            },
        };
    }, [name]);

    return (
        <div className="white-bg">
            {/* Container with a white background for the personal info card. */}
            
            <CardWithImg CardComponent={InfoCard} cardProps={cardProps} ImgSrc={Profile}>
                {/* Rendering InfoCard within a CardWithImg component, using profile image and cardProps. */}
                
                <p>
                    {degree} {major}
                </p>
                <p>{school}</p>
                <p>class of {classYear}</p>
                <p className="stand-out">
                    GPA: {GPA} <span className="secondary-text">{GPAhidden ? "hidden" : "shown"}</span>
                </p>
                <p>phone: {phone}</p>
                <p>email: {email}</p>
            </CardWithImg>
        </div>
    );
}

export function More() {
    // Component for displaying additional options.

    return (
        <InfoCard title="More...">
            {/* Rendering InfoCard with title "More..." */}
            <Button>View Profile</Button>
            {/* Button for viewing the profile */}
        </InfoCard>
    );
}

export function Documents() {
    // Component for displaying documents.

    const documents = useMemo(fetchDocuments, []);
    // Fetching documents using useMemo for memoization.

    return (
        <InfoCard
            title="Proposal and Documents"
            editFunc={() => {
                console.log("TO-DO: edit documents");
                // Placeholder function for editing documents.
            }}
        >
            {documents.map((document) => (
                <SmallLi text={document.name} url={document.url} key={document.name} />
                // Mapping over documents to render SmallLi components for each document.
            ))}
        </InfoCard>
    );
}

export function Affiliations() {
    // Component for displaying affiliations.

    const [reload, setReload] = useState(false);
    const affiliations = useMemo(fetchAffiliations, [reload]);
    // Managing reload state and fetching affiliations with useMemo.

    return (
        <InfoCard
            title="Affiliations"
            editFunc={() => {
                console.log("TO-Do: edit affiliations");
                // Placeholder function for editing affiliations.
            }}
        >
            {affiliations.map((affiliation) => (
                <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />
                // Mapping over affiliations to render SmallLi components for each affiliation.
            ))}
        </InfoCard>
    );
}

export function Video(): JSX.Element {
    // Component for displaying a video.

    const video = useMemo(fetchVideo, []);
    // Fetching video information using useMemo.

    return (
        <InfoCard
            title="Proposal Video"
            editFunc={() => {
                console.log("TO-DO: edit video");
                // Placeholder function for editing video.
            }}
        >
            {/* <iframe src="https://www.youtube.com/embed/GYkq9Rgoj8E" width={560} height={315} title="video" allowFullScreen={true} /> */}
            {/* Commented out iframe for embedding YouTube video. */}
            <video controls>
                <source src={video.url} type="video/webm" />
                {/* Rendering video with controls and source URL. */}
            </video>
        </InfoCard>
    );
}

export function Shadow() {
    // Component for rendering a shadow effect.

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
            {/* SVG path for rendering a shadow effect. */}
        </svg>
    );
}

export function FunctionButtons({ activeButton, clicked }: { activeButton: string | null; clicked: (buttonName: string) => void }) {
    // Component for rendering function buttons with conditional styling.

    return (
        <>
            <Button onClick={() => clicked("Interview")} className={activeButton === "Interview" ? "interview" : ""}>
                Extend Interview
            </Button>
            <Button onClick={() => clicked("Accept")} className={activeButton === "Accept" ? "accept" : ""}>
                Quick Accept
            </Button>
            <Button onClick={() => clicked("Reject")} className={activeButton === "Reject" ? "reject" : ""}>
                Reject
            </Button>
        </>
    );
    // Rendering buttons with conditional classes based on the activeButton prop.
}

// TODO: Use active button to change email being sent, below text is just an example
export function Email({ activeButton, handleSendClick }: { activeButton: string | null; handleSendClick: () => void }) {
    // Component for rendering an email template.

    return (
        <div className="email-container">
            <h5>TODO: Offer type Offer [No Reply]</h5>
            <p>Dear [Applicant name]</p>
            <p className="mt-5">
                We are writing to express our appreciation for your application for the [Position Name] at [Company Name]. Your qualifications and experience have left a positive impression on our team, and we believe you could be a valuable addition to our organization. We would like to invite you for an interview to further discuss your candidacy. In the next two weeks, our team is available for interviews, and we would appreciate it if you could let us know your availability during this
                period. This will allow us to schedule the interview at a time that works best for you.
            </p>
            <p>In the meantime, please familiarize yourself with our company’s mission, values, and the responsibilities associated with the [Position Name]. This will help us have a more productive discussion during the interview. To confirm your availability and schedule the interview, please contact us at [Contact Email]. If you have any questions or need further information, don’t hesitate to reach out to us.</p>
            <p className="mt-5">We are excited about the possibility of you joining our team at [Company Name] and look forward to getting to know you better during the interview.</p>
            <p className="mt-5">Thank you for your interest in our organization.</p>
            <p>Best regards,</p>
            <p>[Company Name] team</p>
            <p>[Company Email Address]</p>
            <Button onClick={handleSendClick}>Send</Button>
        </div>
    );
    // Rendering an email template with placeholders and a button to send the email.
}
