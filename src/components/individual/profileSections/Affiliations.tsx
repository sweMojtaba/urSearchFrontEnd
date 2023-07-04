import React, { useEffect, useMemo, useState } from "react";
import { fetchAffiliations } from "./fakeFetchProfileSections";
import InfoCard from "../../common/InfoCard";
import SmallLi from "../../common/SmallLi";
import { Form } from "react-bootstrap";
import { useAddButtonProps } from "../../common/hooks/useButtonProps";

export default function Affiliations() {
    const [reload, setReload] = useState(false);
    const affiliations = useMemo(fetchAffiliations, [reload]);
    const [newAffiliation, setNewAffiliation] = useState("");
    const buttonProps = useAddButtonProps("url/to/add/affiliation", newAffiliation, setNewAffiliation, setReload);

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
        buttonProps={buttonProps}
        buttonPresent={true}>
        {affiliations.map(affiliation => <SmallLi text={affiliation.name} url={affiliation.url} key={affiliation.name} />)}
        <Form.Control type="text" placeholder="New Affiliation" value={newAffiliation} onChange={(event) => setNewAffiliation(event.target.value)} />
    </InfoCard>
}