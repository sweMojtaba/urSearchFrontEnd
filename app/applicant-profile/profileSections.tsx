"use client" // needed because I need to pass a function to cards

import { BulletPointCard, CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { fetchAccomplishments, fetchAffiliations, fetchDocuments, fetchExperiences, fetchGPAhidden, fetchPersonalInfo, fetchProjects, fetchSkills, fetchVideo } from "./fetchProfileSections";
import { BigLi, SmallLi } from "@/components/cards-and-items/listItems";
import Profile from "./profileSolid.svg"
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../context";
import WorkIcon from "./work.svg"
import ProjectIcon from "./project.svg"
import fakeResponse from "@/utils/fakeResponse";
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply";

export function PersonalInfo() {
    const { user, setUser } = useContext(UserContext);
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
    const { GPAhidden } = useMemo(fetchGPAhidden, [user]);
    // TO-DO: move data fetching to server components
    const cardProps: PassableInfoCardProps = useMemo(() => {
        return {
            title: name,
            editFunc: () => { console.log("TO-DO: edit personal info") }
        }
    }, [name])

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
    </CardWithImg>
}

export function Documents() {
    const documents = useMemo(fetchDocuments, []);
    // const documentsPopup = something;

    return <InfoCard
        title="Documents"
        editFunc={() => { console.log("TO-DO: edit documents") }}
    >
        {documents.map(document => <SmallLi text={document.name} url={document.url} key={document.name} />)}
    </InfoCard>
}

export function Affiliations() {
    const [reload, setReload] = useState(false);
    const affiliations = useMemo(fetchAffiliations, [reload]);

    return <BulletPointCard
        title="Affiliations"
        apiURL="https://example.org"
    >
        {affiliations.map(affiliation => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
    </BulletPointCard>
}

export function Experiences() {
    const experiences = useMemo(fetchExperiences, []);

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
    </InfoCard>

}

export function Projects() {
    const projects = useMemo(fetchProjects, []);

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
    </InfoCard>

}

export function Video(): JSX.Element {
    const video = useMemo(fetchVideo, []);


    return <InfoCard
        title="Let me introduce myself..."
        editFunc={() => { console.log("TO-DO: edit video") }}
    >
        {/* <iframe src="https://www.youtube.com/embed/GYkq9Rgoj8E" width={560} height={315} title="video" allowFullScreen={true} /> */}
        <video controls>
            <source src={video.url} type="video/webm" />
        </video>
    </InfoCard>
}

export function Skills() {
    const [reload, setReload] = useState(false);
    const skills: string[] = useMemo(fetchSkills, [reload]);

    return <BulletPointCard
        title="Skills"
        apiURL="https://example.org"
    >
        {skills.map(skill => <SmallLi text={skill} url="" key={skill} />)}
    </BulletPointCard>
}

export function Accomplishments() {
    const [reload, setReload] = useState(false);
    const accomplishments = useMemo(fetchAccomplishments, [reload]);

    return <BulletPointCard
        title="Accomplishments"
        apiURL="https://example.org"
    >
        {accomplishments.map(accomplishment => <SmallLi text={accomplishment} url="" key={accomplishment} />)}
    </BulletPointCard>
}


const buttonTextEnum: ButtonTextEnum = {
    ACTIVATED: "Activated",
    ACTIVATING: "Activating...",
    NOT_ACTIVATED: "Accept Quick Apply!"
}

const buttonStatus = createButtonStatus(buttonTextEnum);

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