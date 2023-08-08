"use client"

import ReviewProfile from "./assets/reviewProfile.svg"
import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css';
import styles from "./styles.module.scss"
import Image from "next/image";
import { LabInfo, LabKeywords, LabResources } from "./fetchProfileSections";
import { InfoCard } from "@/components/cards-and-items/cards";
import { SmallLi } from "@/components/cards-and-items/listItems";
import { Button } from "react-bootstrap";
import fakeResponse from "@/utils/fakeResponse";
import { ButtonTextEnum, QuickApplyTemplate, createButtonStatus } from "@/components/functionalities/quickApply";

export function AvgRating({ rating }: { rating: number }) {
    return <div className={styles.avgRating}>
        <Rating value={rating} readOnly={true} style={{ maxWidth: "12em" }} />
        <p>{rating} out of 5</p>
    </div>
}

export function Review({ data }: {
    data: {
        rating: number,
        text: string,
        timestamp: string
    }
}) {
    return <div className={styles.review}>
        <Image src={ReviewProfile} alt="profile picture" className={styles.profilePicture} />
        <div className={styles.reviewContent}>
            <div>
                <Rating value={data.rating} readOnly={true} style={{ maxWidth: "10em" }} />
            </div>
            <div>{data.text}</div>
            <div>{data.timestamp}</div>
        </div>
    </div>
}

export function Info({ data }: { data: LabInfo }) {
    return <InfoCard
        title={data.university}
        editFunc={() => { console.log("TO-DO: edit") }}
    >
        <p>{data.department}</p>
        <p>{data.address}</p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
    </InfoCard>
}

export function Keywords({ data }: { data: LabKeywords }) {
    return <InfoCard
        title="Keywords"
        editFunc={() => { console.log("TO-DO: edit") }}
    >
        <SmallLi text={data.type + " Lab"} />
        <SmallLi text={"Field of study: " + data.field} />
        <SmallLi text={"Keywords: " + data.keywords.join(", ")} />
    </InfoCard>
}

export function Resources({ data }: { data: LabResources }) {
    return <InfoCard
        title="Resources"
        editFunc={() => { console.log("TO-DO: edit") }}
    >
        {data.map((resource, i) => <Button
            key={i}
            href={resource.link}>
            {resource.title}
        </Button>)
        }
    </InfoCard>
}

const buttonTextEnum: ButtonTextEnum = {
    ACTIVATED: "Activated",
    ACTIVATING: "Activating...",
    NOT_ACTIVATED: "Accept Quick Apply!"
}

const buttonStatus = createButtonStatus(buttonTextEnum);

export function QuickApply({ quickApply }: { quickApply: boolean }) {
    return (
        <QuickApplyTemplate
            initialStatus={quickApply ? buttonStatus.ACTIVATED : buttonStatus.NOT_ACTIVATED}
            buttonStatus={buttonStatus}
            fetchFunction={fakeResponse} // Replace with the specific fetch function
            title="Accepting Quick Applications!"
            note="In addition to applicant&rsquo;s resume, and Profile information, Receive a Video, in which the applicants try to present themselves and impress you. The video can be used instead of an entry-level interview to judge and evaluate the applicant’s values and character."
        />
    );
}