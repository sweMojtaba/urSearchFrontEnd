import React, { useMemo } from "react";
import { fetchDocuments } from "./fakeFetchProfileSections";
import InfoCard from "../common/InfoCard";

export default function Document() {
    const documents = useMemo(fetchDocuments, []);

    return <InfoCard title="Documents" buttonText="add" buttonAction={() => console.log("documents")}>
        <li>
            
        </li>
    </InfoCard>
}