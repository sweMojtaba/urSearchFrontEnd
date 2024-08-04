"use client"; // needed because I need to pass a function to cards

import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { fetchAffiliations, fetchDocuments, fetchGPAhidden, fetchPersonalInfo, fetchVideo } from "./fetchProposalData";
import { BigLi, SmallLi } from "@/components/cards-and-items/listItems";
import Profile from "./profileSolid.svg";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../context";
import WorkIcon from "./work.svg";
import ProjectIcon from "./project.svg";
import fakeResponse from "@/utils/fakeResponse";
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply";
import { Button } from "react-bootstrap";

export function PersonalInfo() {
    const { user, setUser } = useContext(UserContext);
    const { name, degree, major, school, classYear, GPA, phone, email } = useMemo(fetchPersonalInfo, [user]);
    const { GPAhidden } = useMemo(fetchGPAhidden, [user]);
    // TO-DO: move data fetching to server components
    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: name,
            editFunc: () => {
                console.log("TO-DO: edit personal info");
            },
        };
    }, [name]);

    return (
        <div className="white-bg">
            <CardWithImg CardComponent={InfoCard} cardProps={cardProps} ImgSrc={Profile}>
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
    return (
        <InfoCard title="More...">
            <Button>View Profile</Button>
        </InfoCard>
    );
}

export function Documents() {
    const documents = useMemo(fetchDocuments, []);

    return (
        <InfoCard
            title="Proposal and Documents"
            editFunc={() => {
                console.log("TO-DO: edit documents");
            }}
        >
            {documents.map((document) => (
                <SmallLi text={document.name} url={document.url} key={document.name} />
            ))}
        </InfoCard>
    );
}

export function Affiliations() {
    const [reload, setReload] = useState(false);
    const affiliations = useMemo(fetchAffiliations, [reload]);

    return (
        <InfoCard
            title="Affiliations"
            editFunc={() => {
                console.log("TO-Do: edit affiliations");
            }}
        >
            {affiliations.map((affiliation) => (
                <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />
            ))}
        </InfoCard>
    );
}

export function Video(): JSX.Element {
    const video = useMemo(fetchVideo, []);

    return (
        <InfoCard
            title="Proposal Video"
            editFunc={() => {
                console.log("TO-DO: edit video");
            }}
        >
            {/* <iframe src="https://www.youtube.com/embed/GYkq9Rgoj8E" width={560} height={315} title="video" allowFullScreen={true} /> */}
            <video controls>
                <source src={video.url} type="video/webm" />
            </video>
        </InfoCard>
    );
}

export function Shadow() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 904 10" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.25481 -8.59499e-05H903.744V10H0.25481V-8.59499e-05Z" fill="black" fillOpacity="0.1" />
        </svg>
    );
}

export function FunctionButtons({ activeButton, clicked }: { activeButton: string | null; clicked: (buttonName: string) => void }) {
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
}

// TODO: Use active button to change email being sent, below text is just an example
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
