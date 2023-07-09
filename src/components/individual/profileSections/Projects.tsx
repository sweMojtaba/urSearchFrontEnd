import React, { useMemo } from "react";
import { fetchProjects } from "./fakeFetchProfileSections";
import InfoCard from "../../common/InfoCard";
import BigLi from "../../common/BigLi";
import {ReactComponent as ProjectImg} from "../../../assets/project.svg";

export default function Projects(): JSX.Element {
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
                Img={ProjectImg}
                />
        })}
    </InfoCard>

}