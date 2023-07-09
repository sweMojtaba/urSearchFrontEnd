import React, { useMemo } from "react";
import { fetchVideo } from "./fakeFetchProfileSections";
import InfoCard from "../../cards/InfoCard";

export default function Video(): JSX.Element {
    const video = useMemo(fetchVideo, []);


    return <InfoCard
        title="Let me introduce my self..."
        editFunc={() => { console.log("TO-DO: edit video") }}
    >
        {/* <iframe src="https://www.youtube.com/embed/GYkq9Rgoj8E" width={560} height={315} title="video" allowFullScreen={true} /> */}
        <video controls>
            <source src={video.url} type="video/webm" />
        </video>
    </InfoCard>
}