import React, { useMemo, useState } from "react";
import { fetchAffiliations } from "./fakeFetchProfileSections";
import InfoCard from "../../common/InfoCard";
import SmallLi from "../../common/SmallLi";

export default function Affiliations() {
    const [reload, setReload] = useState(false);
    const affiliations = useMemo(fetchAffiliations, [reload]);

    return <InfoCard
        title="Affiliations"
        editFunc={() => {console.log("TO-Do: edit affiliations")}}
        >
        {affiliations.map(affiliation => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
    </InfoCard>
}