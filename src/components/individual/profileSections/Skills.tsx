import React, { useMemo, useState } from "react";
import { fetchSkills } from "./fakeFetchProfileSections";
import InfoCard from "../../cards/InfoCard";
import SmallLi from "../../cards/SmallLi";

export default function Skills() {
    const [reload, setReload] = useState(false);
    const skills = useMemo(fetchSkills, [reload]);

    return <InfoCard
        title="Skills"
        editFunc={() => {console.log("TO-Do: edit skills")}}
        >
        {skills.map(skill => <SmallLi text={skill} url="" key={skill} />)}
    </InfoCard>
}