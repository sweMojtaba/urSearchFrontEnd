import React, { useMemo } from "react";
import { fetchDocuments } from "./fakeFetchProfileSections.ts";
import InfoCard from "../common/InfoCard";
import SmallLi from "../common/SmallLi.jsx";

export default function Documents() {
    const documents = useMemo(fetchDocuments, []);

    return <InfoCard title="Documents" buttonText="add" buttonAction={() => console.log("documents")}>
        {documents.map(document => <SmallLi text={document.name} url={document.url}/>)}
    </InfoCard>
}