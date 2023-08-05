"use client" // needed because I need to pass a function to cards

import { CardWithImg, InfoCard, PassableInfoCardProps } from "@/components/cards-and-items/cards";
import { fetchAffiliations, fetchDocuments, fetchExperiences, fetchGPAhidden, fetchPersonalInfo, fetchProjects } from "./fetchProfileSections";
import { BigLi, SmallLi } from "@/components/cards-and-items/listItems";
import Profile from "./profileSolid.svg"
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../context";
import WorkIcon from "./work.svg"
import ProjectIcon from "./project.svg"

export function PersonalInfo() {
    const {user, setUser} = useContext(UserContext);
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

    return <InfoCard
        title="Affiliations"
        editFunc={() => {console.log("TO-Do: edit affiliations")}}
        >
        {affiliations.map(affiliation => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
    </InfoCard>
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