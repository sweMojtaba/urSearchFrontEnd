import React, { useEffect, useMemo, useState } from "react";
import { fetchAffiliations } from "./fakeFetchProfileSections";
import InfoCard from "../../common/InfoCard";
import SmallLi from "../../common/SmallLi";

export default function Affiliations() {
    const [reload, setReload] = useState(false);
    const affiliations = useMemo(fetchAffiliations, [reload]);

    // This code is not easy to understand. I may want to change this.
    // This hook is used to reset the value of reload to false after the affiliations are reloaded.
    // I chose reload as a dependency to make use of how React determines whether a dependency has changed.
    // For boolean, as long as the value is the same (even if it is reset by setReload), React will not re-render.
    // Therefore max. 2 re-renders will occur.
    useEffect(() => {
        setReload(false);
    }, [reload]);

    return <InfoCard
        title="Affiliations"
        editFunc={() => {console.log("TO-Do: edit affiliations")}}
        >
        {affiliations.map(affiliation => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
    </InfoCard>
}