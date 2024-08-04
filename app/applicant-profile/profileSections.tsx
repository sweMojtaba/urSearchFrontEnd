"use client"; // needed because I need to pass a function to cards

// Importing necessary components and functions
import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { fetchAccomplishments, fetchAffiliations, fetchDocuments, fetchExperiences, fetchGPAhidden, fetchPersonalInfo, fetchProjects, fetchSkills, fetchVideo } from "./fetchProfileSections";
import { BigLi, SmallLi } from "@/components/cards-and-items/listItems";
import Profile from "./profileSolid.svg";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../context";
import WorkIcon from "./work.svg";
import ProjectIcon from "./project.svg";
import fakeResponse from "@/utils/fakeResponse";
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply";
import { Button } from 'react-bootstrap';

// Component to display personal information
export function PersonalInfo() {
    // Accessing user context
    const { user, setUser } = useContext(UserContext);
    // Fetching personal information using useMemo for memoization
    const {
        name,
        degree,
        major,
        school,
        classYear,
        GPA,
        phone,
        email
    } = useMemo(fetchPersonalInfo, [user]);
    // Fetching GPA visibility status
    const { GPAhidden } = useMemo(fetchGPAhidden, [user]);
    
    // Defining properties for the card component
    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: name,
            editFunc: () => { console.log("TO-DO: edit personal info") }
        }
    }, [name]);

    // Returning the card with personal information
    return <CardWithImg
        CardComponent={InfoCard}
        cardProps={cardProps}
        ImgSrc={Profile}
    >
        <p>{degree} {major}</p>
        <p>{school}</p>
        <p>class of {classYear}</p>
        <p className="stand-out">GPA: {GPA} <span className="secondary-text">{GPAhidden ? "hidden" : "shown"}</span></p>
        <p>phone: {phone}</p>
        <p>email: {email}</p>
    </CardWithImg>;
}

// Component to display documents
export function Documents() {
    // Fetching documents using useMemo for memoization
    const documents = useMemo(fetchDocuments, []);

    // Returning the card with documents information
    return <InfoCard
        title="Documents"
        editFunc={() => { console.log("TO-DO: edit documents") }}
    >
        {documents.map(document => <SmallLi text={document.name} url={document.url} key={document.name} />)}
    </InfoCard>;
}

// Component to display affiliations
export function Affiliations() {
    // State to trigger reload
    const [reload, setReload] = useState(false);
    // Fetching affiliations using useMemo for memoization
    const affiliations = useMemo(fetchAffiliations, [reload]);

    // Returning the card with affiliations information
    return <InfoCard
        title="Affiliations"
        editFunc={() => { console.log("TO-Do: edit affiliations") }}
    >
        {affiliations.map(affiliation => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
    </InfoCard>;
}

// Component to display experiences
export function Experiences() {
    // Fetching experiences using useMemo for memoization
    const experiences = useMemo(fetchExperiences, []);

    // Returning the card with experiences information
    return <InfoCard
        title="Experiences"
        editFunc={() => { console.log("TO-DO: edit experiences") }}
    >
        {experiences.map((experience) => {
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
export function Projects() {
    // Fetching projects using useMemo for memoization
    const projects = useMemo(fetchProjects, []);

    // Returning the card with projects information
    return <InfoCard
        title="Projects and Publications"
        editFunc={() => { console.log("TO-DO: edit experiences") }}
    >
        {projects.map((project) => {
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
export function Video(): JSX.Element {
    // Fetching video URL using useMemo for memoization
    const video = useMemo(fetchVideo, []);

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
export function Skills() {
    // State to trigger reload
    const [reload, setReload] = useState(false);
    // Fetching skills using useMemo for memoization
    const skills = useMemo(fetchSkills, [reload]);

    // Returning the card with skills information
    return <InfoCard
        title="Skills"
        editFunc={() => { console.log("TO-Do: edit skills") }}
    >
        {skills.map(skill => <SmallLi text={skill} url="" key={skill} />)}
    </InfoCard>;
}

// Component to display accomplishments
export function Accomplishments() {
    // State to trigger reload
    const [reload, setReload] = useState(false);
    // Fetching accomplishments using useMemo for memoization
    const accomplishments = useMemo(fetchAccomplishments, [reload]);

    // Returning the card with accomplishments information
    return <InfoCard
        title="Accomplishments"
        editFunc={() => { console.log("TO-Do: edit skills") }}
    >
        {accomplishments.map(accomplishment => <SmallLi text={accomplishment} url="" key={accomplishment} />)}
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
