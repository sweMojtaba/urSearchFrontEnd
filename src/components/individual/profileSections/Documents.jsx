import React, { useMemo } from "react";
import { fetchDocuments } from "./fakeFetchProfileSections.ts";
import InfoCard from "../../common/InfoCard.jsx";
import SmallLi from "../../common/SmallLi.jsx";
import useUploadButtonProps from "../../common/hooks/useButtonProps.ts";

export default function Documents() {
    const documents = useMemo(fetchDocuments, []);

    // useEffect(() => {
    //     setButtonProps(uploadButtonProps);
    // }, [uploadButtonProps]);


    // useEffect(() => {
    //     console.log(uploadButtonProps);
    // }, [uploadButtonProps]);

    return <InfoCard
        title="Documents"
        editFunc={() => {console.log("TO-DO: edit documents")}}>
        {documents.map(document => <SmallLi text={document.name} url={document.url} key={document.name} />)}
    </InfoCard>
}