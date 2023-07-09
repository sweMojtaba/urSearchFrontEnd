import React, { useMemo, useState } from "react";
import { fetchAccomplishments, fetchSkills } from "./fakeFetchProfileSections";
import InfoCard from "../../common/InfoCard";
import SmallLi from "../../common/SmallLi";

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