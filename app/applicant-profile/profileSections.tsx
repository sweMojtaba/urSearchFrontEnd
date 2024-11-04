"use client"; // needed because I need to pass a function to cards

// Importing necessary components and functions
import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { BigLi, SmallLi } from "@/components/cards-and-items/listItems";
import Profile from "./profileSolid.svg";
import { useMemo } from "react";
import WorkIcon from "./work.svg";
import ProjectIcon from "./project.svg";
import fakeResponse from "@/utils/fakeResponse";
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply";

// Component to display personal information
export function PersonalInfo(jobseekerData: any) {
    // Defining properties for the card component
    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: jobseekerData.name,
            editFunc: () => { console.log("TO-DO: edit personal info") }
        }
    }, [jobseekerData.name]);

    // Returning the card with personal information
    return <CardWithImg
        CardComponent={InfoCard}
        cardProps={cardProps}
        ImgSrc={Profile}
    >
        <p>{jobseekerData.degree} {jobseekerData.major}</p>
        <p>{jobseekerData.school}</p>
        <p>class of {jobseekerData.classYear}</p>
        <p className="stand-out">GPA: {jobseekerData.GPA} <span className="secondary-text">{jobseekerData.GPAhidden ? "hidden" : "shown"}</span></p>
        <p>phone: {jobseekerData.phone}</p>
        <p>email: {jobseekerData.email}</p>
    </CardWithImg>;
}

// Component to display documents
export function Documents({ documents }: { documents: any[] }) {
    // Returning the card with documents information
    return <InfoCard
        title="Documents"
        editFunc={() => { console.log("TO-DO: edit documents") }}
    >
        {documents.map((document: any) => <SmallLi text={document.name} url={document.url} key={document.name} />)}
    </InfoCard>;
}

// Component to display affiliations
export function Affiliations({ affiliations }: { affiliations: any[] }) {
    // Returning the card with affiliations information
    return <InfoCard
        title="Affiliations"
        editFunc={() => { console.log("TO-Do: edit affiliations") }}
    >
        {affiliations.map((affiliation: any) => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
    </InfoCard>;
}

// Component to display experiences
export function Experiences({ experiences }: { experiences: any[] }) {
    // Returning the card with experiences information
    return <InfoCard
        title="Experiences"
        editFunc={() => { console.log("TO-DO: edit experiences") }}
    >
        {experiences.map((experience: any) => {
            return <BigLi
                key={experience.name}
                title={experience.name}
                subtitle={experience.role}
                note={experience.start + " – " + experience.end}
                ImgSrc={WorkIcon}
            />
        })}
    </InfoCard>;
}

// Component to display projects
export function Projects({ projects }: { projects: any[] }) {
    // Returning the card with projects information
    return <InfoCard
        title="Projects and Publications"
        editFunc={() => { console.log("TO-DO: edit experiences") }}
    >
        {projects.map((project: any) => {
            return <BigLi
                key={project.name}
                title={project.name}
                subtitle={project.description}
                note={project.start + " – " + project.end}
                ImgSrc={ProjectIcon}
            />
        })}
    </InfoCard>;
}

// Component to display video
export function Video(video: any): JSX.Element {
    // Returning the card with video player
    return <InfoCard
        title="Let me introduce myself..."
        editFunc={() => { console.log("TO-DO: edit video") }}
    >
        <video controls>
            <source src={video.url} type="video/webm" />
        </video>
    </InfoCard>;
}

// Component to display skills
export function Skills({ skills }: { skills: any[] }) {
    // Returning the card with skills information
    return <InfoCard
        title="Skills"
        editFunc={() => { console.log("TO-Do: edit skills") }}
    >
        {skills.map((skill: any) => <SmallLi text={skill} url="" key={skill} />)}
    </InfoCard>;
}

// Component to display accomplishments
export function Accomplishments({ accomplishments }: { accomplishments: any[] }) {
    // Returning the card with accomplishments information
    return <InfoCard
        title="Accomplishments"
        editFunc={() => { console.log("TO-Do: edit skills") }}
    >
        {accomplishments.map((accomplishment: any) => <SmallLi text={accomplishment} url="" key={accomplishment} />)}
    </InfoCard>;
}

// Enum for button text status
const buttonTextEnum: ButtonTextEnum = {
    ACTIVATED: "Activated",
    ACTIVATING: "Activating...",
    NOT_ACTIVATED: "Accept Quick Apply!"
}

// Create button status object
const buttonStatus = createButtonStatus(buttonTextEnum);

// Component to display Quick Apply button and functionality
export function QuickApply({ quickApply }: { quickApply: boolean }) {
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
