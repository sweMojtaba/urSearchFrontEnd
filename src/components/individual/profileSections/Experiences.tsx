import React, { useMemo } from "react";
import { fetchExperiences } from "./fakeFetchProfileSections";
import InfoCard from "../../common/InfoCard";
import BigLi from "../../common/BigLi";

export default function Experiences(): JSX.Element {
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
                note={experience.start + " - " + experience.end}
                />
        })}
    </InfoCard>

}