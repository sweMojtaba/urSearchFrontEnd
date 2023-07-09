import React, { useMemo, useState } from "react";
import { fetchAccomplishments, fetchSkills } from "./fakeFetchProfileSections";
import InfoCard from "../../cards/InfoCard";
import SmallLi from "../../cards/SmallLi";

export default function Accomplishments() {
    const [reload, setReload] = useState(false);
    const accomplishments = useMemo(fetchAccomplishments, [reload]);

    return <InfoCard
        title="Accomplishments"
        editFunc={() => {console.log("TO-Do: edit skills")}}
        >
        {accomplishments.map(accomplishment => <SmallLi text={accomplishment} url="" key={accomplishment} />)}
    </InfoCard>
}