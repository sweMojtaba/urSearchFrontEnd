import React, { useEffect, useMemo, useState } from "react";
import { fetchDocuments } from "./fakeFetchProfileSections.ts";
import InfoCard from "../../common/InfoCard.jsx";
import SmallLi from "../../common/SmallLi.jsx";
import useUploadButtonProps from "../../common/hooks/useUploadButtonProps.ts";

export default function Documents() {
    const documents = useMemo(fetchDocuments, []);
    // const [buttonProps, setButtonProps] = useState({
    //     buttonText: "add",
    //     buttonAction: () => console.log("documents"),
    //     disabled: false
    // });
    const uploadButtonProps = useUploadButtonProps("url/to/upload/documents");

    // useEffect(() => {
    //     setButtonProps(uploadButtonProps);
    // }, [uploadButtonProps]);


    // useEffect(() => {
    //     console.log(uploadButtonProps);
    // }, [uploadButtonProps]);

    return <InfoCard
        title="Documents"
        buttonProps={uploadButtonProps}
        buttonPresent={true}>
        {documents.map(document => <SmallLi text={document.name} url={document.url} key={document.name} />)}
    </InfoCard>
}